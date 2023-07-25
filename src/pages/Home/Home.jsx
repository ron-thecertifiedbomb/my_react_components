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
import LoadingTitle from "../../components/LoadingTitle/TextShuffle";
import { useState } from "react";
import TextShuffle from "../../components/LoadingTitle/TextShuffle";
import Fetcher from "../../components/Fetcher/Fetcher";
import ReactQuery from "../../components/ReactQuery/ReactQuery";
import CombineReactQuery from "../../components/ReactQuery/CombineReactQuery";

import FetchProductList from '../../components/ReactQuery/FetchProductList'
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
const Home = () => {

  const demoTexts = ['First demo text', 'New longer line, looks good huh?', 'Lorem ipsum the Fox is beautiful'];
  const [index, setIndex] = useState(-1);


  return (
    <div className="home-container">
      {/* <Background images={carousel} />
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
      <CircleLoadingBar duration={loadingDuration} />
      <Text texts={texts} /> */}
   {/* <TextShuffle  /> */}
   {/* <Fetcher /> */}
   {/* <ReactQuery /> */}
<ThemeSelector />
<LanguageSelector />
    </div>
  );
};

export default Home;
