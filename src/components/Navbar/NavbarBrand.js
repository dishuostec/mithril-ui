import m from 'mithril';
import classNames from 'classnames';
import { NavbarItemLink } from './NavbarItemLink';

export const NavbarBrand = {
  view: ({ attrs: { to, class: className, isActive, onclick, ...props }, children }) => (
    <div class="navbar-brand">
      <NavbarItemLink
        to={to}
      >
        {children}
      </NavbarItemLink>

      <a role="button" aria-label="menu" aria-expanded="false"
        class={classNames('navbar-burger', {
          'is-active': isActive,
        })}
        onclick={() => {
          onclick && onclick();
        }}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  ),
};
