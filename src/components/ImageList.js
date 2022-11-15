import React from "react";

const ImageList = (props) => {
  const image = props.images.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });
  return <div>{image}</div>;
};

export default ImageList;
