import m from 'mithril';
import classNames from 'classnames';

export const SimpleWrapFactory = (wrapperClass, tagName = 'div') => {
  if (!tagName) {
    tagName = wrapperClass;
  }

  return {
    view: ({ attrs, children }) => {
      attrs.class = classNames(wrapperClass, attrs.class);
      return m(tagName, attrs, children);
    },
  };
};
