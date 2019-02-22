import m from 'mithril';
import classNames from 'classnames';
import IconUi from '../../elements/Icon/IconUi';
import './TitleBar.scss';

const TitleBar = {
  view: (vnode) => {
    const { class: className, noGoBack, title, titleAddon } = vnode.attrs;

    return (
      <header class={classNames('titlebar', className)}>

        {
          noGoBack
            ? null
            : (
              <div
                class="titlebar-addon is-left"
                onclick={() => {
                  history.length
                    ? history.back()
                    : history.replaceState(null, null, '/');
                }}
              >
                <IconUi size={IconUi.SIZE.X2} icon="triangle-left-outline" />
              </div>
            )
        }

        <div class="titlebar-title">{title}</div>

        {
          titleAddon &&
          <div class="titlebar-addon is-right">{titleAddon}</div>
        }

      </header>
    );
  },
};

export default TitleBar;
