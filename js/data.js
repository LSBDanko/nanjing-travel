/* ============================================================
   金陵游 · 南京旅游攻略 —— 数据文件
   ============================================================ */

// 城市区块（示意地图）数据
// points: SVG 多边形顶点（示意坐标，非精确地理）
const DISTRICTS = [
  {
    id: 'xuanwu',
    name: '玄武区',
    emoji: '🏛️',
    tagline: '山水城林 · 钟灵毓秀',
    color: '#4A7FB5',
    points: '300,120 620,105 645,290 330,305',
    labelX: 470, labelY: 205
  },
  {
    id: 'qinhuai',
    name: '秦淮区',
    emoji: '🏮',
    tagline: '桨声灯影 · 十里秦淮',
    color: '#1F7A6D',
    points: '340,315 615,300 640,455 355,475',
    labelX: 490, labelY: 390
  },
  {
    id: 'gulou',
    name: '鼓楼区',
    emoji: '🏯',
    tagline: '民国风情 · 滨江胜景',
    color: '#C3272B',
    points: '20,200 250,185 275,330 30,355',
    labelX: 140, labelY: 270
  },
  {
    id: 'jianye',
    name: '建邺区',
    emoji: '🌉',
    tagline: '现代新城 · 活力滨江',
    color: '#C9A063',
    points: '30,365 265,340 285,465 40,495',
    labelX: 150, labelY: 425
  },
  {
    id: 'yuhuatai',
    name: '雨花台区',
    emoji: '🏞️',
    tagline: '忠魂永铸 · 雨花英烈',
    color: '#7C9C58',
    points: '340,485 560,470 575,545 350,560',
    labelX: 455, labelY: 520
  },
  {
    id: 'qixia',
    name: '栖霞区',
    emoji: '🍁',
    tagline: '枫红如火 · 金陵明秀',
    color: '#E0854B',
    points: '640,85 875,70 880,250 660,265',
    labelX: 760, labelY: 165
  },
  {
    id: 'jiangning',
    name: '江宁区',
    emoji: '🛕',
    tagline: '佛都圣境 · 山水江宁',
    color: '#7A6BA8',
    points: '290,565 880,545 880,615 290,620',
    labelX: 600, labelY: 592
  },
  {
    id: 'pukou',
    name: '浦口区',
    emoji: '💧',
    tagline: '江北明珠 · 林泉幽境',
    color: '#3D8B7D',
    points: '30,28 350,16 385,95 55,120',
    labelX: 175, labelY: 66
  }
];

// 景点数据
const ATTRACTIONS = [
  {
    id: 'zhongshanling', name: '中山陵', emoji: '🏛️', district: 'xuanwu',
    desc: '孙中山先生的陵寝，坐落在紫金山南麓，从牌坊到祭堂共392级台阶，庄严肃穆、气势恢宏。',
    time: '8:00-17:00（周一闭馆）', ticket: '免费（需预约）', duration: '2-3小时',
    transport: '地铁2号线苜蓿园站，转乘景区观光车',
    tip: '建议早去避开人流，穿舒适平底鞋，登顶后俯瞰钟山全景。'
  },
  {
    id: 'mingxiaoling', name: '明孝陵', emoji: '🪦', district: 'xuanwu',
    desc: '明太祖朱元璋与马皇后合葬陵墓，世界文化遗产，神道石象路气势非凡。',
    time: '8:00-17:00', ticket: '70元（钟山联票）', duration: '2-3小时',
    transport: '地铁2号线苜蓿园站',
    tip: '秋季神道银杏金黄，是拍照黄金季。'
  },
  {
    id: 'zongtongfu', name: '总统府', emoji: '🏛️', district: 'xuanwu',
    desc: '中国近代史重要遗址，曾是明清王府、太平天国天王府及民国总统府。',
    time: '8:30-17:00（周一闭馆）', ticket: '35元', duration: '2小时',
    transport: '地铁2/3号线大行宫站',
    tip: '中轴线与西花园值得细看，建议听讲解。'
  },
  {
    id: 'nanbo', name: '南京博物院', emoji: '🏺', district: 'xuanwu',
    desc: '中国三大博物馆之一，六朝与明清文物尤为丰富，民国馆还原度极高。',
    time: '9:00-17:00（周一闭馆）', ticket: '免费（需预约）', duration: '3小时以上',
    transport: '地铁2号线明故宫站',
    tip: '民国馆必逛，可提前在公众号预约。'
  },
  {
    id: 'xuanwuhu', name: '玄武湖', emoji: '🌊', district: 'xuanwu',
    desc: '江南最大的城内公园，五洲相连、山水相依，是南京的"城市绿肺"。',
    time: '全天开放', ticket: '免费', duration: '2-3小时',
    transport: '地铁1号线玄武门站',
    tip: '环湖骑行或傍晚湖边散步都很惬意。'
  },
  {
    id: 'jimingsi', name: '鸡鸣寺', emoji: '🛕', district: 'xuanwu',
    desc: '"南朝四百八十寺"之首，千年古刹，樱花季的樱花大道闻名遐迩。',
    time: '7:30-17:00', ticket: '10元', duration: '1-2小时',
    transport: '地铁3号线鸡鸣寺站',
    tip: '三月樱花季人潮汹涌，登塔可远眺玄武湖。'
  },
  {
    id: 'fuzimiao', name: '夫子庙', emoji: '🏮', district: 'qinhuai',
    desc: '中国四大文庙之一，秦淮风光带核心，集古迹、市集、灯会于一体。',
    time: '街区全天（庙宇8:30-21:00）', ticket: '街区免费', duration: '2-3小时',
    transport: '地铁3号线夫子庙站',
    tip: '元宵节灯会最热闹，夜景比白天更有味道。'
  },
  {
    id: 'qinhuaihe', name: '秦淮河', emoji: '🛶', district: 'qinhuai',
    desc: '"桨声灯影里的秦淮河"，乘画舫夜游，两岸灯火与评弹相伴。',
    time: '全天（夜游18:00-22:00）', ticket: '夜游船票约100元', duration: '1-2小时',
    transport: '地铁3号线夫子庙站',
    tip: '夜游画舫是精华，可提前购票。'
  },
  {
    id: 'laomendong', name: '老门东', emoji: '🏘️', district: 'qinhuai',
    desc: '老城南历史文化街区，青砖黛瓦、曲径通幽，小吃与文创云集。',
    time: '全天开放', ticket: '免费', duration: '2-3小时',
    transport: '地铁3号线武定门站',
    tip: '小吃云集，夜景与灯笼拍照极出片。'
  },
  {
    id: 'zhonghuamen', name: '中华门瓮城', emoji: '🏯', district: 'qinhuai',
    desc: '明城墙现存最大的瓮城，有"天下第一瓮城"之称，可登城眺望老城南。',
    time: '8:30-20:00', ticket: '50元', duration: '1-2小时',
    transport: '地铁1号线中华门站',
    tip: '傍晚登城，夕阳下的城墙剪影很美。'
  },
  {
    id: 'yihelu', name: '颐和路', emoji: '🍁', district: 'gulou',
    desc: '民国公馆区，梧桐遮天的林荫大道，被誉为"一条颐和路，半部民国史"。',
    time: '全天开放', ticket: '免费', duration: '1-2小时',
    transport: '地铁4号线云南路站',
    tip: '秋季梧桐金黄，是最文艺的City Walk路线。'
  },
  {
    id: 'yuejianglou', name: '阅江楼', emoji: '🏯', district: 'gulou',
    desc: '江南四大名楼之一，屹立狮子山巅，登楼可览长江壮阔。',
    time: '8:00-17:00', ticket: '40元', duration: '1-2小时',
    transport: '公交或打车前往',
    tip: '晴天登顶，江景与南京长江大桥尽收眼底。'
  },
  {
    id: 'nanjingyan', name: '南京眼步行桥', emoji: '🌉', district: 'jianye',
    desc: '青奥会地标，横跨夹江的景观步行桥，夜晚灯光璀璨。',
    time: '全天开放', ticket: '免费', duration: '1小时',
    transport: '地铁10号线梦都大街站',
    tip: '夜景灯光是亮点，适合饭后散步。'
  },
  {
    id: 'datusha', name: '侵华日军南京大屠杀遇难同胞纪念馆', emoji: '🕯️', district: 'jianye',
    desc: '铭记历史、缅怀同胞的庄重场所，是了解南京近代史的重要一课。',
    time: '8:30-16:30（周一闭馆）', ticket: '免费（需预约）', duration: '2-3小时',
    transport: '地铁2号线云锦路站',
    tip: '请保持肃穆，建议提前预约，参观时心怀敬畏。'
  },
  {
    id: 'yuhuatai', name: '雨花台', emoji: '🏞️', district: 'yuhuatai',
    desc: '雨花台烈士陵园与雨花石文化发源地，苍松翠柏、庄严肃穆。',
    time: '8:00-17:00', ticket: '免费', duration: '2-3小时',
    transport: '地铁1号线中华门站转公交',
    tip: '雨花石可作纪念品，园区绿树成荫适合慢行。'
  },
  {
    id: 'qixiashan', name: '栖霞山', emoji: '🍁', district: 'qixia',
    desc: '"金陵第一明秀山"，深秋红枫如火，与千年古刹栖霞寺相映。',
    time: '7:00-17:00', ticket: '40元（枫叶季）', duration: '半天',
    transport: '地铁2号线羊山公园站转公交',
    tip: '11月中下旬红枫最佳，建议留出半天。'
  },
  {
    id: 'niushoushan', name: '牛首山', emoji: '🛕', district: 'jiangning',
    desc: '佛顶宫供奉佛顶骨舍利，建筑宏伟华丽，是南京新兴的文化地标。',
    time: '8:30-17:00', ticket: '98元', duration: '3小时',
    transport: '地铁S3号线转接驳车',
    tip: '佛顶宫与地宫是精华，建议坐景区电瓶车。'
  },
  {
    id: 'zhenzhuquan', name: '珍珠泉', emoji: '💧', district: 'pukou',
    desc: '"江北第一游观之所"，泉水清澈见底，泉水随掌声汩汩涌出。',
    time: '8:00-17:00', ticket: '40元', duration: '2-3小时',
    transport: '地铁3号线林场站转公交',
    tip: '拍手涌泉是特色，适合亲子游。'
  }
];

// 美食数据
const FOODS = [
  { id: 'yanshuiya', name: '盐水鸭', emoji: '🦆', category: '名菜',
    desc: '金陵名菜之首，皮白肉嫩、肥而不腻，桂花香型是上品。',
    shop: '桂花鸭、绿柳居', price: '人均40-80元', area: '全市' },
  { id: 'yaxuefensi', name: '鸭血粉丝汤', emoji: '🍜', category: '小吃',
    desc: '鸭血、鸭肠、粉丝、油豆腐同煮，汤鲜味美，是南京人的心头好。',
    shop: '回味鸭血粉丝、鸭得堡', price: '人均20-35元', area: '秦淮/鼓楼' },
  { id: 'xiaolongbao', name: '金陵小笼包', emoji: '🥟', category: '小吃',
    desc: '皮薄馅大、汤汁鲜美，轻提慢移、先开窗后喝汤。',
    shop: '尹氏汤包、小李汤包', price: '人均15-30元', area: '秦淮/玄武' },
  { id: 'tangyumiao', name: '桂花糖芋苗', emoji: '🍠', category: '甜品',
    desc: '桂花糖汁裹着软糯芋苗，甜而不腻、香气扑鼻。',
    shop: '莲湖糕团店', price: '人均10-20元', area: '秦淮' },
  { id: 'niurouguotie', name: '牛肉锅贴', emoji: '🥟', category: '小吃',
    desc: '外酥里嫩、牛肉馅多汁，趁热咬一口汤汁四溢。',
    shop: '七家湾牛肉锅贴、李记清真馆', price: '人均15-25元', area: '秦淮/鼓楼' },
  { id: 'pidumian', name: '皮肚面', emoji: '🍜', category: '面食',
    desc: '南京特色面条，皮肚、猪肝、肉丝一锅烩，汤浓料足。',
    shop: '老门东、秦淮小吃街', price: '人均20-35元', area: '秦淮' },
  { id: 'tangzhouou', name: '桂花糖粥藕', emoji: '🍯', category: '甜品',
    desc: '糯米藕浇上桂花糖浆，甜糯绵软，是老城南的经典甜品。',
    shop: '莲湖糕团店', price: '人均10-20元', area: '秦淮' },
  { id: 'meihuagao', name: '梅花糕', emoji: '🌸', category: '甜品',
    desc: '形似梅花，外皮焦香，内馅豆沙或鲜肉，街头巷尾的甜蜜。',
    shop: '左师傅梅花糕', price: '人均8-15元', area: '玄武/秦淮' },
  { id: 'banpa', name: '南京板鸭', emoji: '🦆', category: '名菜',
    desc: '腌腊板鸭，咸香入骨，是馈赠亲友的南京特产。',
    shop: '韩复兴', price: '人均40-80元', area: '全市' },
  { id: 'chidouyuanxiao', name: '赤豆元宵', emoji: '🥣', category: '甜品',
    desc: '红豆沙配糯米小圆子，绵密香甜，一碗暖胃。',
    shop: '莲湖糕团店', price: '人均10-18元', area: '秦淮' },
  { id: 'qinhuaibajue', name: '秦淮八绝', emoji: '🍱', category: '名菜',
    desc: '八种传统小吃组合（盐水鸭、鸭油烧饼、五香蛋等），一次尝遍金陵味。',
    shop: '秦淮人家、晚晴楼', price: '人均80-150元', area: '秦淮' },
  { id: 'huozhuzi', name: '活珠子', emoji: '🥚', category: '特色',
    desc: '南京特色风味，鸡蛋孵化中的胚蛋，汤汁鲜美，勇气与美味并存。',
    shop: '街头小摊、大排档', price: '人均5-10元', area: '全市' },
  { id: 'yayoushaobing', name: '鸭油烧饼', emoji: '🥮', category: '小吃',
    desc: '鸭油和面烤制，外皮酥脆、层层掉渣，葱香与鸭油香交融。',
    shop: '莲湖糕团店、奇芳阁', price: '人均5-10元', area: '秦淮' },
  { id: 'wuxiangdan', name: '五香蛋', emoji: '🥚', category: '小吃',
    desc: '茶叶、八角、桂皮卤制，蛋白弹嫩、蛋黄入味。',
    shop: '街头小摊', price: '人均3-8元', area: '全市' },
  { id: 'dazhugansi', name: '大煮干丝', emoji: '🍲', category: '名菜',
    desc: '淮扬名菜，豆腐干切成细丝，配鸡丝、火腿、虾仁高汤烩制。',
    shop: '老门东淮扬菜馆', price: '人均45-80元', area: '秦淮' },
  { id: 'qingdunshizitou', name: '清炖狮子头', emoji: '🍲', category: '名菜',
    desc: '淮扬名菜，肥瘦相间、入口即化，汤清味醇。',
    shop: '南京大牌档', price: '人均50-90元', area: '全市' },
  { id: 'xiangyoushanhu', name: '响油鳝糊', emoji: '🍲', category: '名菜',
    desc: '鳝鱼糊上桌浇热油，蒜香、胡椒香四溢，浓油赤酱。',
    shop: '淮扬菜馆', price: '人均60-100元', area: '秦淮/鼓楼' },
  { id: 'yanshuie', name: '盐水鹅', emoji: '🦢', category: '名菜',
    desc: '与盐水鸭齐名，肉质细嫩、咸鲜适口。',
    shop: '绿柳居', price: '人均45-80元', area: '全市' },
  { id: 'yuhuashitangyuan', name: '雨花石汤圆', emoji: '🍡', category: '甜品',
    desc: '形似雨花石的三色汤圆，颜值与口感俱佳，金陵特色创意甜品。',
    shop: '南京大牌档', price: '人均15-30元', area: '全市' },
  { id: 'jiuniangxiaoyuanzi', name: '酒酿小圆子', emoji: '🍡', category: '甜品',
    desc: '酒酿香甜微醺，小圆子软糯Q弹。',
    shop: '莲湖糕团店', price: '人均10-20元', area: '秦淮' },
  { id: 'qingtuan', name: '青团', emoji: '🟢', category: '甜品',
    desc: '艾草汁和面，豆沙馅，软糯清香，清明时令点心。',
    shop: '老字号', price: '人均8-15元', area: '秦淮' },
  { id: 'doufulao', name: '什锦豆腐涝', emoji: '🥣', category: '小吃',
    desc: '咸甜两吃豆腐脑，配虾米、榨菜、辣油，鲜嫩顺滑。',
    shop: '街头早点摊', price: '人均5-12元', area: '全市' },
  { id: 'yayouhuntun', name: '鸭油馄饨', emoji: '🥟', category: '小吃',
    desc: '鸭油汤底，馄饨皮薄馅鲜，汤头醇香。',
    shop: '老门东', price: '人均15-25元', area: '秦淮' },
  { id: 'xiekehuang', name: '蟹壳黄', emoji: '🥮', category: '小吃',
    desc: '形似蟹壳的酥饼，甜咸两味，香酥掉渣。',
    shop: '老门东', price: '人均8-15元', area: '秦淮' }
];
