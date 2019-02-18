import m from 'mithril';
import classNames from 'classnames';
import './Input.scss';

const InputPassword = {
  view: ({ attrs: { class: className, ...props } }) => (
    <input
      {...props}
      class={classNames('input', className)}
      type="password"
    />
  ),
};

export default InputPassword;
