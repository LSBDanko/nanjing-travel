/* ============================================================
   金陵游 · 南京旅游攻略 —— 交互逻辑（高德地图版）
   ============================================================ */

const STORAGE_KEY = 'nj_travel_checkins';
let currentDistrictFilter = null;   // 当前景点筛选的区块 id（null = 全部）
let currentFoodFilter = '全部';     // 当前美食筛选的分类
let currentAttractionQuery = '';    // 景点搜索关键词
let currentFoodQuery = '';          // 美食搜索关键词

// 景点真实坐标 [经度, 纬度]（近似）
const ATTRACTION_COORDS = {
  zhongshanling: [118.848, 32.064],
  mingxiaoling: [118.834, 32.058],
  zongtongfu: [118.792, 32.045],
  nanbo: [118.820, 32.043],
  xuanwuhu: [118.796, 32.077],
  jimingsi: [118.791, 32.067],
  fuzimiao: [118.784, 32.021],
  qinhuaihe: [118.787, 32.019],
  laomendong: [118.787, 32.010],
  zhonghuamen: [118.779, 32.008],
  yihelu: [118.763, 32.055],
  yuejianglou: [118.744, 32.090],
  nanjingyan: [118.709, 32.011],
  datusha: [118.743, 32.034],
  yuhuatai: [118.775, 32.000],
  qixiashan: [118.952, 32.160],
  niushoushan: [118.730, 31.880],
  zhenzhuquan: [118.660, 32.120]
};

/* ---------- 打卡数据 ---------- */
function getChecked() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch (e) { return []; }
}
function saveChecked(arr) { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); }

function districtById(id) { return DISTRICTS.find(d => d.id === id); }
function attractionsInDistrict(id) { return ATTRACTIONS.filter(a => a.district === id); }

/* ---------- Tab 切换 ---------- */
function switchTab(view) {
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === view));
  document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + view));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   高德地图
   ============================================================ */
let amap = null;
let infoWindow = null;
let districtPolygons = [];

function initMap() {
  const container = document.getElementById('cityMap');
  if (typeof AMap === 'undefined') {
    container.innerHTML = '<div class="map-fallback">地图加载失败：请确认已联网、Key 配置正确，并通过本地服务器打开（双击「启动金陵游.bat」）。</div>';
    return;
  }

  amap = new AMap.Map('cityMap', {
    center: [118.75, 32.05],
    zoom: 10,
    viewMode: '2D',
    resizeEnable: true
  });
  amap.addControl(new AMap.Scale());

  infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -34), autoMove: true });

  AMap.plugin(['AMap.ToolBar', 'AMap.DistrictSearch'], () => {
    amap.addControl(new AMap.ToolBar({ position: 'RB' }));
    drawDistricts();
  });

  drawMarkers();
}

/* 解析行政区划边界（兼容字符串 / 数组 / LngLat） */
function parseBoundary(b) {
  if (!b) return [];
  if (typeof b === 'string') {
    return b.split(';').filter(Boolean).map(pair => {
      const p = pair.split(',');
      return [parseFloat(p[0]), parseFloat(p[1])];
    });
  }
  if (Array.isArray(b)) {
    return b.map(p => {
      if (!p) return null;
      if (Array.isArray(p)) return [parseFloat(p[0]), parseFloat(p[1])];
      if (typeof p === 'object') {
        const lng = p.lng != null ? p.lng : (p.getLng ? p.getLng() : null);
        const lat = p.lat != null ? p.lat : (p.getLat ? p.getLat() : null);
        if (lng == null || lat == null) return null;
        return [lng, lat];
      }
      return null;
    }).filter(Boolean);
  }
  return [];
}

/* 绘制 8 个区块边界 + 名称标注 */
function drawDistricts() {
  DISTRICTS.forEach(d => {
    const ds = new AMap.DistrictSearch({ level: 'district', subdistrict: 0, extensions: 'all' });
    ds.search(d.name, (status, result) => {
      if (status !== 'complete' || !result.districtList || !result.districtList.length) return;
      const dist = result.districtList[0];

      (dist.boundaries || []).forEach(b => {
        const path = parseBoundary(b);
        if (!path.length) return;
        const polygon = new AMap.Polygon({
          path: path,
          fillColor: d.color,
          fillOpacity: 0.28,
          strokeColor: d.color,
          strokeWeight: 2,
          strokeOpacity: 0.85,
          strokeStyle: 'dashed'
        });
        polygon.setMap(amap);
        polygon.on('click', () => {
          currentDistrictFilter = d.id;
          renderAttractions(d.id);
          switchTab('attractions');
        });
        districtPolygons.push(polygon);
      });

      // 区块名称标注
      if (dist.center) {
        const label = new AMap.Marker({
          position: dist.center,
          content: `<div class="map-label" style="background:${d.color}">${d.emoji} ${d.name}</div>`,
          anchor: 'center',
          zIndex: 60
        });
        label.setMap(amap);
      }
    });
  });
}

/* 景点图钉 */
function drawMarkers() {
  if (window.__pins) { window.__pins.forEach(mk => amap.remove(mk)); }
  window.__pins = [];
  ATTRACTIONS.forEach(a => {
    const coord = ATTRACTION_COORDS[a.id];
    if (!coord) return;
    const mk = new AMap.Marker({
      position: coord,
      content: `<div class="pin${getChecked().includes(a.id) ? ' checked' : ''}" title="${a.name}">${a.emoji}</div>`,
      anchor: 'center',
      zIndex: 80
    });
    mk.setMap(amap);
    mk.on('click', () => openInfoWindow(a));
    window.__pins.push(mk);
  });
}

/* 图钉点击：弹窗显示景点详情 */
function openInfoWindow(a) {
  const d = districtById(a.district);
  const checked = getChecked().includes(a.id);
  const content = `
    <div class="iw">
      <div class="iw-title">${a.emoji} ${a.name}<span class="iw-district" style="background:${d.color}">${d.name}</span></div>
      <p>${a.desc}</p>
      <div class="iw-actions">
        <button class="btn-goto" data-id="${a.id}">📖 查看攻略</button>
        <button class="btn-checkin ${checked ? 'checked' : ''}" data-id="${a.id}">${checked ? '✅ 已打卡' : '📍 打卡'}</button>
      </div>
    </div>`;
  infoWindow.setContent(content);
  infoWindow.open(amap, ATTRACTION_COORDS[a.id]);
}

/* 图层切换：标准 / 卫星 */
function setLayer(satellite) {
  try {
    if (satellite) {
      amap.setLayers([new AMap.TileLayer.Satellite(), new AMap.TileLayer.RoadNet()]);
    } else {
      amap.setLayers([new AMap.TileLayer()]);
    }
  } catch (e) {
    console.warn('切换图层失败：', e);
  }
}

function bindMapControls() {
  document.querySelectorAll('.layer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.layer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setLayer(btn.dataset.layer === 'satellite');
    });
  });
  document.getElementById('resetMapBtn').addEventListener('click', () => {
    amap.setZoomAndCenter(10, [118.75, 32.05]);
  });
}

/* ---------- 图例 ---------- */
function renderLegend() {
  document.getElementById('mapLegend').innerHTML = DISTRICTS.map(d =>
    `<span class="legend-item"><span class="legend-dot" style="background:${d.color}"></span>${d.name}</span>`
  ).join('');
}

/* ---------- 图片降级 ---------- */
function imgError(img, emoji, color) {
  img.outerHTML = `<div class="card-photo fallback" style="background:linear-gradient(135deg,${color},${color}99)"><span>${emoji}</span></div>`;
}

/* ---------- 景点攻略 ---------- */
function renderAttractions(districtId) {
  currentDistrictFilter = districtId;

  const filterEl = document.getElementById('attractionFilter');
  filterEl.innerHTML = '';
  const chips = [{ id: null, name: '全部' }].concat(DISTRICTS.map(d => ({ id: d.id, name: d.name })));
  chips.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (c.id === districtId ? ' active' : '');
    btn.textContent = c.name;
    btn.addEventListener('click', () => renderAttractions(c.id));
    filterEl.appendChild(btn);
  });

  const q = currentAttractionQuery.trim().toLowerCase();
  const list = ATTRACTIONS.filter(a => {
    if (districtId && a.district !== districtId) return false;
    if (q) {
      const d = districtById(a.district);
      const hay = (a.name + a.desc + (d ? d.name : '') + a.history).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  const checked = getChecked();
  document.getElementById('attractionList').innerHTML = list.map(a => {
    const d = districtById(a.district);
    const isChecked = checked.includes(a.id);
    const photoHtml = a.photo
      ? `<img class="card-photo" src="${a.photo}" alt="${a.name}" loading="lazy" onerror="imgError(this,'${a.emoji}','${d.color}')">`
      : `<div class="card-photo fallback" style="background:linear-gradient(135deg,${d.color},${d.color}99)"><span>${a.emoji}</span></div>`;
    return `
      <article class="card">
        ${photoHtml}
        <div class="card-body">
          <div class="card-top">
            <span class="card-emoji">${a.emoji}</span>
            <div>
              <div class="card-title">${a.name}</div>
              <span class="card-district" style="background:${d.color}">${d.name}</span>
            </div>
          </div>
          <p class="card-desc">${a.desc}</p>
          <ul class="card-meta">
            <li><b>开放时间：</b>${a.time}</li>
            <li><b>门票：</b>${a.ticket}</li>
            <li><b>游玩时长：</b>${a.duration}</li>
            <li><b>交通：</b>${a.transport}</li>
          </ul>
          <div class="card-history">📜 ${a.history}</div>
          <div class="card-extra">
            <span class="badge badge-season">🌸 ${a.season}</span>
            <span class="badge badge-booking">🎫 ${a.booking}</span>
          </div>
          <p class="card-tip">💡 ${a.tip}</p>
          <button class="btn-checkin ${isChecked ? 'checked' : ''}" data-id="${a.id}">
            ${isChecked ? '✅ 已打卡' : '📍 打卡'}
          </button>
        </div>
      </article>`;
  }).join('');
}

/* ---------- 美食探索 ---------- */
function renderFood() {
  const categories = ['全部'].concat([...new Set(FOODS.map(f => f.category))]);

  const filterEl = document.getElementById('foodFilter');
  filterEl.innerHTML = '';
  categories.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (c === currentFoodFilter ? ' active' : '');
    btn.textContent = c;
    btn.addEventListener('click', () => { currentFoodFilter = c; renderFood(); });
    filterEl.appendChild(btn);
  });

  const q = currentFoodQuery.trim().toLowerCase();
  const list = FOODS.filter(f => {
    if (currentFoodFilter !== '全部' && f.category !== currentFoodFilter) return false;
    if (q && !(f.name + f.category + f.desc).toLowerCase().includes(q)) return false;
    return true;
  });
  document.getElementById('foodList').innerHTML = list.map(f => `
    <article class="card food-card">
      <div class="card-top">
        <span class="card-emoji">${f.emoji}</span>
        <div>
          <div class="card-title">${f.name}<span class="food-cat">${f.category}</span></div>
          <div class="food-price">${f.price}</div>
        </div>
      </div>
      <p class="card-desc">${f.desc}</p>
      <div class="food-shop">📍 推荐：<b>${f.shop}</b> · ${f.area}</div>
    </article>`).join('');
}

/* ---------- 美食盲盒 ---------- */
function bindBlindbox() {
  const display = document.getElementById('blindboxDisplay');
  const nameEl = document.getElementById('blindboxName');
  const btn = document.getElementById('blindboxBtn');

  btn.addEventListener('click', () => {
    display.classList.remove('shake');
    void display.offsetWidth;
    display.classList.add('shake');

    setTimeout(() => {
      const f = FOODS[Math.floor(Math.random() * FOODS.length)];
      display.textContent = f.emoji;
      nameEl.innerHTML = `今天吃 <span class="hit">${f.name}</span>！推荐：${f.shop}（${f.price}）`;
      display.classList.remove('shake');
    }, 500);
  });
}

/* ---------- 我的打卡 ---------- */
function renderCheckin() {
  const checked = getChecked();
  const total = ATTRACTIONS.length;
  const pct = total ? Math.round(checked.length / total * 100) : 0;

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `已打卡 ${checked.length} / ${total} 个景点 · 完成度 ${pct}%`;

  const listEl = document.getElementById('checkedList');
  if (checked.length === 0) {
    listEl.innerHTML = '<p class="empty-tip">还没有打卡记录，去景点攻略里点亮你的南京足迹吧 🌆</p>';
  } else {
    listEl.innerHTML = checked.map(id => {
      const a = ATTRACTIONS.find(x => x.id === id);
      if (!a) return '';
      const d = districtById(a.district);
      return `
        <article class="card">
          <div class="card-top">
            <span class="card-emoji">${a.emoji}</span>
            <div>
              <div class="card-title">${a.name}</div>
              <span class="card-district" style="background:${d.color}">${d.name}</span>
            </div>
          </div>
          <button class="btn-checkin checked" data-id="${a.id}">✅ 已打卡（点击取消）</button>
        </article>`;
    }).join('');
  }
}

/* ---------- 顶部进度 ---------- */
function updateHeaderProgress() {
  const checked = getChecked();
  document.getElementById('headerProgress').textContent =
    `🎯 已打卡 ${checked.length}/${ATTRACTIONS.length}`;
}

/* ---------- 路线规划 ---------- */
const ROUTE_START = { coord: [118.784, 32.042], name: '新街口（市中心）' };
let routeMode = 'all';           // 'all' = 全部景点 | 'checked' = 已打卡景点
let routePolyline = null;
let routeMarkers = [];

// 两点间直线距离（公里，Haversine）
function distanceKm(a, b) {
  const R = 6371;
  const dLat = (b[1] - a[1]) * Math.PI / 180;
  const dLng = (b[0] - a[0]) * Math.PI / 180;
  const lat1 = a[1] * Math.PI / 180, lat2 = b[1] * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// 最近邻算法：从市中心出发，每次选最近的未访问景点
function buildRoute(ids) {
  const remaining = ids
    .filter(id => ATTRACTION_COORDS[id])
    .map(id => ({ id, coord: ATTRACTION_COORDS[id] }));
  const order = [];
  const steps = [];
  let cur = ROUTE_START.coord;
  let totalKm = 0;
  while (remaining.length) {
    let best = 0, bestDist = Infinity;
    for (let i = 0; i < remaining.length; i++) {
      const d = distanceKm(cur, remaining[i].coord);
      if (d < bestDist) { bestDist = d; best = i; }
    }
    const next = remaining.splice(best, 1)[0];
    steps.push({ id: next.id, km: bestDist });
    totalKm += bestDist;
    cur = next.coord;
    order.push(next);
  }
  return { order, steps, totalKm };
}

function renderRoute() {
  const el = document.getElementById('routeSelector');
  el.innerHTML = '';
  [
    { id: 'all', label: '全部景点' },
    { id: 'checked', label: '已打卡景点' }
  ].forEach(m => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (m.id === routeMode ? ' active' : '');
    btn.textContent = m.label;
    btn.addEventListener('click', () => { routeMode = m.id; renderRoute(); generateRoute(); });
    el.appendChild(btn);
  });
}

function generateRoute() {
  const ids = routeMode === 'checked' ? getChecked() : ATTRACTIONS.map(a => a.id);
  const { order, steps, totalKm } = buildRoute(ids);
  const el = document.getElementById('routeResult');
  if (!order.length) {
    el.innerHTML = '<p class="empty-tip">还没有可规划的景点，先去「景点攻略」打卡，或切换到「全部景点」。</p>';
    return;
  }
  const html = order.map((o, i) => {
    const a = ATTRACTIONS.find(x => x.id === o.id);
    const d = districtById(a.district);
    return `
      <div class="route-step">
        <span class="route-num">${i + 1}</span>
        <div class="route-info">
          <div class="route-name">${a.emoji} ${a.name} <span class="card-district" style="background:${d.color}">${d.name}</span></div>
          <div class="route-dist">${i === 0 ? '从市中心出发' : '从上一站'} · 约 ${steps[i].km.toFixed(1)} 公里</div>
        </div>
      </div>`;
  }).join('');
  el.innerHTML = `
    <div class="route-summary">🗺️ 共 ${order.length} 个景点 · 累计路程约 <b>${totalKm.toFixed(1)}</b> 公里</div>
    <button class="btn-route secondary" id="routeMapBtn">🗺️ 在地图上查看路线</button>
    ${html}`;
  document.getElementById('routeMapBtn').addEventListener('click', () => {
    drawRouteOnMap(order);
    switchTab('map');
  });
}

function clearRouteOverlays() {
  if (routePolyline) { routePolyline.setMap(null); routePolyline = null; }
  routeMarkers.forEach(mk => mk.setMap(null));
  routeMarkers = [];
}

function drawRouteOnMap(order) {
  if (!amap) return;
  clearRouteOverlays();
  const path = [ROUTE_START.coord, ...order.map(o => o.coord)];
  routePolyline = new AMap.Polyline({
    path: path,
    strokeColor: '#C3272B',
    strokeWeight: 5,
    strokeOpacity: 0.9,
    lineJoin: 'round'
  });
  routePolyline.setMap(amap);
  const startMk = new AMap.Marker({
    position: ROUTE_START.coord,
    content: '<div class="route-start">起</div>',
    anchor: 'center',
    zIndex: 95
  });
  startMk.setMap(amap);
  routeMarkers.push(startMk);
  order.forEach((o, i) => {
    const mk = new AMap.Marker({
      position: o.coord,
      content: `<div class="route-pin">${i + 1}</div>`,
      anchor: 'center',
      zIndex: 90
    });
    mk.setMap(amap);
    routeMarkers.push(mk);
  });
  let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
  path.forEach(([lng, lat]) => {
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  });
  amap.setBounds(new AMap.Bounds([minLng, minLat], [maxLng, maxLat]), false, [80, 80, 80, 80]);
}

/* ---------- 搜索 ---------- */
function bindSearch() {
  document.getElementById('attractionSearch').addEventListener('input', e => {
    currentAttractionQuery = e.target.value;
    renderAttractions(currentDistrictFilter);
  });
  document.getElementById('foodSearch').addEventListener('input', e => {
    currentFoodQuery = e.target.value;
    renderFood();
  });
}

function bindRoute() {
  document.getElementById('routeBtn').addEventListener('click', generateRoute);
}

/* ---------- 全局事件委托 ---------- */
document.addEventListener('click', e => {
  const checkBtn = e.target.closest('.btn-checkin');
  if (checkBtn) { toggleCheckin(checkBtn.dataset.id); return; }
  const gotoBtn = e.target.closest('.btn-goto');
  if (gotoBtn) showAttraction(gotoBtn.dataset.id);
});

function toggleCheckin(id) {
  const arr = getChecked();
  const i = arr.indexOf(id);
  if (i >= 0) arr.splice(i, 1); else arr.push(id);
  saveChecked(arr);
  updateHeaderProgress();
  renderCheckin();
  if (amap) {
    drawMarkers();
    if (infoWindow && infoWindow.getIsOpen && infoWindow.getIsOpen()) infoWindow.close();
  }
}

function showAttraction(id) {
  const a = ATTRACTIONS.find(x => x.id === id);
  if (!a) return;
  if (infoWindow) infoWindow.close();
  renderAttractions(a.district);
  switchTab('attractions');
}

/* ---------- Tab 事件 ---------- */
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => switchTab(t.dataset.view));
});

/* ---------- 初始化 ---------- */
function init() {
  renderLegend();
  renderAttractions(null);
  renderFood();
  renderCheckin();
  updateHeaderProgress();
  bindBlindbox();
  bindMapControls();
  bindSearch();
  bindRoute();
  renderRoute();
  generateRoute();
  initMap();
}
init();
