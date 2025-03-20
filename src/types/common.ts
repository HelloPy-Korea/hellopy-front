export type SelectValue = {
  label: string;
  value: string;
  checked: boolean;
};

export type Manager = {
  email: string;
  github: string;
  id: number;
  linkedin: string;
  name: string;
  photo: string;
  role: string;
};

export type Calendar = {
  calendar_photo: string;
  description: string;
  id: number;
  year_month: string;
};

export type MD = {
  description: string;
  id: number;
  image: string;
  name: string;
};
