import m from 'mithril';
import classNames from 'classnames';
import { Link } from '../../elements/Link/Link';

export const NavbarDropdownLink = {
  view: ({ attrs: { class: className, ...props }, children }) => (
    <Link
      class={classNames('navbar-link', className)}
      {...props}
    >
      {children}
    </Link>
  ),
};
