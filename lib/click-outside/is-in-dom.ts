export default function isInDom(obj: { closest: (arg0: string) => any }) {
  return Boolean(obj.closest("body"));
}
