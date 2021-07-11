/* eslint-disable react/prop-types */

import { TWFeatureBarComponent } from "./featurebar-tw-styled";

interface IProps {
  className?: string;
  title: string;
  description?: string;
  hide?: boolean;
  action?: React.ReactNode;
}

const FeatureBar: React.FC<IProps> = ({ title, description, className, action, hide }) => {
  return (
    <TWFeatureBarComponent className={`transform ${className} ${hide ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}>
      <span>{title}</span>
      <span className="block mb-6 md:inline md:mb-0 md:ml-2">{description}</span>
      {action && action}
    </TWFeatureBarComponent>
  );
};

export default FeatureBar;
