import * as React from "react";

// REVIEW: `href` 속성이 아니라 `onClick` 이벤트를 갖는 케이스가 있을 수도?
interface LogoBannerLinkProps extends React.PropsWithChildren {
  href: string;
}

export const LogoBannerLink: React.FC<LogoBannerLinkProps> = ({
  children,
  href,
}) => {
  const handleDownload = async () => {
    const response = await fetch(href, { mode: "cors" });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "downloaded_image.jpg"; // 저장될 파일명
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <a
      className="self-start border-b border-black text-[#444]"
      href={href}
      onClick={handleDownload}
    >
      {children} →
    </a>
  );
};

export default LogoBannerLink;
