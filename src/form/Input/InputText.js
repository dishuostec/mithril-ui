import m from 'mithril';
import classNames from 'classnames';
import './Input.scss';

const InputText = {
  view: ({ attrs: { class: className, ...props } }) => (
    <input
      {...props}
      class={classNames('input', className)}
      type="text"
    />
  ),
};

export default InputText;
