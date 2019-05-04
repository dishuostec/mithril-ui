import m from 'mithril';
import classNames from 'classnames';
import { ToastModel } from './ToastModel';
import './Toast.scss';

export const Toast = {
  view: () => (
    <div class={classNames('toast', ToastModel.class, { 'is-active': ToastModel.content })}>
      <div class="toast-content">

        {
          Array.isArray(ToastModel.content)
            ? ToastModel.content.map(item => (<p>{item}</p>))
            : ToastModel.content
        }

      </div>
    </div>
  ),
};
