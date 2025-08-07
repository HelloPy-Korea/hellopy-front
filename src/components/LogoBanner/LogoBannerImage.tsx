import * as React from "react";

interface LogoBannerImageProps extends React.PropsWithChildren {
  src: string;
}

export const LogoBannerImage: React.FC<LogoBannerImageProps> = ({ src }) => {
  return (
    <div className="my-3 aspect-[480/250] w-full overflow-hidden rounded-lg">
      <img 
        className="h-full w-full object-contain" 
        src={src} 
        alt="Logo"
      />
    </div>
  );
};

export default LogoBannerImage;
