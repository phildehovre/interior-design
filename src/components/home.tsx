import "./home.css";
import { unsortedImages } from "../assets/images";
import transition from "../transition";
import { motion } from "framer-motion";

const Home = () => {
  const fadeInAnimationVariants = {
    initial: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? 100 : -100,
    }),
    animate: () => ({
      opacity: 1,
      x: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    }),
  };

  const groupedImages = (array: { src: string; description: string }[]) => {
    const images = [];
    for (let i = 0; i < array.length; i += 2) {
      images.push([array[i], array[i + 1]]);
    }
    return images;
  };

  const renderImages = () => {
    let images = groupedImages(unsortedImages);
    return images.map((group, i) => {
      const [image1, image2] = group;
      var isEven = i % 2 === 0;
      return (
        <motion.div
          className="image_row"
          key={`row_${i}`}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={isEven}
          viewport={{
            once: true,
          }}
        >
          <div
            key={image1.src}
            className={`image_ctn ${i % 2 === 0 ? "wide" : ""}`}
            style={{ backgroundImage: `url(${image1.src})` }}
          ></div>
          {image2 && (
            <div
              key={image2.src}
              className={`image_ctn ${(i + 1) % 2 === 0 ? "wide" : ""}`}
              style={{ backgroundImage: `url(${image2.src})` }}
            ></div>
          )}
        </motion.div>
      );
    });
  };

  return (
    <div className="home_ctn">
      <section className="hero">
        <img src="https://res.cloudinary.com/dtnif6mzm/image/upload/v1713190254/Portfolio%20-%202024/Interior/andalusia1_lsd5dj.jpg" />
      </section>
      <section className="home_gallery_grid">{renderImages()}</section>
    </div>
  );
};

export default transition(Home);
