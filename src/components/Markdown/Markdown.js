import m from 'mithril';
import { Converter } from 'showdown';
import classNames from 'classnames';
import './Markdown.scss';

const converter = new Converter({
  noHeaderId: true,
  strikethrough: true,
  tables: true,
  tasklists: true,
});

const Markdown = (initialVnode) => {
  let markdown;

  const update = (content) => {
    markdown = content
      ? converter.makeHtml(content)
      : null;
  };

  return {
    oninit: (vnode) => {
      update(vnode.attrs.content);
    },
    onbeforeupdate: (newVnode, oldVnode) => {
      if (newVnode.attrs.content === oldVnode.attrs.content) {
        return false;
      }

      update(newVnode.attrs.content);
    },
    onbeforeremove: (vnode) => {
      markdown = null;
    },
    view: function ({ attrs: { content, class: className, ...props } }) {
      return <div
        {...props}
        class={classNames('markdown', className)}>
        {m.trust(markdown)}
      </div>;
    },
  };
};

export default Markdown;
