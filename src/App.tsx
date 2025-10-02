import Header from "./components/Header";
import Section from "./components/Section";
import CardGroup from "./components/CardGroup";
import styles from "./App.module.scss";
import { Button, Card } from "@heroui/react";

const productCategoryList = [
  {
    name: "机器视觉软件",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/f257a8ee0642c244e02f56515af62b9f.png",
  },
  {
    name: "面阵相机",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/580de96df4591afeb9fa1050129fe754.png",
  },
  {
    name: "3D 激光相机",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/65394b7c201fe42a4228f2a4363de740.png",
  },
  {
    name: "IOSS 读码器",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/05015390d5cc10b0b696817c9bfa894b.png",
  },
  {
    name: "摄像模组",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/18af361ef9e33e05f75db7018145ad1a.png",
  },
  {
    name: "视觉组态",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/2f32b91ffb13886c7e66e1b1ff95722c.png",
  },
  {
    name: "镜头",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/ebc53e3da700e0c2e770868b0b4dbaec.png",
  },
  {
    name: "光源",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/5fbf35f1d0f4f05e9ead664345701e7b.png",
  },
];

const product_intro_list = [
  {
    name: "AI-MASTER机器视觉软件,电气工程师的机器视觉软件,图形化拖拽式编程,丰富的算子及应用",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20231108/2474a49131c214e2717240a539054b1c.png",
  },
  {
    name: "折弯机角度测量系统,面向OEM的即插即用解决方案,通过实时角度测量提升折弯精度",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20250318/26a49407b9002812eb02be0249ba1d85.png",
  },
  {
    name: "WID120高速晶圆读码器,读取晶圆ID,快速可靠解码DPM直接标记的晶圆代码,德国技术,质优成熟应用",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20250318/f51144a751b2d4b00cd26986dfbb2fda.png",
  },
  {
    name: "IOSS DMR410/420智能读码器,可自主学习,性能可靠,设计紧凑,DPM读码器",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20250318/6f1e5d7079700e30725d075f3cd5dbad.png",
  },
  {
    name: "M-BWR200批量晶圆ID读码器,WID120晶圆读码器,直观便于使用,半导体行业标准用户界面",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20250318/f5fb372c1ce79f3ce9a3d361ef3d38d7.png",
  },
  {
    name: "VC MIPI 摄像模组,尺寸精巧,超紧凑设计,德国制造,工业级质优品质,免费提供驱动",
    imageSrc:
      "https://img03.71360.com/w3/77om0g/20250318/1016365073251d3d81a2ddcdb7ec5b62.png",
  },
];

const cardGroupData = [
  {
    title: "多软件平台开发的智能相机系列",
    content: [
      "高效的多核 ARM 平台，可靠的 Linux 操作系统，无宕机",
      "可使用含 300 多种函数的 VC Lib 计算机视觉库开发",
      "可使用 OPEN CV 和 HALCON 软件进行嵌入式开发",
      "可使用一站式视觉平台 AI",
      "Master 机器视觉软件进行视觉编程。",
    ],
  },
  {
    title: "IOSS专业读码器系列",
    content: [
      "通用型智能读码器",
      "UDI医疗代码读码器",
      "可使用 OPEN CV 和 HALCON 软件进行嵌入式开发",
      "高速晶圆ID读码器、曝光掩膜读码器等半导体行业读码器",
    ],
  },
  {
    title: "AI-Master 机器视觉软件平台",
    content: [
      "图形化，拖放式编程，可快速入门",
      "可编辑用户界面",
      "可以用来做复杂的逻辑以及运算。 支持自建脚本。",
      "2D、3D、热成像、高光谱、深度学习等 200 多个算子（ 60 多个 3D 算子）及专业化解决方案包， 只需一次安装、只需一个 Lisence ",
      "兼容多种系统平台：可在 ARM、x86、x64 和 MIPS 上运行",
      "支持USB 2.0、3.0 、GigE 千兆以太网、GenICam 兼容相机 、FireWire 、Camera Link 、CoaXPress 、RS232等多种硬件接口",
      "丰富的案例可供参考，让项目开发变得无比轻松",
    ],
  },
];

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <Section backgroundImage="https://static.wixstatic.com/media/c837a6_12191520cc14491e89ef1e75e5bbf40d~mv2.jpg/v1/fill/w_2541,h_3667,al_c,q_90,enc_avif,quality_auto/c837a6_12191520cc14491e89ef1e75e5bbf40d~mv2.jpg">
          <Header className={styles.header} />

          <h2 className={"title_lg"}>
            AI-Smart 机器视觉新技术 —— 让机器视觉
            “专业”、“智能”、“精巧”、又“简单”！
          </h2>

          <p className={"description_lg"}>
            上海昂敏智能技术有限公司具有多年成熟的机器视觉行业技术经验，以客户需求为导向，为客户提供国际水准的嵌入式智能机器视觉产品及技术服务。
            我们的产品涵盖了从嵌入式视觉基本组件、智能相机、机器视觉软件等，直至整个智能产线的完整视觉解决方案。
            我们凭借多年的系统开发和非标设计经验，服务于金属加工、汽车及零部件制造、机器人系统集成、电子/半导体、食品包装及物流等诸多行业。
            源于德国的可靠硬件及软件技术，为客户提供世界前沿的产品与技术服务。
          </p>

          <div className={styles.btn_group}>
            <Button className="main_btn" radius="full" size="lg">
              联系我们
            </Button>
            <Button className="second_btn" radius="full" size="lg">
              查看商品
            </Button>
          </div>
        </Section>

        <Section
          height="600px"
          backgroundVideo="https://video.wixstatic.com/video/c837a6_6459a5bb7e28481a83ac6e09537ee8a9/1080p/mp4/file.mp4"
          title="智能产线案例"
        >
          <div className={"title_lg"}>
            原材料 3D 无序抓取 - 精细定位 - 智能辅助加工 - 质量检测 - 身份识别
          </div>

          <Button className="main_btn" radius="full" size="lg">
            查看更多
          </Button>
        </Section>

        <Section title="产品类别">
          <div className={styles.product_category_card_list}>
            {productCategoryList.map((item) => (
              <Card
                isPressable
                className={styles.product_category_card}
                key={item.name}
              >
                <img
                  className={styles.product_category_card_image}
                  alt={item.name}
                  src={item.imageSrc}
                  width={"100%"}
                  height={"100%"}
                />

                <div className={styles.product_category_card_footer}>
                  <h4 className="font-medium">{item.name}</h4>
                </div>
              </Card>
            ))}
          </div>

          <div className={styles.product_category_card_intro_list}>
            {product_intro_list.map((product) => (
              <Card
                isPressable
                className={styles.product_category_card}
                key={product.name}
              >
                <img
                  className={styles.product_category_card_image}
                  alt={product.name}
                  src={product.imageSrc}
                  width={"100%"}
                  height={"100%"}
                />

                <div className={styles.product_category_card_footer}>
                  <h4 className="font-medium">{product.name}</h4>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          title="嵌入式视觉"
          backgroundImage="https://static.wixstatic.com/media/c837a6_bca33a004e244266ab6b3cebff8ff492~mv2.png/v1/fill/w_3298,h_1430,al_tr,q_95,enc_avif,quality_auto/c837a6_bca33a004e244266ab6b3cebff8ff492~mv2.png"
          className="bg-zinc-950"
        >
          <div className={"title_lg"}>昂敏智能嵌入式机器视觉</div>

          <p className="text-white">
            昂敏智能技术有限公司为客户提供完整的机器视觉解决方案，产品完整地涵盖了从嵌入式视觉基本组件、智能相机，直至整个智能产线的完整视觉解决方案。其中，焊缝引导、焊缝跟踪、金属加工定位、折弯机角度测量系统等已发展为成熟应用。
            我们的服务可满足各个行业及市场的需求。
          </p>

          <CardGroup
            cards={cardGroupData}
            className={styles.section_view_card_group}
          />

          <Button className="main_btn" radius="full" size="lg">
            查看更多
          </Button>
        </Section>

        <Section title="联系我们" height="250px">
          <div className="flex flex-col gap-8 text-white">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold whitespace-nowrap">
                      销售电话：
                    </span>
                    <span>13381771810</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold whitespace-nowrap">
                      市场部电话：
                    </span>
                    <span>13120681156</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold whitespace-nowrap">
                      售前支持微信号：
                    </span>
                    <span>AI-Smart-Shanghai</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold whitespace-nowrap">
                      邮箱：
                    </span>
                    <span>info@AI-Smart.com.cn</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-semibold whitespace-nowrap">
                      地址：
                    </span>
                    <span>
                      上海市嘉定区招贤路1181号（上海张江国家自主创新示范区嘉定园）
                      <br />5 幢 311-312 室
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
