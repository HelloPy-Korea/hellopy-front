import * as React from "react";

// REVIEW: `href` 속성이 아니라 `onClick` 이벤트를 갖는 케이스가 있을 수도?
interface LogoBannerLinkProps extends React.PropsWithChildren {
  href: string;
  downloadName?: string;
}

export const LogoBannerLink: React.FC<LogoBannerLinkProps> = ({
  children,
  href,
  downloadName,
}) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(href);
      if (!response.ok) {
        throw new Error('Download failed');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = downloadName || "hellopy_logo.png"; 
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      alert('다운로드에 실패했습니다.');
    }
  };

  return (
    <a
      className="self-start border-b border-black text-[#444]"
      onClick={handleDownload}
    >
      {children} →
    </a>
  );
};

export default LogoBannerLink;
