export enum SelectedPage {
  Main = "",
  Programs = "programs",
  Appointment = "appointment",
  Blog = "blog",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element; // Allow string or JSX for flexibility
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}