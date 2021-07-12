import educationForm from "@components/builder/drawers/Education/EducationForm";
import experienceForm from "@components/builder/drawers/Experience/ExperienceForm";

export type formNameType = "education" | "personal" | "experience" | "links" | "skills" | "languages";

export const getDynamicFormFields = (key: React.Key | null | undefined, fieldKey: any, name: string | number, rest: any, remove: (arg0: any) => any, value: formNameType) => [
  value === "education" ? educationForm(key, fieldKey, name, rest, remove) : value === "experience" ? experienceForm(key, fieldKey, name, rest, remove) : null,
];
