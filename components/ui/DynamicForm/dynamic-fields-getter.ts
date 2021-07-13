import { educationForm } from "@components/builder/drawers/Education/EducationForm";
import { experienceForm } from "@components/builder/drawers/Experience/ExperienceForm";
import { languagesForm } from "@components/builder/drawers/Languages/LanguagesForm";
import { referrencesForm } from "@components/builder/drawers/Referrences/ReferrencesForm";

export type formNameType = "education" | "personal" | "experience" | "referrences" | "languages";

export const getDynamicFormFields = (key: React.Key | null | undefined, fieldKey: any, name: string | number, rest: any, remove: (arg0: any) => any, value: formNameType) => [
  value === "education"
    ? educationForm(key, fieldKey, name, rest, remove)
    : value === "experience"
    ? experienceForm(key, fieldKey, name, rest, remove)
    : value === "referrences"
    ? referrencesForm(key, fieldKey, name, rest, remove)
    : value === "languages"
    ? languagesForm(key, fieldKey, name, rest, remove)
    : null,
];
