import Header from "./components/Header";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__section main-section">
          <h2 className="title">上海昂敏智能技术有限公司</h2>
          <p className="description">
            上海昂敏智能技术有限公司具有多年成熟的机器视觉行业技术经验，以客户需求为导向，为客户提供国际水准的嵌入式智能机器视觉产品及技术服务。
            我们的产品涵盖了从嵌入式视觉基本组件、智能相机、机器视觉软件等，直至整个智能产线的完整视觉解决方案。
            我们凭借多年的系
            contact-us-btn统开发和非标设计经验，服务于金属加工、汽车及零部件制造、机器人系统集成、电子/半导体、食品包装及物流等诸多行业。
            源于德国的可靠硬件及软件技术，为客户提供世界前沿的产品与技术服务。
          </p>

          <div className="btn-group">
            <div className="curly-container contact-us-btn">联系我们</div>
            <div className="curly-container check-more-product-btn">
              查看商品
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
