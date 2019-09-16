import m from 'mithril';
import classNames from 'classnames';
import Inputmask from 'inputmask';

const defaultFormat = (value) => {
  return value;
};

export const InputWrapFactory = (inputType, { defaultFilter, defaultConverter } = {}) => {
  return () => {

    let displayValue;
    let isFocus = false;

    return {
      oncreate: (vnode) => {
        if (vnode.attrs.mask) {
          Inputmask(vnode.attrs.mask).mask(vnode.dom);
        }
      },

      onremove: (vnode) => {
        if (vnode.dom.inputmask) {
          vnode.dom.inputmask.remove();
        }
      },

      view: (vnode) => {
        const { attrs } = vnode;
        const { class: className, value, filter, converter, format, oninput, onfocus, onblur, mask, ...props } = attrs;

        const formater = format || defaultFormat;

        const inputHandler = (e) => {
          let value = e.target.value;

          // filters
          if (defaultFilter) {
            value = defaultFilter(value, attrs);
          }
          if (filter) {
            value = filter(value, attrs);
          }

          displayValue = value;

          if (oninput) {
            // converters
            if (defaultConverter) {
              value = defaultConverter(value, attrs);
            }
            if (converter) {
              value = converter(value, attrs);
            }

            oninput(value);
          }
        };
        return (
          <input
            {...props}
            class={classNames('input', className)}
            type={inputType}
            value={formater(isFocus ? displayValue : value)}
            onfocus={() => {
              displayValue = value;
              isFocus = true;
              onfocus && onfocus();
            }}
            onblur={() => {
              displayValue = value;
              isFocus = false;
              onblur && onblur();
            }}
            onchange={inputHandler}
            oninput={inputHandler}
          />
        );
      },
    };
  };
};
