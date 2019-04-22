import m from 'mithril';
import classNames from 'classnames';
import { IconUi } from '../../elements/Icon/IconUi';
import './TitleBar.scss';

export const TitleBar = {
  view: ({ attrs: { class: className, noGoBack, title, titleAddon, ...props } }) => {

    return (
      <header class={classNames('title-bar', className)} {...props}>

        {
          noGoBack
            ? null
            : (
              <div
                class="title-bar-addon is-left"
                onclick={() => {
                  history.length
                    ? history.back()
                    : history.replaceState(null, null, '/');
                }}
              >
                <IconUi icon="triangle-left-outline" />
              </div>
            )
        }

        <div class="title-bar-title">{title}</div>

        {
          titleAddon &&
          <div class="title-bar-addon is-right">{titleAddon}</div>
        }

      </header>
    );
  },
};
