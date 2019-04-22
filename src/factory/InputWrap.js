import m from 'mithril';
import classNames from 'classnames';


export const InputWrapFactory = (inputType, { defaultFilter, defaultConverter } = {}) => {
  return {

    displayValue: '',

    view: (vnode) => {
      const { attrs, state } = vnode;
      const { class: className, value, displayValue, filter, converter, oninput, ...props } = attrs;

      return (
        <input
          {...props}
          class={classNames('input', className)}
          type={inputType}
          value={value !== void 0
            ? value
            : displayValue !== void 0
              ? displayValue
              : state.displayValue
          }
          oninput={(e) => {
            let displayValue = e.target.value;

            // filters
            if (defaultFilter) {
              displayValue = state.displayValue = defaultFilter(displayValue, attrs);
            }
            if (filter) {
              displayValue = state.displayValue = filter(displayValue, attrs);
            }

            if (oninput) {
              let value = displayValue;

              // converters
              if (defaultConverter) {
                value = defaultConverter(value);
              }
              if (converter) {
                value = converter(value);
              }

              oninput(value);
            }
          }}
        />
      );
    },
  };
};
