import m from 'mithril';
import classNames from 'classnames';


const InputWrapFactory = (inputType) => {
  return {
    view: ({ attrs: { class: className, ...props } }) => (
      <input
        {...props}
        class={classNames('input', className)}
        type={inputType}
      />
    ),
  };
};

export default InputWrapFactory;
