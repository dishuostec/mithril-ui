import m from 'mithril';
import classNames from 'classnames';
import Inputmask from 'inputmask';
import './Input.scss';

export const InputMask = {
  oncreate: (vnode) => {
    if (vnode.attrs.mask) {
      Inputmask(vnode.attrs.mask).mask(vnode.dom);
    }
  },

  onbeforeupdate: (vnode, old) => {
    if (vnode.attrs.mask !== old.attrs.mask) {
      if (old.dom.inputmask) {
        old.dom.inputmask.remove();
      }
      Inputmask(vnode.attrs.mask).mask(old.dom);
    }

    return true;
  },

  onremove: (vnode) => {
    if (vnode.dom.inputmask) {
      vnode.dom.inputmask.remove();
    }
  },

  view: (vnode) => {
    const { attrs } = vnode;
    const { class: className, mask, ...props } = attrs;

    return (
      <input
        {...props}
        class={classNames('input', className)}
      />
    );
  },
};
