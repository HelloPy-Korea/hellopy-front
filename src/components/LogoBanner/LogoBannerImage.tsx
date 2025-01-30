import * as React from "react";

interface LogoBannerImageProps extends React.PropsWithChildren {
  src: string;
}

export const LogoBannerImage: React.FC<LogoBannerImageProps> = ({ src }) => {
  return <img className="my-3" src={src} />;
};

export default LogoBannerImage;
