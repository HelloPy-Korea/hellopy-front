import {useNavigate} from "react-router-dom";

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
  // const navigate = useNavigate();

    const navigate = useNavigate();

    const redirectToUrl = () => {
        if(!buttonUrl || buttonUrl.trim().length===0) {
            return;
        }
        navigate(buttonUrl)
    }
    //navigate(buttonUrl)
  };

  return (
    <div
      className="relative h-[626px] w-[1920px] bg-[#fbf6ff] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className="absolute inset-0 bg-black/10"></div>*/}

      <div
        className={`absolute top-[121px] flex flex-col gap-40 text-[#2c003c] ${textPosition === "left" ? "left-[322px]" : "right-[322px] text-right"}`}
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            {subtitle && (
              <span className="text-xl font-semibold leading-[30px] text-[#bc1df2]">
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
            className={`border-b border-[#2c003c] py-1.5 text-base font-medium leading-tight ${textPosition === "left" ? "self-start" : "self-end"}`}
            onClick={redirectToUrl}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};
