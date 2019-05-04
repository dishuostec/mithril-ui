import m from 'mithril';
import classNames from 'classnames';
import './MenuItem.scss';
import { LinkWrapFactory } from '../../factory/LinkWrap.js';

// export const Link = LinkWrapFactory('link', 'span');
const MenuItemContainer = LinkWrapFactory('menu-item');

export const MenuItem = {
  view: ({ attrs: { title, subtitle, iconLeft, iconRight, tip, ...props } }) => {

    return (
      <MenuItemContainer {...props}>
        {iconLeft && <div class="menu-item-icon-left">{iconLeft}</div>}

        <div class="menu-item-content">
          <p class="menu-item-title">{title}</p>
          {subtitle && <p class="menu-item-subtitle">{subtitle}</p>}
        </div>

        {tip && <div class="menu-item-tip">{tip}</div>}

        {iconRight && <div class="menu-item-icon-right">{iconRight}</div>}
      </MenuItemContainer>
    );
  },
};
