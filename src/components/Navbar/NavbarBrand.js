import m from 'mithril';
import classNames from 'classnames';
import { NavbarItemLink } from './NavbarItemLink';

export const NavbarBrand = {
  view: ({ attrs: { to, isExternal, class: className, isActive, onclick, onBurgerClick, ...props }, children }) => (
    <div class="navbar-brand">
      <NavbarItemLink
        to={to}
        isExternal={isExternal}
        onclick={(e) => {
          onclick && onclick(e);
        }}
      >
        {children}
      </NavbarItemLink>

      <a role="button" aria-label="menu" aria-expanded="false"
        class={classNames('navbar-burger', {
          'is-active': isActive,
        })}
        onclick={(e) => {
          onBurgerClick && onBurgerClick(e);
        }}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  ),
};
