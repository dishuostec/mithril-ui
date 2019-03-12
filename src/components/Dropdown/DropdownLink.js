import m from 'mithril';
import classNames from 'classnames';
import { Link } from '../../elements/Link/Link';
import './DropdownLink.scss';

export const DropdownLink = {
  view: ({ attrs: { isActive, class: className, ...props }, children }) => {
    const dropdownLinkClass = classNames('dropdown-item', className, {
      'is-active': isActive,
    });

    return (
      <Link
        {...props}
        class={dropdownLinkClass}
      >
        {children}
      </Link>
    );
  },
};
