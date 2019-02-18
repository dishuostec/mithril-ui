import m from 'mithril';
import classNames from 'classnames';
import './CardFieldGroup.scss';

const CardFieldGroup = {
  view: ({ attrs: { category, class: className, ...props }, children }) => {

    const fieldClass = classNames('card-field-group', className, {
      [`card-field__category-${category}`]: category,
    });

    return (
      <div
        {...props}
        class={fieldClass}
      >
        {children}
      </div>
    );
  },
};

export default CardFieldGroup;
