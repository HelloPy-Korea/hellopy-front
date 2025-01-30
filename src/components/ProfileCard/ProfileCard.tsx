import * as React from "react";

import EmailIcon from "./assets/mail.svg?react";
import GithubIcon from "./assets/github.svg?react";
import LinkedinIcon from "./assets/linkedin.svg?react";

interface ProfileCardProps {
  name: string;
  position: string;
  links: {
    email?: string;
    linkedin?: string;
    github?: string;
  };
  image?: string;
}

const ProfileLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
  ...props
}) => {
  if (!href) return null;
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  position,
  links: { email, linkedin, github },
  image,
}) => {
  return (
    <div
      className="w-[255px] h-[386px] flex flex-col border rounded-[28px] p-7 bg-[#d9d9d9] relative"
      style={
        image
          ? {
              backgroundImage: `url(${image})`,
              backgroundPosition: "bottom right",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <p className="text-sm text-[#696969] font-medium">{position}</p>
      <p className="text-base text-black font-semibold">{name}</p>
      <div className="flex gap-2 mt-2.5 fill-[#343434]">
        <ProfileLink href={email} target="_blank" rel="noopener noreferrer">
          <EmailIcon className="w-6 h-6" fill="currentColor" />
        </ProfileLink>
        <ProfileLink href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="w-6 h-6" fill="currentColor" />
        </ProfileLink>
        <ProfileLink href={github} target="_blank" rel="noopener noreferrer">
          <GithubIcon className="w-6 h-6" fill="currentColor" />
        </ProfileLink>
      </div>
    </div>
  );
};
