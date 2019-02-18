import m from 'mithril';
import classNames from 'classnames';
import './MenuItem.scss';

const MenuItem = {
  view: ({ attrs: { title, subtitle, iconLeft, iconRight, tip, class: className, ...props } }) => {

    const menuItemClass = classNames('menu-item', className);

    return (
      <div
        {...props}
        class={menuItemClass}
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

export default MenuItem;
