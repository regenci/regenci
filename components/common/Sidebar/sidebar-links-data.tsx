import { EducationIcon, ExperienceIcon, HomeIcon, LinkIcon, ProfileIcon, QuestionCircleIcon, TagIcon, TemplateIcon, TranslateIcon } from "@components/Icons";
import { toggleEducationAction, toggleExperienceAction, toggleLanguagesAction, toggleLinksAction, togglePersonalAction, toggleSkillAction, toggleTemplatesAction } from "@store/actions/sidebar";

export const sidebarLinks = [
  {
    link: "/",
    tooltip: "Homepage",
    icon: HomeIcon,
  },
  {
    link: "/templates",
    tooltip: "Templates",
    icon: TemplateIcon,
  },
  {
    link: "/faq",
    tooltip: "Faq",
    icon: QuestionCircleIcon,
  },
];
export const sidebarBuilderLinks = [
  {
    link: undefined,
    icon: TemplateIcon,
    tooltip: "Templates",
    action: toggleTemplatesAction,
  },
  {
    link: undefined,
    icon: ProfileIcon,
    tooltip: "Edit personal data",
    action: togglePersonalAction,
  },
  {
    link: undefined,
    icon: EducationIcon,
    tooltip: "Edit education data",
    action: toggleEducationAction,
  },
  {
    link: undefined,
    icon: ExperienceIcon,
    tooltip: "Edit experience data",
    action: toggleExperienceAction,
  },
  {
    link: undefined,
    icon: LinkIcon,
    tooltip: "Edit referrence data",
    action: toggleLinksAction,
  },
  {
    link: undefined,
    icon: TranslateIcon,
    tooltip: "Edit language data",
    action: toggleLanguagesAction,
  },
  {
    link: undefined,
    icon: TagIcon,
    tooltip: "Edit skills data",
    action: toggleSkillAction,
  },
];
