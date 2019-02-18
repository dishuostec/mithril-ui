import m from 'mithril';
import classNames from 'classnames';
import './Form.scss';

const Form = {
  view: ({ attrs: { onsubmit, class: className, ...props }, children }) => (
    <form
      {...props}
      class={classNames('form', className)}
      onsubmit={(e) => {
        e.preventDefault();
        onsubmit && onsubmit();
      }}
    >{children}
    </form>
  ),
};

export default Form;
