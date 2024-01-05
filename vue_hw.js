Vue.createApp({
  data() {
    return {
      flowers: [
        {
          mainTitle: "玫瑰花",
          title: "Rose",
          outward: "玫瑰為落葉灌木，有邊刺。花有紫紅色、白色，花期5-6月",
          textFlower:
            "紅色玫瑰象徵濃烈的愛情和熱情;粉紅色玫瑰象徵溫柔、純真; 白色玫瑰則為純潔、無暇的象徵",
          products: "花束、花籃、婚禮和其他特殊場合裝飾。",
          img_first: "./photos/flower_introduce/rose_first.jpg",
          img_second: "./photos/flower_introduce/rose_second.jpg",
          img_third: "./photos/flower_introduce/rose_third.jpg",
          btnId: "roseBtn",
        },
        {
          mainTitle: "桔梗花",
          title: "Eustoma",
          outward:
            "桔梗花朵顏色豐富，花型和玫瑰相似，因此有「無刺的玫瑰」之稱，不僅深受一般民眾的喜愛，也是許多專業花藝師偏愛的花種之一",
          textFlower:
            "桔梗隨著顏色的不同，也有著不同的花語：「永遠的愛」「不變的愛」「氣質」「誠實」",
          products: "花束、盆花、婚禮捧花。",
          img_first: "./photos/flower_introduce/eustoma_first.jpg",
          img_second: "./photos/flower_introduce/eustoma_second.jpg",
          img_third: "./photos/flower_introduce/eustoma_third.jpg",
          btnId: "eustomaBtn",
        },
        {
          mainTitle: "繡球花",
          title: "Hydrangeas",
          outward:
            "花朵碩大，顏色繽紛，顏色根據土壤決定，有綠色、白色、粉色、紫色、藍色等。",
          textFlower:
            "繡球花的花語根據顏色而不同。粉紅色象徵「有活力的女性」、藍色象徵「堅毅不搖的愛」、綠色象徵「專一的愛」。",
          products: "大型鮮花擺設、花束及開幕花籃。",
          img_first: "./photos/flower_introduce/hydrangeas_first.jpg",
          img_second: "./photos/flower_introduce/hydrangeas_second.jpg",
          img_third: "./photos/flower_introduce/hydrangeas_third.jpg",
          btnId: "hydrangeasBtn",
        },
        {
          mainTitle: "百合花",
          title: "Lily",
          outward:
            "百合的形狀、顏色、香味和品種都很特別。由於鮮花盛放時花朵很大，頗具觀賞性，因此百合花 常常在花束製作中被用作主花。",
          textFlower:
            "花語是純潔、莊嚴，以及財富與榮耀，因此百合花一直是古今中外相當受歡迎的花卉。",
          products: "花束、盆花。",
          img_first: "./photos/flower_introduce/lily_first.jpg",
          img_second: "./photos/flower_introduce/lily_second.jpg",
          img_third: "./photos/flower_introduce/lily_third.jpg",
          btnId: "lilyBtn",
        },
        {
          mainTitle: "蘭花",
          title: "Orchid",
          outward:
            "蘭花是花店裡非常搶手的鮮花品種。蘭花因其精緻獨特的形狀、鮮豔的色彩令人讚歎。",
          textFlower:
            "蘭花的花語為淡泊、高雅、美好、高潔、賢德。自古以來，蘭花和梅、竹、菊並列為花中四君子。",
          products: "花束、盆花。",
          img_first: "./photos/flower_introduce/orchid_first.jpg",
          img_second: "./photos/flower_introduce/orchid_second.jpg",
          img_third: "./photos/flower_introduce/orchid_third.jpg",
          btnId: "orchidBtn",
        },
      ],
      selectedFlower: {},

      navList: [
        {
          navType: "商品列表",
          href: "./item_list.html",
          productList: [
            {
              linkName: "花束",
              linkSrc: "./item_list.html#flower1",
            },
            {
              linkName: "盆花",
              linkSrc: "./item_list.html#flower2",
            },
            {
              linkName: "永生花",
              linkSrc: "./item_list.html#flower3",
            },
          ],
        },
        { navType: "花藝課程", href: "./class.html" },
        { navType: "花藝百科", href: "./flowers_knowledge.html" },
        { navType: "常見花材", href: "./flowers_introduce.html" },
      ],

      icons: [
        {
          href: "./cart.html",
          imgSrc: "./photos/icon/icon_cart.png",
          cssClass: "mynav_cart",
        },
        {
          href: "#",
          imgSrc: "./photos/icon/icon_question.png",
          cssClass: "mynav_question",
        },
        {
          labelFor: "member",
          imgSrc: "./photos/icon/icon_member.png",
          cssClass: "mynav_member",
          id: "login_icon",
        },
      ],

      socialLinks: [
        {
          name: "facebook",
          href: "http://www.facebook.com/",
          imgSrc: "./photos/icon/icon_fb.png",
          altText: "facebook",
          cssClass: "footer_fb",
        },
        {
          name: "instagram",
          href: "http://www.instagram.com/",
          imgSrc: "./photos/icon/icon_ig.png",
          altText: "instagram",
          cssClass: "footer_ig",
        },
        {
          name: "line",
          href: "http://line.me/",
          imgSrc: "./photos/icon/icon_line.png",
          altText: "line",
          cssClass: "footer_line",
        },
        {
          name: "twitter",
          href: "http://www.twitter.com/",
          imgSrc: "./photos/icon/icon_twitter.png",
          altText: "twitter",
          cssClass: "footer_twitter",
        },
      ],
    };
  },
  methods: {
    updateFlowerInfo(flower) {
      this.selectedFlower = flower;
    },
  },
  mounted() {
    // 初始設置，例如選擇第一種花卉
    this.selectedFlower = this.flowers[0];
  },
}).mount("#app");
