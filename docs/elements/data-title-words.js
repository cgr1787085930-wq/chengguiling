/*
  =============================================
  成桂零对接服务站
  版权 © 成桂零对接服务站 保留所有权利
  禁止照搬/爬取/用于 AI 训练。
  =============================================
*/
/* ============================================================
   标题优化 · 选词库（按《标题优化初归纳》方法论扩充）
   覆盖品类：男装 / 童装 / 大码男装 / 家居服
   维度体系：品类词/风格/版型/领型/袖长/图案/颜色/材质/细节特征/
            功能特性/场景/季节/节日活动（+ 童装性别/年龄段、家居服人群）
   生成公式（方法论）：
     [人群]+[品类]+[场景]+[功能/图案]+[风格]+[季节/版型/腰型]+[细节/规格/面料/颜色]+[节日活动]
   结构：window.CGL_TITLE_WORDS = { 品类:{ order:[维度], dims:{维度:[{cn,en}]}, cnTemplate, enTemplate } }
   注意：enTemplate 占位符必须与 title-optimization.html 的 EN2DIM 映射保持一致。
   ============================================================ */
window.CGL_TITLE_WORDS = {
  "男装": {
    "order": [
      "品类词",
      "风格",
      "版型",
      "领型",
      "袖长",
      "图案",
      "颜色",
      "材质",
      "细节特征",
      "功能特性",
      "场景",
      "季节",
      "节日活动"
    ],
    "dims": {
      "品类词": [
        {
          "cn": "T恤",
          "en": "T-shirt"
        },
        {
          "cn": "衬衫",
          "en": "Shirt"
        },
        {
          "cn": "亨利衫",
          "en": "Henley"
        },
        {
          "cn": "Polo衫",
          "en": "Polo"
        },
        {
          "cn": "毛衣",
          "en": "Sweater"
        },
        {
          "cn": "卫衣",
          "en": "Hoodie"
        },
        {
          "cn": "夹克",
          "en": "Jacket"
        },
        {
          "cn": "牛仔外套",
          "en": "Denim Jacket"
        },
        {
          "cn": "工装夹克",
          "en": "Workwear Jacket"
        },
        {
          "cn": "飞行夹克",
          "en": "Bomber Jacket"
        },
        {
          "cn": "棒球服",
          "en": "Baseball Jersey"
        },
        {
          "cn": "皮夹克",
          "en": "Leather Jacket"
        },
        {
          "cn": "棉服",
          "en": "Cotton-Padded Coat"
        },
        {
          "cn": "羽绒服",
          "en": "Down Jacket"
        },
        {
          "cn": "风衣",
          "en": "Trench Coat"
        },
        {
          "cn": "大衣",
          "en": "Overcoat"
        },
        {
          "cn": "针织衫",
          "en": "Knitwear"
        },
        {
          "cn": "马甲",
          "en": "Vest"
        },
        {
          "cn": "休闲裤",
          "en": "Trousers"
        },
        {
          "cn": "工装裤",
          "en": "Cargo Pants"
        },
        {
          "cn": "运动裤",
          "en": "Sweatpants"
        },
        {
          "cn": "牛仔裤",
          "en": "Jeans"
        },
        {
          "cn": "束脚裤",
          "en": "Jogger Pants"
        },
        {
          "cn": "短裤",
          "en": "Shorts"
        },
        {
          "cn": "沙滩裤",
          "en": "Beach Shorts"
        },
        {
          "cn": "西裤",
          "en": "Dress Pants"
        },
        {
          "cn": "直筒裤",
          "en": "Straight-Leg Pants"
        },
        {
          "cn": "阔腿裤",
          "en": "Wide-Leg Pants"
        },
        {
          "cn": "背心",
          "en": "Tank Top"
        }
      ],
      "风格": [
        {
          "cn": "休闲",
          "en": "Casual"
        },
        {
          "cn": "商务",
          "en": "Business"
        },
        {
          "cn": "街头",
          "en": "Streetwear"
        },
        {
          "cn": "复古",
          "en": "Retro"
        },
        {
          "cn": "简约",
          "en": "Minimalist"
        },
        {
          "cn": "运动",
          "en": "Sporty"
        },
        {
          "cn": "工装",
          "en": "Workwear"
        },
        {
          "cn": "学院风",
          "en": "Preppy"
        },
        {
          "cn": "时尚",
          "en": "Fashion"
        },
        {
          "cn": "潮流",
          "en": "Trendy"
        },
        {
          "cn": "优雅",
          "en": "Elegant"
        },
        {
          "cn": "别致",
          "en": "Chic"
        },
        {
          "cn": "经典",
          "en": "Classic"
        },
        {
          "cn": "夏威夷度假",
          "en": "Hawaiian"
        },
        {
          "cn": "波西米亚",
          "en": "Bohemian"
        },
        {
          "cn": "韩系",
          "en": "Korean Style"
        },
        {
          "cn": "摇滚",
          "en": "Rock"
        },
        {
          "cn": "嘻哈",
          "en": "Hip-Hop"
        },
        {
          "cn": "日系",
          "en": "Japanese Style"
        },
        {
          "cn": "机能",
          "en": "Techwear"
        },
        {
          "cn": "美式",
          "en": "American Casual"
        }
      ],
      "版型": [
        {
          "cn": "宽松",
          "en": "Loose Fit"
        },
        {
          "cn": "廓形",
          "en": "Oversized"
        },
        {
          "cn": "直筒",
          "en": "Straight Fit"
        },
        {
          "cn": "修身",
          "en": "Slim Fit"
        },
        {
          "cn": "锥形",
          "en": "Tapered"
        },
        {
          "cn": "常规",
          "en": "Regular Fit"
        },
        {
          "cn": "高腰",
          "en": "High-Waist"
        },
        {
          "cn": "阔腿",
          "en": "Wide-Leg"
        },
        {
          "cn": "束脚",
          "en": "Tapered"
        },
        {
          "cn": "加宽舒适",
          "en": "Cut for Comfort"
        }
      ],
      "领型": [
        {
          "cn": "圆领",
          "en": "Crew Neck"
        },
        {
          "cn": "翻领",
          "en": "Spread Collar"
        },
        {
          "cn": "立领",
          "en": "Stand Collar"
        },
        {
          "cn": "高领",
          "en": "Turtleneck"
        },
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "无领",
          "en": "Collarless"
        },
        {
          "cn": "Polo领",
          "en": "Polo Collar"
        },
        {
          "cn": "亨利领",
          "en": "Henley Neck"
        },
        {
          "cn": "小翻领",
          "en": "Lapel"
        }
      ],
      "袖长": [
        {
          "cn": "长袖",
          "en": "Long Sleeve"
        },
        {
          "cn": "短袖",
          "en": "Short Sleeve"
        },
        {
          "cn": "七分袖",
          "en": "3/4 Sleeve"
        },
        {
          "cn": "五分袖",
          "en": "Half Sleeve"
        },
        {
          "cn": "无袖",
          "en": "Sleeveless"
        },
        {
          "cn": "落肩袖",
          "en": "Drop Shoulder"
        },
        {
          "cn": "插肩袖",
          "en": "Raglan Sleeve"
        }
      ],
      "图案": [
        {
          "cn": "纯色",
          "en": "Solid"
        },
        {
          "cn": "条纹",
          "en": "Striped"
        },
        {
          "cn": "格纹",
          "en": "Plaid"
        },
        {
          "cn": "印花",
          "en": "Printed"
        },
        {
          "cn": "刺绣",
          "en": "Embroidered"
        },
        {
          "cn": "拼色",
          "en": "Color Block"
        },
        {
          "cn": "字母印花",
          "en": "Letter Print"
        },
        {
          "cn": "扎染",
          "en": "Tie-Dye"
        },
        {
          "cn": "碎花",
          "en": "Floral"
        },
        {
          "cn": "几何",
          "en": "Geometric"
        },
        {
          "cn": "波点",
          "en": "Polka Dot"
        },
        {
          "cn": "迷彩",
          "en": "Camouflage"
        },
        {
          "cn": "撞色",
          "en": "Contrast"
        },
        {
          "cn": "贴布",
          "en": "Patchwork"
        },
        {
          "cn": "渐变",
          "en": "Gradient"
        },
        {
          "cn": "数码印花",
          "en": "Digital Print"
        },
        {
          "cn": "做旧",
          "en": "Distressed"
        },
        {
          "cn": "破洞",
          "en": "Ripped"
        }
      ],
      "颜色": [
        {
          "cn": "黑色",
          "en": "Black"
        },
        {
          "cn": "白色",
          "en": "White"
        },
        {
          "cn": "藏青",
          "en": "Navy Blue"
        },
        {
          "cn": "灰色",
          "en": "Gray"
        },
        {
          "cn": "卡其",
          "en": "Khaki"
        },
        {
          "cn": "军绿",
          "en": "Olive Green"
        },
        {
          "cn": "墨绿",
          "en": "Dark Green"
        },
        {
          "cn": "棕色",
          "en": "Brown"
        },
        {
          "cn": "咖色",
          "en": "Coffee"
        },
        {
          "cn": "驼色",
          "en": "Camel"
        },
        {
          "cn": "米白",
          "en": "Beige"
        },
        {
          "cn": "蓝色",
          "en": "Blue"
        },
        {
          "cn": "浅蓝",
          "en": "Light Blue"
        },
        {
          "cn": "深蓝",
          "en": "Dark Blue"
        },
        {
          "cn": "酒红",
          "en": "Wine Red"
        },
        {
          "cn": "砖红",
          "en": "Brick Red"
        },
        {
          "cn": "橙色",
          "en": "Orange"
        },
        {
          "cn": "黄色",
          "en": "Yellow"
        },
        {
          "cn": "姜黄",
          "en": "Mustard"
        },
        {
          "cn": "紫色",
          "en": "Purple"
        },
        {
          "cn": "荧光",
          "en": "Neon"
        },
        {
          "cn": "撞色",
          "en": "Color-Block"
        },
        {
          "cn": "渐变",
          "en": "Gradient"
        }
      ],
      "材质": [
        {
          "cn": "纯棉",
          "en": "Cotton"
        },
        {
          "cn": "羊毛",
          "en": "Wool"
        },
        {
          "cn": "聚酯纤维",
          "en": "Polyester"
        },
        {
          "cn": "灯芯绒",
          "en": "Corduroy"
        },
        {
          "cn": "牛仔布",
          "en": "Denim"
        },
        {
          "cn": "摇粒绒",
          "en": "Fleece"
        },
        {
          "cn": "呢料",
          "en": "Woolen"
        },
        {
          "cn": "亚麻",
          "en": "Linen"
        },
        {
          "cn": "棉混纺",
          "en": "Cotton Blend"
        },
        {
          "cn": "锦纶",
          "en": "Nylon"
        },
        {
          "cn": "氨纶",
          "en": "Spandex"
        },
        {
          "cn": "抓绒",
          "en": "Polar Fleece"
        },
        {
          "cn": "羊羔绒",
          "en": "Sherpa"
        },
        {
          "cn": "针织",
          "en": "Knit"
        },
        {
          "cn": "毛呢",
          "en": "Wool Suiting"
        },
        {
          "cn": "帆布",
          "en": "Canvas"
        },
        {
          "cn": "皮革",
          "en": "Leather"
        },
        {
          "cn": "仿皮",
          "en": "Faux Leather"
        },
        {
          "cn": "麂皮绒",
          "en": "Suede"
        },
        {
          "cn": "防风面料",
          "en": "Windproof Fabric"
        },
        {
          "cn": "冰丝",
          "en": "Ice Silk"
        },
        {
          "cn": "速干面料",
          "en": "Quick-Dry Fabric"
        },
        {
          "cn": "夹棉",
          "en": "Padded"
        }
      ],
      "细节特征": [
        {
          "cn": "多口袋",
          "en": "Multi Pockets"
        },
        {
          "cn": "拉链口袋",
          "en": "Zipper Pocket"
        },
        {
          "cn": "侧口袋",
          "en": "Side Pockets"
        },
        {
          "cn": "胸前口袋",
          "en": "Chest Pocket"
        },
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "可拆卸帽",
          "en": "Detachable Hood"
        },
        {
          "cn": "罗纹下摆",
          "en": "Ribbed Hem"
        },
        {
          "cn": "弹力裤脚",
          "en": "Elastic Cuffs"
        },
        {
          "cn": "束脚",
          "en": "Cuffed"
        },
        {
          "cn": "开叉下摆",
          "en": "Side Slit"
        },
        {
          "cn": "抽绳",
          "en": "Drawstring"
        },
        {
          "cn": "拼接",
          "en": "Patchwork"
        },
        {
          "cn": "撞色",
          "en": "Contrast"
        },
        {
          "cn": "压褶",
          "en": "Pleated"
        },
        {
          "cn": "刺绣",
          "en": "Embroidery"
        },
        {
          "cn": "拉链",
          "en": "Zip"
        },
        {
          "cn": "纽扣",
          "en": "Button"
        }
      ],
      "功能特性": [
        {
          "cn": "弹力",
          "en": "Stretch"
        },
        {
          "cn": "速干",
          "en": "Quick-Dry"
        },
        {
          "cn": "透气",
          "en": "Breathable"
        },
        {
          "cn": "吸湿排汗",
          "en": "Moisture-Wicking"
        },
        {
          "cn": "防风",
          "en": "Windproof"
        },
        {
          "cn": "防水",
          "en": "Waterproof"
        },
        {
          "cn": "保暖",
          "en": "Warm"
        },
        {
          "cn": "加厚",
          "en": "Thick"
        },
        {
          "cn": "轻薄",
          "en": "Lightweight"
        },
        {
          "cn": "防晒",
          "en": "UV Protection"
        },
        {
          "cn": "反光",
          "en": "Reflective"
        }
      ],
      "场景": [
        {
          "cn": "日常",
          "en": "Everyday"
        },
        {
          "cn": "通勤",
          "en": "Office"
        },
        {
          "cn": "户外",
          "en": "Outdoor"
        },
        {
          "cn": "聚会",
          "en": "Party"
        },
        {
          "cn": "旅行",
          "en": "Travel"
        },
        {
          "cn": "居家",
          "en": "Home"
        },
        {
          "cn": "商务",
          "en": "Business"
        },
        {
          "cn": "健身",
          "en": "Gym"
        },
        {
          "cn": "跑步",
          "en": "Running"
        },
        {
          "cn": "露营",
          "en": "Camping"
        },
        {
          "cn": "徒步",
          "en": "Hiking"
        },
        {
          "cn": "钓鱼",
          "en": "Fishing"
        },
        {
          "cn": "高尔夫",
          "en": "Golf"
        },
        {
          "cn": "海滩",
          "en": "Beach"
        },
        {
          "cn": "度假",
          "en": "Vacation"
        },
        {
          "cn": "约会",
          "en": "Date"
        },
        {
          "cn": "校园",
          "en": "Campus"
        },
        {
          "cn": "街头",
          "en": "Street"
        },
        {
          "cn": "婚礼",
          "en": "Wedding"
        },
        {
          "cn": "新年",
          "en": "New Year"
        }
      ],
      "季节": [
        {
          "cn": "春季",
          "en": "Spring"
        },
        {
          "cn": "夏季",
          "en": "Summer"
        },
        {
          "cn": "秋季",
          "en": "Autumn"
        },
        {
          "cn": "冬季",
          "en": "Winter"
        },
        {
          "cn": "春秋",
          "en": "Spring/Autumn"
        },
        {
          "cn": "秋冬",
          "en": "Autumn/Winter"
        },
        {
          "cn": "四季",
          "en": "All Season"
        },
        {
          "cn": "夏日",
          "en": "Summer"
        }
      ],
      "节日活动": [
        {
          "cn": "父亲节",
          "en": "Father's Day"
        },
        {
          "cn": "圣诞节",
          "en": "Christmas"
        },
        {
          "cn": "感恩节",
          "en": "Thanksgiving"
        },
        {
          "cn": "万圣节",
          "en": "Halloween"
        },
        {
          "cn": "新年",
          "en": "New Year"
        },
        {
          "cn": "独立日",
          "en": "Independence Day"
        },
        {
          "cn": "情人节",
          "en": "Valentine's Day"
        },
        {
          "cn": "世界杯",
          "en": "Football World Cup"
        },
        {
          "cn": "送礼",
          "en": "Gift"
        }
      ]
    },
    "cnTemplate": "男式{品类词}{风格}{版型}{领型}{袖长}{图案}{颜色}{材质}{细节特征}{功能特性}{场景}{季节}{节日活动}",
    "enTemplate": "Men's {category} {style} {fit} {collar} {sleeve} {pattern} {color} {fabric} {detail} {func} {scene} {season} {event}"
  },
  "童装": {
    "order": [
      "性别",
      "年龄段",
      "品类词",
      "风格",
      "版型",
      "领型",
      "袖长",
      "图案",
      "颜色",
      "材质",
      "细节特征",
      "功能特性",
      "场景",
      "季节",
      "节日活动"
    ],
    "dims": {
      "性别": [
        {
          "cn": "男童",
          "en": "Boys'"
        },
        {
          "cn": "女童",
          "en": "Girls'"
        },
        {
          "cn": "中性",
          "en": "Unisex Kids'"
        }
      ],
      "年龄段": [
        {
          "cn": "婴儿",
          "en": "Baby 0-12M"
        },
        {
          "cn": "幼儿",
          "en": "Toddler 1-3Y"
        },
        {
          "cn": "小童",
          "en": "Preschool 3-6Y"
        },
        {
          "cn": "中童",
          "en": "Kids 6-9Y"
        },
        {
          "cn": "大童",
          "en": "Pre-Teen 9-12Y"
        },
        {
          "cn": "青少年",
          "en": "Teen 10-16Y"
        },
        {
          "cn": "通用",
          "en": "From 3 to 16 Years"
        },
        {
          "cn": "一岁",
          "en": "1 Year Old"
        },
        {
          "cn": "两岁",
          "en": "2 Years Old"
        },
        {
          "cn": "三岁",
          "en": "3 Years Old"
        },
        {
          "cn": "五岁",
          "en": "5 Years Old"
        },
        {
          "cn": "七岁",
          "en": "7-8 Years Old"
        }
      ],
      "品类词": [
        {
          "cn": "T恤",
          "en": "T-shirt"
        },
        {
          "cn": "卫衣",
          "en": "Hoodie"
        },
        {
          "cn": "连衣裙",
          "en": "Dress"
        },
        {
          "cn": "外套",
          "en": "Jacket"
        },
        {
          "cn": "裤子",
          "en": "Pants"
        },
        {
          "cn": "套装",
          "en": "Outfit Set"
        },
        {
          "cn": "背心",
          "en": "Vest"
        },
        {
          "cn": "连体衣",
          "en": "Romper"
        },
        {
          "cn": "毛衣",
          "en": "Sweater"
        },
        {
          "cn": "衬衫",
          "en": "Shirt"
        },
        {
          "cn": "开衫",
          "en": "Cardigan"
        },
        {
          "cn": "运动套装",
          "en": "Sports Set"
        },
        {
          "cn": "校服套装",
          "en": "School Uniform Set"
        },
        {
          "cn": "纱裙",
          "en": "Tutu Dress"
        },
        {
          "cn": "公主裙",
          "en": "Princess Dress"
        },
        {
          "cn": "A字裙",
          "en": "A-line Skirt"
        },
        {
          "cn": "连帽外套",
          "en": "Hooded Jacket"
        },
        {
          "cn": "羽绒服",
          "en": "Down Jacket"
        },
        {
          "cn": "夹克",
          "en": "Jacket"
        }
      ],
      "风格": [
        {
          "cn": "可爱",
          "en": "Cute"
        },
        {
          "cn": "休闲",
          "en": "Casual"
        },
        {
          "cn": "运动",
          "en": "Sporty"
        },
        {
          "cn": "甜美",
          "en": "Sweet"
        },
        {
          "cn": "卡通",
          "en": "Cartoon"
        },
        {
          "cn": "中性",
          "en": "Unisex"
        },
        {
          "cn": "学院风",
          "en": "Preppy"
        },
        {
          "cn": "韩系",
          "en": "Korean Style"
        },
        {
          "cn": "Y2K街头",
          "en": "Y2K Streetwear"
        },
        {
          "cn": "甜心",
          "en": "Baddie"
        },
        {
          "cn": "复古",
          "en": "Retro"
        },
        {
          "cn": "日系",
          "en": "Japanese Style"
        },
        {
          "cn": "时尚",
          "en": "Fashion"
        },
        {
          "cn": "优雅",
          "en": "Elegant"
        },
        {
          "cn": "简约",
          "en": "Minimalist"
        }
      ],
      "版型": [
        {
          "cn": "宽松",
          "en": "Loose Fit"
        },
        {
          "cn": "常规",
          "en": "Regular Fit"
        },
        {
          "cn": "直筒",
          "en": "Straight Fit"
        },
        {
          "cn": "A字",
          "en": "A-line"
        },
        {
          "cn": "修身",
          "en": "Slim Fit"
        },
        {
          "cn": "高腰",
          "en": "High-Waist"
        },
        {
          "cn": "束脚",
          "en": "Tapered"
        },
        {
          "cn": "加宽",
          "en": "Cut for Comfort"
        }
      ],
      "领型": [
        {
          "cn": "圆领",
          "en": "Crew Neck"
        },
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "翻领",
          "en": "Spread Collar"
        },
        {
          "cn": "无领",
          "en": "Collarless"
        },
        {
          "cn": "高领",
          "en": "Turtleneck"
        },
        {
          "cn": "Polo领",
          "en": "Polo Collar"
        }
      ],
      "袖长": [
        {
          "cn": "长袖",
          "en": "Long Sleeve"
        },
        {
          "cn": "短袖",
          "en": "Short Sleeve"
        },
        {
          "cn": "无袖",
          "en": "Sleeveless"
        },
        {
          "cn": "七分袖",
          "en": "3/4 Sleeve"
        },
        {
          "cn": "泡泡袖",
          "en": "Puff Sleeve"
        }
      ],
      "图案": [
        {
          "cn": "卡通印花",
          "en": "Cartoon Print"
        },
        {
          "cn": "字母印花",
          "en": "Letter Print"
        },
        {
          "cn": "水果印花",
          "en": "Fruit Print"
        },
        {
          "cn": "动物印花",
          "en": "Animal Print"
        },
        {
          "cn": "星星印花",
          "en": "Star Print"
        },
        {
          "cn": "纯色",
          "en": "Solid"
        },
        {
          "cn": "条纹",
          "en": "Striped"
        },
        {
          "cn": "格纹",
          "en": "Plaid"
        },
        {
          "cn": "小碎花",
          "en": "Flower Print"
        },
        {
          "cn": "恐龙印花",
          "en": "Dinosaur Print"
        },
        {
          "cn": "汽车印花",
          "en": "Car Print"
        },
        {
          "cn": "公主印花",
          "en": "Princess Print"
        },
        {
          "cn": "爱心",
          "en": "Heart Print"
        },
        {
          "cn": "彩虹",
          "en": "Rainbow"
        },
        {
          "cn": "波点",
          "en": "Polka Dot"
        },
        {
          "cn": "拼色",
          "en": "Color Block"
        },
        {
          "cn": "刺绣",
          "en": "Embroidered"
        },
        {
          "cn": "渐变",
          "en": "Gradient"
        },
        {
          "cn": "月亮",
          "en": "Moon Print"
        },
        {
          "cn": "云朵",
          "en": "Cloud Print"
        }
      ],
      "颜色": [
        {
          "cn": "粉色",
          "en": "Pink"
        },
        {
          "cn": "蓝色",
          "en": "Blue"
        },
        {
          "cn": "白色",
          "en": "White"
        },
        {
          "cn": "黄色",
          "en": "Yellow"
        },
        {
          "cn": "绿色",
          "en": "Green"
        },
        {
          "cn": "紫色",
          "en": "Purple"
        },
        {
          "cn": "灰色",
          "en": "Gray"
        },
        {
          "cn": "黑色",
          "en": "Black"
        },
        {
          "cn": "天蓝",
          "en": "Sky Blue"
        },
        {
          "cn": "薄荷绿",
          "en": "Mint"
        },
        {
          "cn": "橙色",
          "en": "Orange"
        },
        {
          "cn": "红色",
          "en": "Red"
        },
        {
          "cn": "米色",
          "en": "Beige"
        },
        {
          "cn": "卡其",
          "en": "Khaki"
        },
        {
          "cn": "彩虹色",
          "en": "Multicolor"
        }
      ],
      "材质": [
        {
          "cn": "纯棉",
          "en": "Cotton"
        },
        {
          "cn": "有机棉",
          "en": "Organic Cotton"
        },
        {
          "cn": "摇粒绒",
          "en": "Fleece"
        },
        {
          "cn": "灯芯绒",
          "en": "Corduroy"
        },
        {
          "cn": "聚酯纤维",
          "en": "Polyester"
        },
        {
          "cn": "棉混纺",
          "en": "Cotton Blend"
        },
        {
          "cn": "法兰绒",
          "en": "Flannel"
        },
        {
          "cn": "羊毛",
          "en": "Wool"
        },
        {
          "cn": "婴儿级柔软",
          "en": "Baby-Soft"
        },
        {
          "cn": "冰丝",
          "en": "Ice Silk"
        },
        {
          "cn": "毛巾布",
          "en": "Terry"
        }
      ],
      "细节特征": [
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "多口袋",
          "en": "Multi Pockets"
        },
        {
          "cn": "拉链",
          "en": "Zipper"
        },
        {
          "cn": "纽扣",
          "en": "Button"
        },
        {
          "cn": "抽绳",
          "en": "Drawstring"
        },
        {
          "cn": "罗纹下摆",
          "en": "Ribbed Hem"
        },
        {
          "cn": "弹力腰",
          "en": "Elastic Waist"
        },
        {
          "cn": "泡泡袖",
          "en": "Puff Sleeve"
        },
        {
          "cn": "蝴蝶结",
          "en": "Bow"
        },
        {
          "cn": "蕾丝",
          "en": "Lace"
        },
        {
          "cn": "可爱绣花",
          "en": "Embroidered"
        },
        {
          "cn": "贴布",
          "en": "Patch"
        }
      ],
      "功能特性": [
        {
          "cn": "弹力",
          "en": "Stretch"
        },
        {
          "cn": "透气",
          "en": "Breathable"
        },
        {
          "cn": "速干",
          "en": "Quick-Dry"
        },
        {
          "cn": "保暖",
          "en": "Warm"
        },
        {
          "cn": "加厚",
          "en": "Thick"
        },
        {
          "cn": "轻薄",
          "en": "Lightweight"
        },
        {
          "cn": "柔软",
          "en": "Soft"
        },
        {
          "cn": "防泼水",
          "en": "Water-Resistant"
        },
        {
          "cn": "易穿",
          "en": "Easy On"
        },
        {
          "cn": "可机洗",
          "en": "Machine Washable"
        }
      ],
      "场景": [
        {
          "cn": "上学",
          "en": "School"
        },
        {
          "cn": "日常",
          "en": "Everyday"
        },
        {
          "cn": "户外",
          "en": "Outdoor"
        },
        {
          "cn": "生日",
          "en": "Party"
        },
        {
          "cn": "拍照",
          "en": "Photo"
        },
        {
          "cn": "旅行",
          "en": "Travel"
        },
        {
          "cn": "居家",
          "en": "Home"
        },
        {
          "cn": "运动",
          "en": "Sports"
        },
        {
          "cn": "节日",
          "en": "Holiday"
        },
        {
          "cn": "露营",
          "en": "Camping"
        },
        {
          "cn": "海边",
          "en": "Beach"
        },
        {
          "cn": "新年",
          "en": "New Year"
        },
        {
          "cn": "运动会",
          "en": "Field Day"
        }
      ],
      "季节": [
        {
          "cn": "春季",
          "en": "Spring"
        },
        {
          "cn": "夏季",
          "en": "Summer"
        },
        {
          "cn": "秋季",
          "en": "Autumn"
        },
        {
          "cn": "冬季",
          "en": "Winter"
        },
        {
          "cn": "春秋",
          "en": "Spring/Autumn"
        },
        {
          "cn": "秋冬",
          "en": "Autumn/Winter"
        },
        {
          "cn": "四季",
          "en": "All Season"
        }
      ],
      "节日活动": [
        {
          "cn": "圣诞节",
          "en": "Christmas"
        },
        {
          "cn": "万圣节",
          "en": "Halloween"
        },
        {
          "cn": "新年",
          "en": "New Year"
        },
        {
          "cn": "复活节",
          "en": "Easter"
        },
        {
          "cn": "儿童节",
          "en": "Children's Day"
        },
        {
          "cn": "生日",
          "en": "Birthday"
        },
        {
          "cn": "送礼",
          "en": "Gift"
        },
        {
          "cn": "开学",
          "en": "Back to School"
        }
      ]
    },
    "cnTemplate": "{性别}{年龄段}{品类词}{风格}{版型}{领型}{袖长}{图案}{颜色}{材质}{细节特征}{功能特性}{场景}{季节}{节日活动}",
    "enTemplate": "{gender} {age} {category} {style} {fit} {collar} {sleeve} {pattern} {color} {fabric} {detail} {func} {scene} {season} {event}"
  },
  "大码男装": {
    "order": [
      "品类词",
      "版型",
      "风格",
      "领型",
      "袖长",
      "图案",
      "颜色",
      "材质",
      "细节特征",
      "功能特性",
      "场景",
      "季节",
      "节日活动"
    ],
    "dims": {
      "品类词": [
        {
          "cn": "T恤",
          "en": "T-shirt"
        },
        {
          "cn": "衬衫",
          "en": "Shirt"
        },
        {
          "cn": "亨利衫",
          "en": "Henley"
        },
        {
          "cn": "Polo衫",
          "en": "Polo"
        },
        {
          "cn": "卫衣",
          "en": "Hoodie"
        },
        {
          "cn": "夹克",
          "en": "Jacket"
        },
        {
          "cn": "棉服",
          "en": "Cotton-Padded Coat"
        },
        {
          "cn": "羽绒服",
          "en": "Down Jacket"
        },
        {
          "cn": "风衣",
          "en": "Trench Coat"
        },
        {
          "cn": "外套",
          "en": "Outerwear"
        },
        {
          "cn": "长裤",
          "en": "Trousers"
        },
        {
          "cn": "工装裤",
          "en": "Cargo Pants"
        },
        {
          "cn": "运动裤",
          "en": "Sweatpants"
        },
        {
          "cn": "束脚裤",
          "en": "Jogger Pants"
        },
        {
          "cn": "短裤",
          "en": "Shorts"
        },
        {
          "cn": "马甲",
          "en": "Vest"
        },
        {
          "cn": "休闲裤",
          "en": "Casual Pants"
        },
        {
          "cn": "牛仔裤",
          "en": "Jeans"
        }
      ],
      "版型": [
        {
          "cn": "宽松版",
          "en": "Loose Fit"
        },
        {
          "cn": "廓形版",
          "en": "Oversized"
        },
        {
          "cn": "直筒版",
          "en": "Straight Fit"
        },
        {
          "cn": "加宽舒适版",
          "en": "Cut for Comfort"
        },
        {
          "cn": "大码舒适",
          "en": "Plus Comfort"
        },
        {
          "cn": "宽松垂感",
          "en": "Relaxed"
        },
        {
          "cn": "真合身",
          "en": "True to Size"
        },
        {
          "cn": "修身版",
          "en": "Slim Fit"
        }
      ],
      "风格": [
        {
          "cn": "休闲",
          "en": "Casual"
        },
        {
          "cn": "商务",
          "en": "Business"
        },
        {
          "cn": "街头",
          "en": "Streetwear"
        },
        {
          "cn": "复古",
          "en": "Retro"
        },
        {
          "cn": "简约",
          "en": "Minimalist"
        },
        {
          "cn": "运动",
          "en": "Sporty"
        },
        {
          "cn": "工装",
          "en": "Workwear"
        },
        {
          "cn": "学院风",
          "en": "Preppy"
        },
        {
          "cn": "时尚",
          "en": "Fashion"
        },
        {
          "cn": "潮流",
          "en": "Trendy"
        },
        {
          "cn": "优雅",
          "en": "Elegant"
        },
        {
          "cn": "别致",
          "en": "Chic"
        },
        {
          "cn": "经典",
          "en": "Classic"
        },
        {
          "cn": "夏威夷度假",
          "en": "Hawaiian"
        },
        {
          "cn": "波西米亚",
          "en": "Bohemian"
        },
        {
          "cn": "韩系",
          "en": "Korean Style"
        },
        {
          "cn": "摇滚",
          "en": "Rock"
        },
        {
          "cn": "嘻哈",
          "en": "Hip-Hop"
        },
        {
          "cn": "日系",
          "en": "Japanese Style"
        },
        {
          "cn": "机能",
          "en": "Techwear"
        },
        {
          "cn": "美式",
          "en": "American Casual"
        }
      ],
      "领型": [
        {
          "cn": "圆领",
          "en": "Crew Neck"
        },
        {
          "cn": "翻领",
          "en": "Spread Collar"
        },
        {
          "cn": "立领",
          "en": "Stand Collar"
        },
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "无领",
          "en": "Collarless"
        },
        {
          "cn": "高领",
          "en": "Turtleneck"
        },
        {
          "cn": "Polo领",
          "en": "Polo Collar"
        }
      ],
      "袖长": [
        {
          "cn": "长袖",
          "en": "Long Sleeve"
        },
        {
          "cn": "短袖",
          "en": "Short Sleeve"
        },
        {
          "cn": "七分袖",
          "en": "3/4 Sleeve"
        },
        {
          "cn": "无袖",
          "en": "Sleeveless"
        }
      ],
      "图案": [
        {
          "cn": "纯色",
          "en": "Solid"
        },
        {
          "cn": "条纹",
          "en": "Striped"
        },
        {
          "cn": "格纹",
          "en": "Plaid"
        },
        {
          "cn": "印花",
          "en": "Printed"
        },
        {
          "cn": "拼色",
          "en": "Color Block"
        },
        {
          "cn": "字母印花",
          "en": "Letter Print"
        },
        {
          "cn": "迷彩",
          "en": "Camouflage"
        },
        {
          "cn": "扎染",
          "en": "Tie-Dye"
        },
        {
          "cn": "撞色",
          "en": "Contrast"
        },
        {
          "cn": "渐变",
          "en": "Gradient"
        },
        {
          "cn": "刺绣",
          "en": "Embroidered"
        }
      ],
      "颜色": [
        {
          "cn": "黑色",
          "en": "Black"
        },
        {
          "cn": "白色",
          "en": "White"
        },
        {
          "cn": "藏青",
          "en": "Navy"
        },
        {
          "cn": "灰色",
          "en": "Gray"
        },
        {
          "cn": "军绿",
          "en": "Olive"
        },
        {
          "cn": "棕色",
          "en": "Brown"
        },
        {
          "cn": "卡其",
          "en": "Khaki"
        },
        {
          "cn": "墨绿",
          "en": "Dark Green"
        },
        {
          "cn": "米白",
          "en": "Beige"
        },
        {
          "cn": "酒红",
          "en": "Wine Red"
        },
        {
          "cn": "浅灰",
          "en": "Light Gray"
        }
      ],
      "材质": [
        {
          "cn": "纯棉",
          "en": "Cotton"
        },
        {
          "cn": "摇粒绒",
          "en": "Fleece"
        },
        {
          "cn": "灯芯绒",
          "en": "Corduroy"
        },
        {
          "cn": "牛仔布",
          "en": "Denim"
        },
        {
          "cn": "聚酯纤维",
          "en": "Polyester"
        },
        {
          "cn": "棉混纺",
          "en": "Cotton Blend"
        },
        {
          "cn": "抓绒",
          "en": "Polar Fleece"
        },
        {
          "cn": "羊羔绒",
          "en": "Sherpa"
        },
        {
          "cn": "亚麻",
          "en": "Linen"
        },
        {
          "cn": "呢料",
          "en": "Woolen"
        },
        {
          "cn": "针织",
          "en": "Knit"
        },
        {
          "cn": "帆布",
          "en": "Canvas"
        }
      ],
      "细节特征": [
        {
          "cn": "多口袋",
          "en": "Multi Pockets"
        },
        {
          "cn": "拉链口袋",
          "en": "Zipper Pocket"
        },
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "抽绳",
          "en": "Drawstring"
        },
        {
          "cn": "罗纹下摆",
          "en": "Ribbed Hem"
        },
        {
          "cn": "弹力裤脚",
          "en": "Elastic Cuffs"
        },
        {
          "cn": "束脚",
          "en": "Cuffed"
        },
        {
          "cn": "胸前口袋",
          "en": "Chest Pocket"
        },
        {
          "cn": "侧口袋",
          "en": "Side Pockets"
        },
        {
          "cn": "撞色",
          "en": "Contrast"
        },
        {
          "cn": "拉链",
          "en": "Zip"
        },
        {
          "cn": "纽扣",
          "en": "Button"
        }
      ],
      "功能特性": [
        {
          "cn": "弹力",
          "en": "Stretch"
        },
        {
          "cn": "透气",
          "en": "Breathable"
        },
        {
          "cn": "速干",
          "en": "Quick-Dry"
        },
        {
          "cn": "保暖",
          "en": "Warm"
        },
        {
          "cn": "加厚",
          "en": "Thick"
        },
        {
          "cn": "轻薄",
          "en": "Lightweight"
        },
        {
          "cn": "吸湿排汗",
          "en": "Moisture-Wicking"
        },
        {
          "cn": "防风",
          "en": "Windproof"
        },
        {
          "cn": "柔软",
          "en": "Soft"
        }
      ],
      "场景": [
        {
          "cn": "日常",
          "en": "Everyday"
        },
        {
          "cn": "通勤",
          "en": "Office"
        },
        {
          "cn": "户外",
          "en": "Outdoor"
        },
        {
          "cn": "居家",
          "en": "Home"
        },
        {
          "cn": "聚会",
          "en": "Party"
        },
        {
          "cn": "健身",
          "en": "Gym"
        },
        {
          "cn": "旅行",
          "en": "Travel"
        },
        {
          "cn": "休闲",
          "en": "Casual"
        },
        {
          "cn": "海边",
          "en": "Beach"
        }
      ],
      "季节": [
        {
          "cn": "春季",
          "en": "Spring"
        },
        {
          "cn": "夏季",
          "en": "Summer"
        },
        {
          "cn": "秋季",
          "en": "Autumn"
        },
        {
          "cn": "冬季",
          "en": "Winter"
        },
        {
          "cn": "春秋",
          "en": "Spring/Autumn"
        },
        {
          "cn": "秋冬",
          "en": "Autumn/Winter"
        },
        {
          "cn": "四季",
          "en": "All Season"
        },
        {
          "cn": "夏日",
          "en": "Summer"
        }
      ],
      "节日活动": [
        {
          "cn": "父亲节",
          "en": "Father's Day"
        },
        {
          "cn": "圣诞节",
          "en": "Christmas"
        },
        {
          "cn": "新年",
          "en": "New Year"
        },
        {
          "cn": "感恩节",
          "en": "Thanksgiving"
        },
        {
          "cn": "万圣节",
          "en": "Halloween"
        },
        {
          "cn": "送礼",
          "en": "Gift"
        }
      ]
    },
    "cnTemplate": "大码男式{品类词}{风格}{版型}{领型}{袖长}{图案}{颜色}{材质}{细节特征}{功能特性}{场景}{季节}{节日活动}",
    "enTemplate": "Men's Big and Tall {category} {style} {fit} {collar} {sleeve} {pattern} {color} {fabric} {detail} {func} {scene} {season} {event}"
  },
  "家居服": {
    "order": [
      "人群",
      "品类词",
      "风格",
      "版型",
      "材质",
      "领型",
      "袖长",
      "图案",
      "颜色",
      "细节特征",
      "功能特性",
      "季节",
      "节日活动"
    ],
    "dims": {
      "人群": [
        {
          "cn": "女士",
          "en": "Ladies'"
        },
        {
          "cn": "男士",
          "en": "Men's"
        },
        {
          "cn": "儿童",
          "en": "Kids'"
        },
        {
          "cn": "全家",
          "en": "Family"
        },
        {
          "cn": "情侣",
          "en": "Couples'"
        },
        {
          "cn": "亲子",
          "en": "Parent-Child"
        }
      ],
      "品类词": [
        {
          "cn": "睡衣套装",
          "en": "Pajama Set"
        },
        {
          "cn": "睡袍",
          "en": "Bathrobe"
        },
        {
          "cn": "家居服套装",
          "en": "Loungewear Set"
        },
        {
          "cn": "睡衣裤",
          "en": "Pajama Pants"
        },
        {
          "cn": "睡裙",
          "en": "Nightgown"
        },
        {
          "cn": "家居卫衣",
          "en": "Loungewear Hoodie"
        },
        {
          "cn": "家居长袍",
          "en": "House Robe"
        },
        {
          "cn": "法兰绒睡衣",
          "en": "Flannel Pajama"
        },
        {
          "cn": "冰丝睡衣",
          "en": "Ice Silk Pajama"
        },
        {
          "cn": "珊瑚绒睡衣",
          "en": "Fleece Velvet Pajama"
        },
        {
          "cn": "情侣睡衣",
          "en": "Couples Pajama"
        },
        {
          "cn": "亲子睡衣",
          "en": "Family Pajama"
        },
        {
          "cn": "家居短裤",
          "en": "Loungewear Shorts"
        },
        {
          "cn": "家居裤",
          "en": "Jogger Pants"
        },
        {
          "cn": "吊带睡裙",
          "en": "Cami Nightgown"
        }
      ],
      "风格": [
        {
          "cn": "简约",
          "en": "Minimalist"
        },
        {
          "cn": "可爱",
          "en": "Cute"
        },
        {
          "cn": "复古",
          "en": "Retro"
        },
        {
          "cn": "慵懒舒适",
          "en": "Cozy"
        },
        {
          "cn": "甜美",
          "en": "Sweet"
        },
        {
          "cn": "韩系",
          "en": "Korean Style"
        },
        {
          "cn": "优雅",
          "en": "Elegant"
        },
        {
          "cn": "卡通",
          "en": "Cartoon"
        },
        {
          "cn": "休闲",
          "en": "Casual"
        },
        {
          "cn": "浪漫",
          "en": "Romantic"
        },
        {
          "cn": "法式",
          "en": "French Style"
        },
        {
          "cn": "日系",
          "en": "Japanese Style"
        }
      ],
      "版型": [
        {
          "cn": "宽松版",
          "en": "Relaxed Fit"
        },
        {
          "cn": "慵懒版",
          "en": "Cozy Fit"
        },
        {
          "cn": "直筒",
          "en": "Straight Fit"
        },
        {
          "cn": "常规",
          "en": "Regular Fit"
        },
        {
          "cn": "廓形",
          "en": "Oversized"
        },
        {
          "cn": "高腰",
          "en": "High-Waist"
        },
        {
          "cn": "弹力宽松",
          "en": "Stretch Relaxed"
        },
        {
          "cn": "束脚",
          "en": "Tapered"
        }
      ],
      "材质": [
        {
          "cn": "纯棉",
          "en": "Cotton"
        },
        {
          "cn": "珊瑚绒",
          "en": "Fleece Velvet"
        },
        {
          "cn": "法兰绒",
          "en": "Flannel"
        },
        {
          "cn": "冰丝",
          "en": "Ice Silk"
        },
        {
          "cn": "莫代尔",
          "en": "Modal"
        },
        {
          "cn": "竹纤维",
          "en": "Bamboo Fiber"
        },
        {
          "cn": "有机棉",
          "en": "Organic Cotton"
        },
        {
          "cn": "天鹅绒",
          "en": "Velvet"
        },
        {
          "cn": "丝光棉",
          "en": "Mercerized Cotton"
        },
        {
          "cn": "棉绒",
          "en": "Cotton-Fleece"
        },
        {
          "cn": "羊羔绒",
          "en": "Sherpa"
        },
        {
          "cn": "棉麻",
          "en": "Cotton Linen"
        }
      ],
      "领型": [
        {
          "cn": "圆领",
          "en": "Crew Neck"
        },
        {
          "cn": "翻领",
          "en": "Lapel"
        },
        {
          "cn": "V领",
          "en": "V-neck"
        },
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "立领",
          "en": "Stand Collar"
        },
        {
          "cn": "无领",
          "en": "Collarless"
        },
        {
          "cn": "衬衫领",
          "en": "Shirt Collar"
        }
      ],
      "袖长": [
        {
          "cn": "长袖",
          "en": "Long Sleeve"
        },
        {
          "cn": "短袖",
          "en": "Short Sleeve"
        },
        {
          "cn": "无袖",
          "en": "Sleeveless"
        },
        {
          "cn": "泡泡袖",
          "en": "Puff Sleeve"
        },
        {
          "cn": "吊带",
          "en": "Cami"
        }
      ],
      "图案": [
        {
          "cn": "纯色",
          "en": "Solid"
        },
        {
          "cn": "条纹",
          "en": "Striped"
        },
        {
          "cn": "格纹",
          "en": "Plaid"
        },
        {
          "cn": "卡通印花",
          "en": "Cartoon Print"
        },
        {
          "cn": "星星印花",
          "en": "Star Print"
        },
        {
          "cn": "小碎花",
          "en": "Flower Print"
        },
        {
          "cn": "爱心",
          "en": "Heart Print"
        },
        {
          "cn": "奶牛纹",
          "en": "Cow Print"
        },
        {
          "cn": "小熊印花",
          "en": "Bear Print"
        },
        {
          "cn": "字母印花",
          "en": "Letter Print"
        },
        {
          "cn": "撞色",
          "en": "Contrast"
        },
        {
          "cn": "波点",
          "en": "Polka Dot"
        },
        {
          "cn": "渐变",
          "en": "Gradient"
        },
        {
          "cn": "拼色",
          "en": "Color Block"
        },
        {
          "cn": "刺绣",
          "en": "Embroidered"
        }
      ],
      "颜色": [
        {
          "cn": "粉色",
          "en": "Pink"
        },
        {
          "cn": "米白",
          "en": "Beige"
        },
        {
          "cn": "奶咖",
          "en": "Milk Coffee"
        },
        {
          "cn": "酒红",
          "en": "Wine Red"
        },
        {
          "cn": "藏青",
          "en": "Navy"
        },
        {
          "cn": "灰色",
          "en": "Gray"
        },
        {
          "cn": "黑色",
          "en": "Black"
        },
        {
          "cn": "白色",
          "en": "White"
        },
        {
          "cn": "浅蓝",
          "en": "Light Blue"
        },
        {
          "cn": "薄荷绿",
          "en": "Mint"
        },
        {
          "cn": "浅紫",
          "en": "Lavender"
        },
        {
          "cn": "奶油白",
          "en": "Cream"
        },
        {
          "cn": "卡其",
          "en": "Khaki"
        },
        {
          "cn": "棕色",
          "en": "Brown"
        },
        {
          "cn": "姜黄",
          "en": "Mustard"
        },
        {
          "cn": "浅灰",
          "en": "Light Gray"
        }
      ],
      "细节特征": [
        {
          "cn": "翻边裤脚",
          "en": "Rolled Hem"
        },
        {
          "cn": "纽扣",
          "en": "Button"
        },
        {
          "cn": "拉链",
          "en": "Zipper"
        },
        {
          "cn": "连帽",
          "en": "Hooded"
        },
        {
          "cn": "口袋",
          "en": "Pockets"
        },
        {
          "cn": "抽绳",
          "en": "Drawstring"
        },
        {
          "cn": "罗纹袖口",
          "en": "Ribbed Cuffs"
        },
        {
          "cn": "系带腰带",
          "en": "Belted"
        },
        {
          "cn": "蕾丝",
          "en": "Lace"
        },
        {
          "cn": "蝴蝶结",
          "en": "Bow"
        },
        {
          "cn": "刺绣",
          "en": "Embroidered"
        },
        {
          "cn": "双层领",
          "en": "Double Collar"
        }
      ],
      "功能特性": [
        {
          "cn": "柔软",
          "en": "Soft"
        },
        {
          "cn": "透气",
          "en": "Breathable"
        },
        {
          "cn": "亲肤",
          "en": "Skin-Friendly"
        },
        {
          "cn": "保暖",
          "en": "Warm"
        },
        {
          "cn": "加厚",
          "en": "Thick"
        },
        {
          "cn": "轻薄",
          "en": "Lightweight"
        },
        {
          "cn": "吸湿排汗",
          "en": "Moisture-Wicking"
        },
        {
          "cn": "弹力",
          "en": "Stretch"
        },
        {
          "cn": "无勒束带",
          "en": "Comfortable"
        },
        {
          "cn": "可机洗",
          "en": "Machine Washable"
        }
      ],
      "季节": [
        {
          "cn": "春夏",
          "en": "Spring/Summer"
        },
        {
          "cn": "秋冬",
          "en": "Autumn/Winter"
        },
        {
          "cn": "四季",
          "en": "All Season"
        },
        {
          "cn": "夏季",
          "en": "Summer"
        },
        {
          "cn": "冬季",
          "en": "Winter"
        }
      ],
      "节日活动": [
        {
          "cn": "圣诞节",
          "en": "Christmas"
        },
        {
          "cn": "新年",
          "en": "New Year"
        },
        {
          "cn": "春节",
          "en": "Lunar New Year"
        },
        {
          "cn": "情人节",
          "en": "Valentine's Day"
        },
        {
          "cn": "生日",
          "en": "Birthday"
        },
        {
          "cn": "送礼",
          "en": "Gift"
        },
        {
          "cn": "结婚",
          "en": "Wedding"
        },
        {
          "cn": "家庭聚会",
          "en": "Family Gathering"
        }
      ]
    },
    "cnTemplate": "{人群}{品类词}{风格}{版型}{材质}{领型}{袖长}{图案}{颜色}{细节特征}{功能特性}{季节}{节日活动}",
    "enTemplate": "{crowd} {category} {style} {fit} {fabric} {collar} {sleeve} {pattern} {color} {detail} {func} {season} {event}"
  }
};
