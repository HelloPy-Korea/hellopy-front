import { useNavigate } from "react-router-dom";

import { Container } from "@/components/Container";

interface HomeCardProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  textPosition?: "left" | "right";
  buttonUrl?: string;
}

export const HomeCard = ({
  backgroundImage,
  title,
  subtitle,
  description,
  buttonText,
  textPosition = "left",
  buttonUrl,
}: HomeCardProps) => {
  const navigate = useNavigate();

  const redirectToUrl = () => {
    if (!buttonUrl || buttonUrl.trim().length === 0) {
      return;
    }
    if (buttonUrl === "none") {
      alert("추후 제공될 예정입니다!");
      return;
    }
    if (buttonUrl.includes("http")) {
      window.open(buttonUrl);
    } else {
      navigate(buttonUrl);
    }
  };

  return (
    <div
      className="flex h-[626px] bg-[#fbf6ff] md:bg-cover md:bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className="absolute inset-0 bg-black/10"></div>*/}

      <Container
        className={`top-[121px] my-auto flex flex-col gap-40 px-4 text-black ${textPosition === "left" ? "" : "text-right"}`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            {subtitle && (
              <span className="text-xl font-semibold leading-[30px] text-hellopy-purple-200">
                {subtitle}
              </span>
            )}
            <h1 className="text-[32px] font-semibold">{title}</h1>
          </div>
          {description && (
            <p
              className="text-lg font-light leading-[27px]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

        {buttonText && (
          <button
            className={`border-b border-black py-1.5 text-base font-medium leading-tight ${textPosition === "left" ? "self-start" : "self-end"}`}
            onClick={redirectToUrl}
          >
            {buttonText}
          </button>
        )}
      </Container>
    </div>
  );
};
