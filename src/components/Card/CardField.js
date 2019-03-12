import m from 'mithril';
import classNames from 'classnames';
import './CardField.scss';

export const CardField = {
  view: ({ attrs: { label, value, name, vertical, reverse, left, center, right, class: className, ...props } }) => {

    const fieldClass = classNames('card-field', className, {
      [`card-field-${name}`]: name,
      'card-field--vertical': vertical,
      'card-field--reverse': reverse,
      'card-field--left': left,
      'card-field--center': center,
      'card-field--right': right,
    });

    return (
      <div
        {...props}
        class={fieldClass}
      >
        <div class="card-field__label">{label}</div>
        <div class="card-field__value">{value}</div>
      </div>
    );
  },
};
