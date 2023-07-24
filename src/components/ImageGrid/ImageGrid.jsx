import React from "react";
import "./ImageGrid.css";


const ImageGrid = ({images}) => {
  return (
    <section className="grid-container">
      <div className="left">
        <img
          src={images.find((item) => item.position === "left").imageUrl}
          alt="image"
          width={"100%"}
        />
      </div>
      <div className="middle">
        <div className="up">
          <img
            src={images.find((item) => item.position === "up").imageUrl}
            alt="image"
            width={"100%"}
          />
        </div>
        <div className="down">
          <img
            src={images.find((item) => item.position === "down").imageUrl}
            alt="image"
            width={"100%"}
          />
        </div>
      </div>
      <div className="right">
        <img
          src={images.find((item) => item.position === "right").imageUrl}
          alt="image"
          width={"100%"}
        />
      </div>
    </section>
  );
};

export default ImageGrid;
