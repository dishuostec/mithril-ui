import m from 'mithril';
import classNames from 'classnames';
import { uiHandleLink } from './LinkHandler.js';

export const LinkWrapFactory = (wrapperClass, tagName = 'div') => {
  if (!tagName) {
    tagName = wrapperClass;
  }

  return {
    view: ({ attrs, children }) => {
      const { onclick } = attrs;
      attrs.class = classNames(wrapperClass, attrs.class);
      attrs.onclick = () => {
        onclick && onclick();

        attrs.to && uiHandleLink(attrs.to, attrs.isExternal);
      };
      return m(tagName, attrs, children);
    },
  };
};
