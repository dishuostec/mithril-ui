import m from 'mithril';
import classNames from 'classnames';
import './Checkbox.scss';
import IconFa from '../../elements/Icon/IconFa';

const Checkbox = {
  view: ({ attrs: { checked, disabled, ...props }, children }) => (
    <label
      class={classNames('checkbox', { 'is-checked': checked })}
      disabled={disabled}
      {...props}
    >
      <IconFa icon="check" />
      {children}
    </label>
  ),
};

export default Checkbox;
