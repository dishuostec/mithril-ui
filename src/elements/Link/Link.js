import m from 'mithril';
import classNames from 'classnames';
import './Link.scss';

export const Link = {
  view: function ({ attrs: { to, replace = false, onclick, class: className, ...props }, children }) {
    return <span
      {...props}
      class={classNames('link', className)}
      onclick={() => {
        onclick && onclick();
        to && m.route.set(to, null, { replace });
      }}
    >{children}</span>;
  },
};
