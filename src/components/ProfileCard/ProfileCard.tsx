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
      className="relative flex h-[386px] w-[255px] flex-col rounded-[28px] border bg-[#d9d9d9] p-7"
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
      <p className="text-sm font-medium text-[#696969]">{position}</p>
      <p className="text-base font-semibold text-black">{name}</p>
      <div className="mt-2.5 flex gap-2 fill-[#343434]">
        <ProfileLink href={email} target="_blank" rel="noopener noreferrer">
          <EmailIcon className="h-6 w-6" fill="currentColor" />
        </ProfileLink>
        <ProfileLink href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="h-6 w-6" fill="currentColor" />
        </ProfileLink>
        <ProfileLink href={github} target="_blank" rel="noopener noreferrer">
          <GithubIcon className="h-6 w-6" fill="currentColor" />
        </ProfileLink>
      </div>
    </div>
  );
};
