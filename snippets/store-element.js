window.__els__ = window.__els__ || {};

function camelCase(string) {
  return string.replace(/[-_]./g, (match) => match.charAt(1).toUpperCase());
}

window.__els__[camelCase($0.tagName.toLowerCase())] = $0;
