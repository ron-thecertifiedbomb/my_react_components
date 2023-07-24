import React from 'react'
import ImageOne from "../../assets/img/Frame 527.png";
import BackgoundImage from "../../assets/img/pexels-yaroslav-shuraev-8845070 (1).png";
import PicOne from '../../assets/img/Frame 581 (2).png';
import PicTwo from '../../assets/img/Frame 581 (2).png';
import PicThree from '../../assets/img/Frame 581 (2).png';
import './Gallery.css'

const Gallery = () => {
    
  return (
    <section className="gallery">
        
    <div className="thumbnail">
      <img src={BackgoundImage} alt="" width={"100%"}></img>
    </div>
    <div className="thumbnail-left">
      <div className="column">
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
      </div>
      <div className="column">
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
        <div className="profile">
          {" "}
          <img src={PicThree} alt="" width={"100%"}></img>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Gallery