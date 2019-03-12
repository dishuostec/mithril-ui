import classNames from 'classnames';
import m from 'mithril';
import { Button } from '../../elements/Button/Button';
import { IconUi } from '../../elements/Icon/IconUi';
import './DropdownItem.scss';

export const Dropdown = (initialVnote) => {
  let isActive = false;

  const showMenu = () => {
    isActive = true;

    setTimeout(() => {
      document.addEventListener('click', hideMenu);
    });
  };

  const hideMenu = () => {
    isActive = false;
    m.redraw();

    document.removeEventListener('click', hideMenu);
  };

  return {
    view: ({ attrs: { text, isRight, isDropup, class: className, ...props }, children }) => {

      const dropdownClass = classNames('dropdown', className, {
        'is-active': isActive,
        'is-right': isRight,
        'is-up': isDropup,
      });

      return (
        <div
          {...props}
          class={dropdownClass}
        >
          <div class="dropdown-trigger"
            onclick={() => {
              if (!isActive) {
                showMenu();
              }
            }}
          >
            <Button class="button">
              <span>{text}</span>
              <IconUi class="is-small" icon="triangle-down-outline" />
            </Button>

            <div class="dropdown-menu">
              <div class="dropdown-content">
                {children}
              </div>
            </div>
          </div>
        </div>
      );
    },
  };
};
