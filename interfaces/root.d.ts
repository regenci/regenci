import { ISidebarState } from "@store/reducers/sidebar/sidebar-interface";
import { ITemplatesState } from "@store/reducers/templates/template-interface";
export interface IRootState {
  sidebar: ISidebarState;
  templates: ITemplatesState;
}
