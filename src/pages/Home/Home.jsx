import React from "react";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import Background from "../../components/Background/Background";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import {
  grid,
  carousel,
  progressBars,
  loadingDuration,
  texts,
} from "../../data/data";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import CircleLoadingBar from "../../components/CircleLoading/CircleLoading";
import Text from "../../components/Text/Text";
const Home = () => {
  return (
    <div className="home-container">
      {/* <Background />
      <br />
      <Carousel images={carousel} />
      <ImageGrid images={grid} />

      {progressBars.map((bar, index) => (
        <React.Fragment key={index}>
          <ProgressBar percentage={bar.percentage} />
          <br />
        </React.Fragment>
      ))}

      <LoadingBar duration={loadingDuration} />
      <CircleLoadingBar duration={loadingDuration} /> */}
      <Text texts={texts} />
    </div>
  );
};

export default Home;
