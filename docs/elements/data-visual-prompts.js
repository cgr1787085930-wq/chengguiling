/*
  =============================================
  成桂零对接服务站
  版权 © 成桂零对接服务站 保留所有权利
  禁止照搬/爬取/用于 AI 训练。
  =============================================
*/
/* ============================================================
   视觉优化 · AI 指令生成器配置 —— 编辑本文件即可扩展选项与模板
   结构：
   window.CGL_VISUAL = {
     pdfUrl    : 市场视觉需求 PDF 路径（把文件放到 assets/pdf/ 下后修改这里）
     categories: [ {cn,en} ]      商品类目（可加具体品类）
     scenes    : [ {cn,en} ]      拍摄/展示场景
     styles    : [ {cn,en} ]      画面风格
     lights    : [ {cn,en} ]      光线
     shots     : [ {cn,en} ]      构图
     tones     : [ {cn,en} ]      色调
     extra     : [ {cn,en} ]      附加要求
     templates : [ {name, cn, en} ] 常用完整模板（一键套用）
   }
   ============================================================ */
window.CGL_VISUAL = {
  pdfUrl: "assets/pdf/market-visual-demand.pdf",

  categories: [
    { cn: "男装 · 夹克", en: "Men's jacket" },
    { cn: "男装 · 卫衣", en: "Men's hoodie" },
    { cn: "男装 · T恤", en: "Men's t-shirt" },
    { cn: "男装 · 衬衫", en: "Men's shirt" },
    { cn: "童装 · 卫衣", en: "Kids' hoodie" },
    { cn: "童装 · 套装", en: "Kids' outfit set" },
    { cn: "大码男装 · T恤", en: "Big and tall men's t-shirt" },
    { cn: "大码男装 · 外套", en: "Big and tall men's outerwear" },
    { cn: "家居服 · 睡衣套装", en: "Loungewear pajama set" },
    { cn: "家居服 · 浴袍", en: "Fleece bathrobe" }
  ],

  scenes: [
    { cn: "白底商品图", en: "product photo on pure white background" },
    { cn: "模特上身图", en: "model wearing the item, full body" },
    { cn: "平铺图", en: "flat lay shot" },
    { cn: "挂拍图", en: "hanging on a hanger" },
    { cn: "细节特写", en: "close-up detail shot of fabric texture" },
    { cn: "场景氛围图", en: "lifestyle scene photo" }
  ],

  styles: [
    { cn: "极简高级感", en: "minimalist premium style" },
    { cn: "街头潮流", en: "streetwear trendy style" },
    { cn: "复古胶片风", en: "retro film photography style" },
    { cn: "温馨居家风", en: "warm cozy home style" },
    { cn: "清新自然风", en: "fresh natural style" },
    { cn: "商务通勤风", en: "business casual style" }
  ],

  lights: [
    { cn: "自然光", en: "soft natural daylight" },
    { cn: "棚拍柔光", en: "studio softbox lighting" },
    { cn: "侧逆光", en: "rim light from side back" },
    { cn: "暖色调灯光", en: "warm tone lighting" },
    { cn: "均匀无影光", en: "even shadowless lighting" }
  ],

  shots: [
    { cn: "居中构图", en: "centered composition" },
    { cn: "三分法构图", en: "rule of thirds composition" },
    { cn: "全身入镜", en: "full item visible in frame" },
    { cn: "局部特写", en: "cropped close composition" }
  ],

  tones: [
    { cn: "高饱和", en: "high saturation" },
    { cn: "低饱和莫兰迪", en: "low saturation morandi tone" },
    { cn: "暖色调", en: "warm color tone" },
    { cn: "冷色调", en: "cool color tone" },
    { cn: "黑白极简", en: "black and white minimal" }
  ],

  extra: [
    { cn: "突出版型细节", en: "emphasize the silhouette details" },
    { cn: "突出面料质感", en: "emphasize fabric texture" },
    { cn: "适合电商主图", en: "suitable for e-commerce main image" },
    { cn: "适合详情页长图", en: "suitable for product detail page" },
    { cn: "去水印无文字", en: "no watermark, no text" },
    { cn: "高清细节丰富", en: "high resolution, rich details" }
  ],

  templates: [
    {
      name: "白底商品图模板",
      cn: "商品类目：男装夹克。拍摄要求：白底商品图，极简高级感，均匀无影光，居中构图，全件入镜，突出面料质感与版型细节，去水印无文字，高清细节丰富。",
      en: "Product: men's jacket. Shot: product photo on pure white background, minimalist premium style, even shadowless lighting, centered composition, full item visible, emphasize fabric texture and silhouette details, no watermark, no text, high resolution."
    },
    {
      name: "模特上身图模板",
      cn: "商品类目：男装卫衣。拍摄要求：模特上身图，街头潮流风格，自然光，全身入镜，三分法构图，突出廓形版型，适合电商主图，无文字水印。",
      en: "Product: men's hoodie. Shot: model wearing the item, full body, streetwear trendy style, soft natural daylight, rule of thirds composition, emphasize the oversized silhouette, suitable for e-commerce main image, no text or watermark."
    },
    {
      name: "面料细节图模板",
      cn: "商品类目：家居服睡衣套装。拍摄要求：细节特写，温馨居家风格，暖色调灯光，突出珊瑚绒/纯棉面料质感与触感，构图干净，高清细节丰富。",
      en: "Product: loungewear pajama set. Shot: close-up detail of fabric texture, warm cozy home style, warm tone lighting, emphasize the soft fleece/cotton feel, clean composition, high resolution with rich details."
    },
    {
      name: "场景氛围图模板",
      cn: "商品类目：童装套装。拍摄要求：场景氛围图，清新自然风格，自然光，孩子日常活动场景，画面温馨有生活感，适合详情页长图，无文字。",
      en: "Product: kids' outfit set. Shot: lifestyle scene photo, fresh natural style, soft natural daylight, everyday kids activity scene, warm and lively atmosphere, suitable for product detail page, no text."
    }
  ]
};