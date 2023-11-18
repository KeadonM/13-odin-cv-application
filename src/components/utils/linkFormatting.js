export function ensureHttpProtocol(link) {
  link = link.toLowerCase();

  const httpRegex = /^(http:\/\/|https:\/\/)/;

  if (!httpRegex.test(link)) {
    return 'http://' + link;
  }

  return link;
}

export function ensureLinkedInUrl(input) {
  input = input.toLowerCase();

  // Check if the input contains "linkedin.com/in/"
  if (!input.includes('linkedin.com/in/')) {
    // If it doesn't, check if the input contains "linkedin.com/"
    if (input.includes('linkedin.com/')) {
      // If it does, add "in/" after "linkedin.com/"
      input = input.replace('linkedin.com/', 'linkedin.com/in/');
    } else {
      // If it doesn't contain "linkedin.com/", prepend "https://www.linkedin.com/in/"
      return 'https://www.linkedin.com/in/' + input;
    }
  }

  return ensureHttpProtocol(input);
}
