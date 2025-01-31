import * as React from "react";

// REVIEW: `href` 속성이 아니라 `onClick` 이벤트를 갖는 케이스가 있을 수도?
interface LogoBannerLinkProps extends React.PropsWithChildren {
  href: string;
}

export const LogoBannerLink: React.FC<LogoBannerLinkProps> = ({
  children,
  href,
}) => {
  return (
    <a className="self-start border-b border-black text-[#444]" href={href}>
      {children} →
    </a>
  );
};

export default LogoBannerLink;
