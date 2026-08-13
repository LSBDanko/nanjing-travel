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
// photo: 图片链接（留空则显示主题渐变占位图）
const ATTRACTIONS = [
  {
    id: 'zhongshanling', name: '中山陵', emoji: '🏛️', district: 'xuanwu',
    desc: '孙中山先生的陵寝，坐落在紫金山南麓，从牌坊到祭堂共392级台阶，庄严肃穆、气势恢宏。',
    time: '8:00-17:00（周一闭馆）', ticket: '免费（需预约）', duration: '2-3小时',
    transport: '地铁2号线苜蓿园站，转乘景区观光车',
    tip: '建议早去避开人流，穿舒适平底鞋，登顶后俯瞰钟山全景。',
    history: '中山陵是孙中山先生长眠之地，1926年动工、1929年建成。从博爱坊到祭堂共392级台阶，寓意当时三亿九千二百万同胞；建筑依山而建、中西合璧，被誉为"中国近代建筑史上第一陵"。',
    season: '春秋两季最佳，秋季钟山层林尽染',
    booking: '免费，需公众号提前预约',
    photo: ''
  },
  {
    id: 'mingxiaoling', name: '明孝陵', emoji: '🪦', district: 'xuanwu',
    desc: '明太祖朱元璋与马皇后合葬陵墓，世界文化遗产，神道石象路气势非凡。',
    time: '8:00-17:00', ticket: '70元（钟山联票）', duration: '2-3小时',
    transport: '地铁2号线苜蓿园站',
    tip: '秋季神道银杏金黄，是拍照黄金季。',
    history: '明太祖朱元璋与马皇后的合葬陵墓，始建于1381年、历时25年建成。神道石象路两侧石刻肃立，开创了明清帝王陵寝"前朝后寝"的形制，2003年被列为世界文化遗产。',
    season: '秋季最佳，神道银杏金黄',
    booking: '现场购票，或购买钟山联票',
    photo: ''
  },
  {
    id: 'zongtongfu', name: '总统府', emoji: '🏛️', district: 'xuanwu',
    desc: '中国近代史重要遗址，曾是明清王府、太平天国天王府及民国总统府。',
    time: '8:30-17:00（周一闭馆）', ticket: '35元', duration: '2小时',
    transport: '地铁2/3号线大行宫站',
    tip: '中轴线与西花园值得细看，建议听讲解。',
    history: '这里历经明汉王府、清代两江总督署、太平天国天王府与民国总统府，是中国近代史的缩影。1912年孙中山在此宣誓就任临时大总统，见证了无数重大历史转折。',
    season: '四季皆宜，室内展陈为主',
    booking: '现场或线上购票',
    photo: ''
  },
  {
    id: 'nanbo', name: '南京博物院', emoji: '🏺', district: 'xuanwu',
    desc: '中国三大博物馆之一，六朝与明清文物尤为丰富，民国馆还原度极高。',
    time: '9:00-17:00（周一闭馆）', ticket: '免费（需预约）', duration: '3小时以上',
    transport: '地铁2号线明故宫站',
    tip: '民国馆必逛，可提前在公众号预约。',
    history: '中国三大博物馆之一，前身为1933年蔡元培倡议成立的国立中央博物院。馆藏文物43万余件，上溯远古、下迄民国，其中"民国馆"以街景实景还原，堪称国内独创。',
    season: '四季皆宜，避开节假日更舒适',
    booking: '免费，需公众号提前预约',
    photo: ''
  },
  {
    id: 'xuanwuhu', name: '玄武湖', emoji: '🌊', district: 'xuanwu',
    desc: '江南最大的城内公园，五洲相连、山水相依，是南京的"城市绿肺"。',
    time: '全天开放', ticket: '免费', duration: '2-3小时',
    transport: '地铁1号线玄武门站',
    tip: '环湖骑行或傍晚湖边散步都很惬意。',
    history: '古称桑泊，六朝时即为皇家园林湖泊，曾是训练水军的场所。湖中五洲相连，历代文人墨客留下大量诗篇，是南京现存最古老、最大的城内湖泊。',
    season: '春季樱花、夏季荷花最佳',
    booking: '免费开放，无需预约',
    photo: ''
  },
  {
    id: 'jimingsi', name: '鸡鸣寺', emoji: '🛕', district: 'xuanwu',
    desc: '"南朝四百八十寺"之首，千年古刹，樱花季的樱花大道闻名遐迩。',
    time: '7:30-17:00', ticket: '10元', duration: '1-2小时',
    transport: '地铁3号线鸡鸣寺站',
    tip: '三月樱花季人潮汹涌，登塔可远眺玄武湖。',
    history: '"南朝四百八十寺，多少楼台烟雨中"所指的江南名刹之首。始建于西晋，已有1700余年历史，梁武帝曾在此舍身同泰寺（鸡鸣寺前身），香火绵延至今。',
    season: '3-4月樱花季最佳',
    booking: '现场购票10元',
    photo: ''
  },
  {
    id: 'fuzimiao', name: '夫子庙', emoji: '🏮', district: 'qinhuai',
    desc: '中国四大文庙之一，秦淮风光带核心，集古迹、市集、灯会于一体。',
    time: '街区全天（庙宇8:30-21:00）', ticket: '街区免费', duration: '2-3小时',
    transport: '地铁3号线夫子庙站',
    tip: '元宵节灯会最热闹，夜景比白天更有味道。',
    history: '始建于东晋，为供奉祭祀孔子之地，是中国四大文庙之一。这里曾是江南贡院所在地，明清时期江南才子云集于此赶考，桨声灯影里沉淀着千年文脉。',
    season: '元宵灯会、夜景最佳',
    booking: '街区免费，庙宇单独购票',
    photo: ''
  },
  {
    id: 'qinhuaihe', name: '秦淮河', emoji: '🛶', district: 'qinhuai',
    desc: '"桨声灯影里的秦淮河"，乘画舫夜游，两岸灯火与评弹相伴。',
    time: '全天（夜游18:00-22:00）', ticket: '夜游船票约100元', duration: '1-2小时',
    transport: '地铁3号线夫子庙站',
    tip: '夜游画舫是精华，可提前购票。',
    history: '六朝至明清，秦淮河畔一直是江南繁华都会的象征，金粉楼台、画舫凌波。杜牧"烟笼寒水月笼沙"、朱自清《桨声灯影里的秦淮河》都写尽了它的风情。',
    season: '夜游四季皆宜',
    booking: '夜游船票可提前网购',
    photo: ''
  },
  {
    id: 'laomendong', name: '老门东', emoji: '🏘️', district: 'qinhuai',
    desc: '老城南历史文化街区，青砖黛瓦、曲径通幽，小吃与文创云集。',
    time: '全天开放', ticket: '免费', duration: '2-3小时',
    transport: '地铁3号线武定门站',
    tip: '小吃云集，夜景与灯笼拍照极出片。',
    history: '因位于中华门（明代称"聚宝门"）以东而得名，是南京传统民居风貌保存最完好的老城南街区。青砖黛瓦、曲径通幽，藏着众多百年老字号与非遗手作。',
    season: '夜景与春秋最佳',
    booking: '免费开放',
    photo: ''
  },
  {
    id: 'zhonghuamen', name: '中华门瓮城', emoji: '🏯', district: 'qinhuai',
    desc: '明城墙现存最大的瓮城，有"天下第一瓮城"之称，可登城眺望老城南。',
    time: '8:30-20:00', ticket: '50元', duration: '1-2小时',
    transport: '地铁1号线中华门站',
    tip: '傍晚登城，夕阳下的城墙剪影很美。',
    history: '始建于明洪武年间，是南京明城墙十三座城门中保存最完好、规模最大的瓮城，有"天下第一瓮城"之称。三重瓮城、藏兵洞多达27个，可屯兵三千。',
    season: '春秋登城最佳',
    booking: '现场购票50元',
    photo: ''
  },
  {
    id: 'yihelu', name: '颐和路', emoji: '🍁', district: 'gulou',
    desc: '民国公馆区，梧桐遮天的林荫大道，被誉为"一条颐和路，半部民国史"。',
    time: '全天开放', ticket: '免费', duration: '1-2小时',
    transport: '地铁4号线云南路站',
    tip: '秋季梧桐金黄，是最文艺的City Walk路线。',
    history: '民国时期各国使馆与政要公馆云集于此，两百余座风格各异的花园洋房掩映在梧桐深处，被誉为"一条颐和路，半部民国史"，是南京最具民国风情的街区。',
    season: '秋季梧桐金黄最佳',
    booking: '街区免费开放',
    photo: ''
  },
  {
    id: 'yuejianglou', name: '阅江楼', emoji: '🏯', district: 'gulou',
    desc: '江南四大名楼之一，屹立狮子山巅，登楼可览长江壮阔。',
    time: '8:00-17:00', ticket: '40元', duration: '1-2小时',
    transport: '公交或打车前往',
    tip: '晴天登顶，江景与南京长江大桥尽收眼底。',
    history: '与岳阳楼、黄鹤楼、滕王阁并称江南四大名楼。明太祖朱元璋曾亲撰《阅江楼记》，却"有记无楼"六百余年，直至2001年才依记载建成，登楼可览长江浩荡。',
    season: '晴天登楼远眺最佳',
    booking: '现场购票40元',
    photo: ''
  },
  {
    id: 'nanjingyan', name: '南京眼步行桥', emoji: '🌉', district: 'jianye',
    desc: '青奥会地标，横跨夹江的景观步行桥，夜晚灯光璀璨。',
    time: '全天开放', ticket: '免费', duration: '1小时',
    transport: '地铁10号线梦都大街站',
    tip: '夜景灯光是亮点，适合饭后散步。',
    history: '为2014年青奥会而建，双环造型横跨长江夹江，是南京河西新城的现代地标。桥体形似睁开的眼睛，夜晚灯光变幻，与江景交相辉映。',
    season: '夜晚灯光最佳',
    booking: '免费开放',
    photo: ''
  },
  {
    id: 'datusha', name: '侵华日军南京大屠杀遇难同胞纪念馆', emoji: '🕯️', district: 'jianye',
    desc: '铭记历史、缅怀同胞的庄重场所，是了解南京近代史的重要一课。',
    time: '8:30-16:30（周一闭馆）', ticket: '免费（需预约）', duration: '2-3小时',
    transport: '地铁2号线云锦路站',
    tip: '请保持肃穆，建议提前预约，参观时心怀敬畏。',
    history: '为铭记1937年南京大屠杀遇难同胞而建，馆内陈列了大量史料与证物，"万人坑"遗址触目惊心。这里是了解南京近代史、缅怀同胞的庄重场所，参观时请心怀敬畏。',
    season: '四季皆宜，需提前预约',
    booking: '免费，需公众号提前预约',
    photo: ''
  },
  {
    id: 'yuhuatai', name: '雨花台', emoji: '🏞️', district: 'yuhuatai',
    desc: '雨花台烈士陵园与雨花石文化发源地，苍松翠柏、庄严肃穆。',
    time: '8:00-17:00', ticket: '免费', duration: '2-3小时',
    transport: '地铁1号线中华门站转公交',
    tip: '雨花石可作纪念品，园区绿树成荫适合慢行。',
    history: '古称石子岗，因产雨花石而得名。三国时已有"雨花台"之名，相传南朝高僧云光法师在此讲经感动上天、落花如雨。近代则是雨花台烈士陵园所在地，苍松翠柏、庄严肃穆。',
    season: '春季踏青最佳',
    booking: '免费开放',
    photo: ''
  },
  {
    id: 'qixiashan', name: '栖霞山', emoji: '🍁', district: 'qixia',
    desc: '"金陵第一明秀山"，深秋红枫如火，与千年古刹栖霞寺相映。',
    time: '7:00-17:00', ticket: '40元（枫叶季）', duration: '半天',
    transport: '地铁2号线羊山公园站转公交',
    tip: '11月中下旬红枫最佳，建议留出半天。',
    history: '素有"金陵第一明秀山"美誉，山中栖霞寺始建于南朝，是三论宗祖庭。深秋满山红枫如火，与千年古刹、摩崖石刻相映，自古为金陵赏秋胜地。',
    season: '11月中下旬红枫最佳',
    booking: '现场购票40元（枫叶季）',
    photo: ''
  },
  {
    id: 'niushoushan', name: '牛首山', emoji: '🛕', district: 'jiangning',
    desc: '佛顶宫供奉佛顶骨舍利，建筑宏伟华丽，是南京新兴的文化地标。',
    time: '8:30-17:00', ticket: '98元', duration: '3小时',
    transport: '地铁S3号线转接驳车',
    tip: '佛顶宫与地宫是精华，建议坐景区电瓶车。',
    history: '因双峰对峙形似牛首而得名，是佛教牛头禅宗的开教处。2015年建成的佛顶宫供奉释迦牟尼佛顶骨舍利，建筑融合现代与传统，成为南京新兴的文化地标。',
    season: '四季皆宜，晴日最佳',
    booking: '现场或线上购票98元',
    photo: ''
  },
  {
    id: 'zhenzhuquan', name: '珍珠泉', emoji: '💧', district: 'pukou',
    desc: '"江北第一游观之所"，泉水清澈见底，泉水随掌声汩汩涌出。',
    time: '8:00-17:00', ticket: '40元', duration: '2-3小时',
    transport: '地铁3号线林场站转公交',
    tip: '拍手涌泉是特色，适合亲子游。',
    history: '明代即为金陵胜景，因泉水自地下涌出如串串珍珠而得名，有"江北第一游观之所"美誉。泉水清澈见底，游人拍手呐喊，泉底便有气泡汩汩上涌，妙趣横生。',
    season: '春夏亲水最佳',
    booking: '现场购票40元',
    photo: ''
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
