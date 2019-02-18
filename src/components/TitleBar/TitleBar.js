import m from 'mithril';
import IconUi from '../../elements/Icon/IconUi';

const TitleBar = {
  view: (vnode) => {
    const { class: className, noButton, clickTitle, title, titleAddon } = vnode.attrs;

    return (
      <header id="titleBar" class={className || null}>

        {
          noButton ||
          <a
            class="addon-left"
            onclick={() => {
              history.length
                ? history.back()
                : history.replaceState(null, null, '/');
            }}
          >
            <IconUi icon="triangle-left-outline" />
          </a>
        }

        <div class="title"
          onclick={() => {
            clickTitle && clickTitle();
          }}
        >{title}</div>

        {
          titleAddon &&
          <div class="addon-right">{titleAddon}</div>
        }

      </header>
    );
  },
};

export default TitleBar;
