import m from 'mithril';
import classNames from 'classnames';
import './MenuItem.scss';

export const MenuItem = {
  view: ({ attrs: { to, onclick, title, subtitle, iconLeft, iconRight, tip, class: className, ...props } }) => {

    const menuItemClass = classNames('menu-item', className);

    return (
      <div
        {...props}
        class={menuItemClass}
        onclick={() => {
          to && m.route.set(to);
          onclick && onclick();
        }}
      >
        {iconLeft && <div class="menu-item-icon-left">{iconLeft}</div>}

        <div class="menu-item-content">
          <p class="menu-item-title">{title}</p>
          {subtitle && <p class="menu-item-subtitle">{subtitle}</p>}
        </div>

        {tip && <div class="menu-item-tip">{tip}</div>}

        {iconRight && <div class="menu-item-icon-right">{iconRight}</div>}
      </div>
    );
  },
};
