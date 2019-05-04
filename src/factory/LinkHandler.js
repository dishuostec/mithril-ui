import m from 'mithril';

export const defaultUiLinkHandler = (link, isExternal) => {
  m.route.set(link);
  window.scroll(0, 0);
  return true;
};

let handler = defaultUiLinkHandler;

export function setUiLinkHandler(newHandler) {
  handler = newHandler;
}

export function uiHandleLink(link, isExternal) {
  return handler && handler(link, isExternal);
}

