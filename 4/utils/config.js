Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    url: "https://api.metalgearjoe.cn",
    cats: {
        household: {
            name: {
                cn: "湿垃圾",
                en: "Household Food Waste"
            },
            intro: {
                cn: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
                en: "refers to perishable biomass waste. Including leftovers, melon kernels, flower green plants, meat broken bones, expired food, kitchen waste and so on."
            },
            requirements: {
                cn: [ "纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的湿垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或干垃圾容器" ],
                en: [ "Pure liquid food waste, such as milk, should be poured directly into the drain.", "Wet garbage with packaging materials should be taken out after sorting, and the packaging should be placed in the corresponding recyclable container or dry garbage container." ]
            },
            color: {
                r: 149,
                g: 108,
                b: 88
            },
            imageSrc: "/images/household_food_waste_icon.png"
        },
        residual: {
            name: {
                cn: "干垃圾",
                en: "Residual Waste"
            },
            intro: {
                cn: "是指除有害垃圾、可回收物、湿垃圾以外的其他生活废弃物。",
                en: "refers to other domestic wastes other than hazardous waste, recyclables, and wet garbage."
            },
            requirements: {
                cn: [ "尽量沥干水分", "难以辨识类别的生活垃圾投入干垃圾容器内" ],
                en: [ "Drain as much as possible.", "Throw hard-to-identify categories of domestic waste into dry garbage containers." ]
            },
            color: {
                r: 45,
                g: 41,
                b: 38
            },
            imageSrc: "../../images/residual_waste_icon.png"
        },
        recyclable: {
            name: {
                cn: "可回收物",
                en: "Recyclable Waste"
            },
            intro: {
                cn: "是指适宜回收和可循环再利用的废弃物。主要包括废玻璃、废金属、废塑料、废纸张、废织物等。",
                en: "refers to waste that is suitable for recycling. It mainly includes waste glass, scrap metal, waste plastics, waste paper, waste fabrics, etc."
            },
            requirements: {
                cn: [ "轻投轻放", "清洁干燥，避免污染", "废纸尽量平整", "立体包装请清空内容物，清洁后压扁投放", "有尖锐边角的，应包裹后投放" ],
                en: [ "Throw gently and put gently.", "Clean and dry to avoid pollution.", "Waste paper as flat as possible.", "Please empty the contents, clean and flatten volumetric packaging.", "Items with sharp corners should be packaged before throwing." ]
            },
            color: {
                r: 0,
                g: 60,
                b: 113
            },
            imageSrc: "../../images/recyclable_waste_icon.png"
        },
        hazardous: {
            name: {
                cn: "有害垃圾",
                en: "Hazardous Waste"
            },
            intro: {
                cn: "是指对人体健康或者自然环境造成直接或者潜在危害的零星废弃物，单位集中产生的除外。主要包括废电池、废灯管、废药品、废油漆桶等。",
                en: "refers to sporadic waste that directly or potentially harms human health or the natural environment. It mainly includes waste batteries, waste lamps, waste drugs, waste paint buckets, etc."
            },
            requirements: {
                cn: [ "充电电池、纽扣电池、蓄电池投放时请注意轻放", "油漆桶、杀虫剂如有残留请密闭后投放", "荧光灯、节能灯易破损请连带包装或包裹后轻放", "废药品及其包装连带包装一并投放" ],
                en: [ "Rechargeable batteries, button batteries, and storage batteries should be put gently.", "Paint buckets and pesticides with remaining should be sealed before throwing.", "Fluorescent lamps and energy-saving lamps are easily damaged. Please pack and wrap them before throwing.", "Waste medicines are throwed with packaging." ]
            },
            color: {
                r: 249,
                g: 66,
                b: 58
            },
            imageSrc: "../../images/hazardous_waste_icon.png"
        },
        noneHousehold: {
            name: {
                cn: "不属于日常生活垃圾",
                en: "None-household Waste"
            },
            color: {
                r: 255,
                g: 255,
                b: 255
            }
        },
        decoration: {
            name: {
                cn: "装修垃圾，请咨询物业",
                en: "Decoration Waste, please consult property management"
            },
            color: {
                r: 255,
                g: 255,
                b: 255
            }
        },
        bulky: {
            name: {
                cn: "大件垃圾，请咨询物业",
                en: "Bulky Waste, please consult property management"
            },
            color: {
                r: 255,
                g: 255,
                b: 255
            }
        },
        kitchen1: {
            name: {
                cn: "厨余垃圾",
                en: "Kitchen Waste"
            },
            intro: {
                cn: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
                en: "refers to perishable biomass waste. Including leftovers, melon kernels, flower green plants, meat broken bones, expired food, kitchen waste and so on."
            },
            requirements: {
                cn: [ "纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的厨余垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或其他垃圾容器" ],
                en: [ "Pure liquid food waste, such as milk, should be poured directly into the drain.", "Kitchen waste with packaging materials should be taken out after sorting, and the packaging should be placed in the corresponding recyclable container or other waste container." ]
            },
            color: {
                r: 0,
                g: 111,
                b: 98
            },
            imageSrc: "../../images/kitchen_waste_1_icon.png"
        },
        kitchen2: {
            name: {
                cn: "餐厨垃圾",
                en: "Kitchen Waste"
            },
            intro: {
                cn: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
                en: "refers to perishable biomass waste. Including leftovers, melon kernels, flower green plants, meat broken bones, expired food, kitchen waste and so on."
            },
            requirements: {
                cn: [ "纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的餐厨垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或其他垃圾容器" ],
                en: [ "Pure liquid food waste, such as milk, should be poured directly into the drain.", "Kitchen waste with packaging materials should be taken out after sorting, and the packaging should be placed in the corresponding recyclable container or other waste container." ]
            },
            color: {
                r: 0,
                g: 111,
                b: 98
            },
            imageSrc: "../../images/kitchen_waste_2_icon.png"
        },
        perishable: {
            name: {
                cn: "易腐垃圾",
                en: "Perishable Waste"
            },
            intro: {
                cn: "是指易腐的生物质废弃物。包括剩菜剩饭、瓜皮果核、花卉绿植、肉类碎骨、过期食品、餐厨垃圾等。",
                en: "refers to perishable biomass waste. Including leftovers, melon kernels, flower green plants, meat broken bones, expired food, kitchen waste and so on."
            },
            requirements: {
                cn: [ "纯流质的食物垃圾，如牛奶等，应直接倒进下水口", "有包装物的易腐垃圾应将包装物取出后分类投放，包装物请投放到对应的可回收物容器或其他垃圾容器" ],
                en: [ "Pure liquid food waste, such as milk, should be poured directly into the drain.", "Perishable waste with packaging materials should be taken out after sorting, and the packaging should be placed in the corresponding recyclable container or other waste container." ]
            },
            color: {
                r: 0,
                g: 111,
                b: 98
            },
            imageSrc: "../../images/perishable_waste_icon.png"
        },
        other: {
            name: {
                cn: "其他垃圾",
                en: "Other Waste"
            },
            intro: {
                cn: "是指除有害垃圾、可回收物、厨余（餐厨）垃圾以外的其他生活废弃物。",
                en: "refers to other domestic wastes other than hazardous waste, recyclables, and kitchen waste."
            },
            requirements: {
                cn: [ "尽量沥干水分", "难以辨识类别的生活垃圾投入其他垃圾容器内" ],
                en: [ "Drain as much as possible.", "Throw hard-to-identify categories of domestic waste into other waste containers." ]
            },
            color: {
                r: 255,
                g: 163,
                b: 0
            },
            imageSrc: "../../images/other_waste_icon.png"
        }
    },
    cities: {
        shanghai: {
            key: "shanghai",
            name: {
                cn: "上海",
                en: "Shanghai"
            },
            cats: [ "household", "residual", "recyclable", "hazardous" ],
            i: "sh"
        },
        xian: {
            key: "xian",
            name: {
                cn: "西安",
                en: "Xi'an"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "xa"
        },
        chengdu: {
            key: "chengdu",
            name: {
                cn: "成都",
                en: "Chengdu"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "cd"
        },
        guangzhou: {
            key: "guangzhou",
            name: {
                cn: "广州",
                en: "Guangzhou"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "gz"
        },
        ningbo: {
            key: "ningbo",
            name: {
                cn: "宁波",
                en: "Ningbo"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "nb"
        },
        xiamen: {
            key: "xiamen",
            name: {
                cn: "厦门",
                en: "Xiamen"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "xm"
        },
        yichun: {
            key: "yichun",
            name: {
                cn: "宜春",
                en: "Yichun"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "yc"
        },
        taiyuan: {
            key: "taiyuan",
            name: {
                cn: "太原",
                en: "Taiyuan"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "ty"
        },
        hangzhou: {
            key: "hangzhou",
            name: {
                cn: "杭州",
                en: "Hangzhou"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "hz"
        },
        chongqing: {
            key: "chongqing",
            name: {
                cn: "重庆",
                en: "Chongqing"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "cq"
        },
        shijiazhuang: {
            key: "shijiazhuang",
            name: {
                cn: "石家庄",
                en: "Shijiazhuang"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "sjz"
        },
        handan: {
            key: "handan",
            name: {
                cn: "邯郸",
                en: "Handan"
            },
            cats: [ "household", "residual", "recyclable", "hazardous" ],
            i: "hd"
        },
        shenyang: {
            key: "shenyang",
            name: {
                cn: "沈阳",
                en: "Shenyang"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "sy"
        },
        dalian: {
            key: "dalian",
            name: {
                cn: "大连",
                en: "Dalian"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "dl"
        },
        changchun: {
            key: "changchun",
            name: {
                cn: "长春",
                en: "Changchun"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "cc"
        },
        harbin: {
            key: "harbin",
            name: {
                cn: "哈尔滨",
                en: "Harbin"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "heb"
        },
        nanjing: {
            key: "nanjing",
            name: {
                cn: "南京",
                en: "Nanjing"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "nj"
        },
        suzhou: {
            key: "suzhou",
            name: {
                cn: "苏州",
                en: "Suzhou"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "sz"
        },
        hefei: {
            key: "hefei",
            name: {
                cn: "合肥",
                en: "Hefei"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "hf"
        },
        tongling: {
            key: "tongling",
            name: {
                cn: "铜陵",
                en: "Tongling"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "tl"
        },
        fuzhou: {
            key: "fuzhou",
            name: {
                cn: "福州",
                en: "Fuzhou"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "fz"
        },
        jinan: {
            key: "jinan",
            name: {
                cn: "济南",
                en: "Jinan"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "jn"
        },
        taian: {
            key: "taian",
            name: {
                cn: "泰安",
                en: "Taian"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "ta"
        },
        qingdao: {
            key: "qingdao",
            name: {
                cn: "青岛",
                en: "Qingdao"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "qd"
        },
        yichang: {
            key: "yichang",
            name: {
                cn: "宜昌",
                en: "Yichang"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "yc"
        },
        changsha: {
            key: "changsha",
            name: {
                cn: "长沙",
                en: "Changsha"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "cs"
        },
        shenzhen: {
            key: "shenzhen",
            name: {
                cn: "深圳",
                en: "Shenzhen"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "sz"
        },
        nanning: {
            key: "nanning",
            name: {
                cn: "南宁",
                en: "Nanning"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "nn"
        },
        haikou: {
            key: "haikou",
            name: {
                cn: "海口",
                en: "Haikou"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "hk"
        },
        guangyuan: {
            key: "guangyuan",
            name: {
                cn: "广元",
                en: "Guangyuan"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "gy"
        },
        deyang: {
            key: "deyang",
            name: {
                cn: "德阳",
                en: "Deyang"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "dy"
        },
        guiyang: {
            key: "guiyang",
            name: {
                cn: "贵阳",
                en: "Guiyang"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "gy"
        },
        kunming: {
            key: "kunming",
            name: {
                cn: "昆明",
                en: "Kunming"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "km"
        },
        lhasa: {
            key: "lhasa",
            name: {
                cn: "拉萨",
                en: "Lhasa"
            },
            cats: [ "kitchen2", "other", "recyclable", "hazardous" ],
            i: "ls"
        },
        xianyang: {
            key: "xianyang",
            name: {
                cn: "咸阳",
                en: "Xianyang"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "xy"
        },
        lanzhou: {
            key: "lanzhou",
            name: {
                cn: "兰州",
                en: "Lanzhou"
            },
            cats: [ "perishable", "other", "recyclable", "hazardous" ],
            i: "lz"
        },
        xining: {
            key: "xining",
            name: {
                cn: "西宁",
                en: "Xining"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "xn"
        },
        yinchuan: {
            key: "yinchuan",
            name: {
                cn: "银川",
                en: "Yinchuan"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "yc"
        },
        beijing: {
            key: "beijing",
            name: {
                cn: "北京",
                en: "Beijing"
            },
            cats: [ "kitchen1", "other", "recyclable", "hazardous" ],
            i: "bj"
        }
    }
};