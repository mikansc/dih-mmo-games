export function parseQuoteCodes(string) {
  return string.replaceAll("\u2018", "'").replaceAll("\u2019", "'");
}

export function limitText(text, limit = 140) {
  return text.slice(0, limit - 3).concat('...')
}
