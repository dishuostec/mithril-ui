import m from 'mithril';
import classNames from 'classnames';
import { Link } from '../../elements/Link/Link';

export const NavbarItemLink = {
  view: ({ attrs: { class: className, ...props }, children }) => (
    <Link
      class={classNames('navbar-item', className)}
      {...props}
    >
      {children}
    </Link>
  ),
};
