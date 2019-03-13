import m from 'mithril';
import classNames from 'classnames';

export const NavbarMenu = {
  view: ({ attrs, children }) => (
    <div class={classNames('navbar-menu', attrs.class, {
      'is-active': attrs.isActive,
    })}>
      {children}
    </div>
  ),
};
