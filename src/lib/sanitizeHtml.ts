export function stripInlineStyles(html: string) {
  return html.replace(/ style="[^"]*"/g, '');
}
