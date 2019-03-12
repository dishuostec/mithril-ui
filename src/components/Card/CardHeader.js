import m from 'mithril';
import classNames from 'classnames';
import { IconUi } from '../../elements/Icon/IconUi';
import './CardHeader.scss';

export const CardHeader = {
  view: ({ attrs: { title, icon, class: className, ...props }, children }) => {

    const cardHeaderClass = classNames('card-header', className);

    return (
      <div
        {...props}
        class={cardHeaderClass}
      >
        <div class="card-header-title">{title}</div>
        {icon && (
          <div class="card-header-icon">
            <IconUi icon={icon} />
          </div>
        )
        }
      </div>
    );
  },
};
