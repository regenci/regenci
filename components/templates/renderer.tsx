import { createElement } from "react";
import { Button } from "./components/button";
import { Div } from "./components/div";
import { nanoid } from "nanoid";
import { Ul } from "./components/ul";
import { Li } from "./components/li";

const KeysToComponentsMap = {
  div: Div,
  button: Button,
  ul: Ul,
  li: Li,
} as any;

const stylesMap = (styles: any[]) => {
  const mappedStyles: any = {};
  styles.forEach((style: { name: string | number; value: any }) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

export const templateRenderer = (config: any) => {
  if (typeof KeysToComponentsMap[config.component] !== "undefined") {
    return createElement(
      KeysToComponentsMap[config.component],
      {
        id: config.id,
        key: nanoid(),
        className: config.className ? config.className : null,
        style: config.styles ? stylesMap(config.styles) : null,
      },
      config.children && (typeof config.children === "string" ? config.children : config.children.map((c: any) => templateRenderer(c)))
    );
  }
  return;
};
