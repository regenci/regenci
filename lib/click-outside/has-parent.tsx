import isInDOM from "./is-in-dom";

export default function hasParent(element: any, root: { contains: (arg0: any) => any } | undefined) {
  return root && root.contains(element) && isInDOM(element);
}
