import m from 'mithril';
import classNames from 'classnames';
import './Input.scss';

const InputNumber = {
  view: ({ attrs: { class: className, ...props } }) => (
    <input
      {...props}
      class={classNames('input', className)}
      type="number"
    />
  ),
};

export default InputNumber;
