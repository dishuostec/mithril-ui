import m from 'mithril';
import classNames from 'classnames';
import './Control.scss';

export const Control = {
  view: ({ attrs: { class: className, ...props }, children }) => (
    <div
      {...props}
      class={classNames('control', className)}
    >{children}
    </div>
  ),
};
