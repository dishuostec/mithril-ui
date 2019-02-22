import m from 'mithril';
import classNames from 'classnames';
import './Radio.scss';
import IconFa from '../../elements/Icon/IconFa';

const Radio = {
  view: ({ attrs: { checked, disabled, ...props }, children }) => (
    <label
      class={classNames('radio', { 'is-checked': checked })}
      disabled={disabled}
      {...props}
    >
      <IconFa icon="check" />
      {children}
    </label>
  ),
};

export default Radio;
