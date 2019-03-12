import m from 'mithril';
import classNames from 'classnames';


export const InputWrapFactory = (inputType) => {
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
