import React from 'react';

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = React.useState(src);

  const handleError = () => {
    setCurrentSrc('/assets/icons/placeholder.webp');
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
