import m from 'mithril';
import classNames from 'classnames';

import './Select.scss';

export const Select = {
  view: ({ attrs: { class: className, oninput, isHovered, isFocused, isLoading, ...props }, children }) => (
    <div class={classNames('select', className, {
      'is-multiple': props.multiple,
      'is-loading': isLoading,
    })}>
      <select
        class={classNames({
          'is-hovered': isHovered,
          'is-focused': isFocused,
        })}
        oninput={e => {
          if (!oninput) {return;}

          const value = props.multiple
            ? [...e.target.options]
              .filter(option => option.selected)
              .map(option => option.value)
            : e.target.value;

          oninput(value);
        }}
        {...props}
      >
        {children}
      </select>
    </div>
  ),
};
