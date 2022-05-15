import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    fps_limit: 120,
    background: {
      color: "#1e1e1e"
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        out_mode: "out",
        speed: 1
      },
      number: {
        density: { enable: true, value_area: 800 },
        value: 80
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 3
      }
    }
  };
  
  return (
    <>
      <Particles 
        id="tsparticles" 
        init={particlesInit} 
        loaded={particlesLoaded}
        options={options}
      />
      <div id="appBody">
        <div className="content">
          <h2 class="greeting">Hello!</h2>
          <p>Welcome to zodia.dev, my website. As you can see, there's not much here right now.</p>
          <p>I am working on this! I am actively learning web development & will be putting effort towards this site after my professional one is done. :3</p>
          <p>In the meantime, you can follow me on my social medias:</p>
          <div className="links">
            <a href="https://twitter.com/zodinya" title="twitter">
              <i className="fab fa-fw fa-twitter" />
            </a>
            <a href="https://zodinya.tumblr.com/" title="tumblr">
              <i className="fab fa-fw fa-tumblr " />
            </a>
            <a href="https://toyhou.se/zodia" title="toyhou.se">
              <i className="fas fa-fw fa-house-chimney" />
            </a>
            <a href="https://ko-fi.com/zodiadragon" title="ko-fi">
              <i className="fas fa-fw fa-mug-hot" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
