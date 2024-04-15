import transition from "../transition";

const Home = () => {
  return (
    <div className="home_ctn">
      <section className="hero">
        <h1>
          GRIZ<span id="inverted">Z</span>LY
          <br />
          DESIGNS
        </h1>
        <img src="https://res.cloudinary.com/dtnif6mzm/image/upload/v1713190254/Portfolio%20-%202024/Interior/andalusia1_lsd5dj.jpg" />
      </section>
    </div>
  );
};

export default transition(Home);
