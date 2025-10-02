export function stripHtml(html) {
    return html ? html.replace(/<[^>]+>/g, '') : '';
  }
  
  export function truncate(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  }
