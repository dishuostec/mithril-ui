import m from 'mithril';
import classNames from 'classnames';
import './Modal.base.scss';

const ModalBase = {
  view: ({ attrs: { class: className, isActive }, children }) => (
    <div class={classNames('modal', className, { 'is-active': isActive })}>
      <div class="modal-background" />
      <div class="modal-content">

        {children}

      </div>
    </div>
  ),
};

export default ModalBase;
