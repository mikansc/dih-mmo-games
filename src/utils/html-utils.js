const tagBody = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*";

const tagOrComment = new RegExp(
  "<(?:"
  + "!--(?:(?:-*[^->])*--+|-?)"
  + "|script\\b" + tagBody + ">[\\s\\S]*?</script\\s*"
  + "|style\\b" + tagBody + ">[\\s\\S]*?</style\\s*"
  + "|/?[a-z]"
  + tagBody
  + ")>",
  "gi");

export function removeTags(html) {
  let oldHtml;
  do {
    oldHtml = html;
    html = html.replaceAll(tagOrComment, "");
  } while (html !== oldHtml);
  return html.replaceAll(/</g, "&lt;");
}
