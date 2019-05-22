import m from 'mithril';
import classNames from 'classnames';
import './ModalBase.scss';

export const ModalBase = {
  view: ({ attrs: { class: className, isActive, ...props }, children }) => (
    <div class={classNames('modal', className, { 'is-active': isActive })} {...props}>
      <div class="modal-background" />
      <div class="modal-content">

        {children}

      </div>
    </div>
  ),
};
