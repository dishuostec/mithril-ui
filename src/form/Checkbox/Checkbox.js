import m from 'mithril';
import classNames from 'classnames';
import './Checkbox.scss';
import { IconFa } from '../../elements/Icon/IconFa';

export const Checkbox = {
  view: ({ attrs: { class: className, checked, disabled, ...props }, children }) => (
    <label
      class={classNames('checkbox', className, { 'is-checked': checked })}
      disabled={disabled}
      {...props}
    >
      <IconFa icon="check" />
      {children}
    </label>
  ),
};
