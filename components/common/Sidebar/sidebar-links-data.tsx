import { ISidebarState } from "@store/reducers/sidebar/sidebar-interface";
import { EducationIcon, ExperienceIcon, HomeIcon, LinkIcon, ProfileIcon, QuestionCircleIcon, TagIcon, TemplateIcon, TranslateIcon } from "@components/Icons";
import { toggleEducationAction, toggleExperienceAction, toggleLanguagesAction, toggleReferrencesAction, togglePersonalAction, toggleSkillAction, toggleTemplatesAction } from "@store/actions/sidebar";

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
export const sidebarBuilderLinks = (state: ISidebarState) => [
  {
    link: undefined,
    icon: TemplateIcon,
    tooltip: "Templates",
    action: toggleTemplatesAction,
    toggled: state.templates,
  },
  {
    link: undefined,
    icon: ProfileIcon,
    tooltip: "Manage personal data",
    action: togglePersonalAction,
    toggled: state.personal,
  },
  {
    link: undefined,
    icon: EducationIcon,
    tooltip: "Manage education data",
    action: toggleEducationAction,
    toggled: state.education,
  },
  {
    link: undefined,
    icon: ExperienceIcon,
    tooltip: "Manage experience data",
    action: toggleExperienceAction,
    toggled: state.experience,
  },
  {
    link: undefined,
    icon: LinkIcon,
    tooltip: "Manage referrence data",
    action: toggleReferrencesAction,
    toggled: state.referrences,
  },
  {
    link: undefined,
    icon: TranslateIcon,
    tooltip: "Manage language data",
    action: toggleLanguagesAction,
    toggled: state.languages,
  },
  {
    link: undefined,
    icon: TagIcon,
    tooltip: "Manage skills data",
    action: toggleSkillAction,
    toggled: state.skills,
  },
];
