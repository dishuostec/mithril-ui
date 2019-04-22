import m from 'mithril';
import classNames from 'classnames';
import './Label.scss';

export const Label = {
  view: ({ attrs: { disabled, class: className, ...props }, children }) => (
    <label
      {...props}
      class={classNames('label', className)}
      disabled={disabled}
    >{children}</label>
  ),
};
