export function parseTitle(string) {
  return string.replaceAll("\u2018", "'").replaceAll("\u2019", "'");
}
