import m from 'mithril';
import { Button } from '../../elements/Button/Button';
import { IconUi } from '../../elements/Icon/IconUi';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const ButtonPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="按钮">

        <section class="demo__sample">
          <h2>示例</h2>

          <Button>按钮</Button>

          <Snippet code={`
            <Button>按钮</Button>
          `} />
        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <Button class="is-white">White</Button>
          <Button class="is-light">Light</Button>
          <Button class="is-dark">Dark</Button>
          <Button class="is-black">Black</Button>
          <Button class="is-text">Text</Button>

          <Snippet code={`
            <Button class="is-white">White</Button>
            <Button class="is-light">Light</Button>
            <Button class="is-dark">Dark</Button>
            <Button class="is-black">Black</Button>
            <Button class="is-text">Text</Button>
          `} />

          <Button class="is-primary">Primary</Button>
          <Button class="is-link">Link</Button>
          <Button class="is-info">Info</Button>
          <Button class="is-success">Success</Button>
          <Button class="is-warning">Warning</Button>
          <Button class="is-danger">Danger</Button>

          <Snippet code={`
          `} />
        </section>

        <section class="demo__sample">
          <h2>大小</h2>

          <Button class="is-small">Small</Button>
          <Button>Default</Button>
          <Button class="is-normal">Normal</Button>
          <Button class="is-medium">Medium</Button>
          <Button class="is-large">Large</Button>

          <Snippet code={`
          `} />

          <div class="buttons are-medium">
            <Button>All</Button>
            <Button>Medium</Button>
            <Button>Size</Button>
          </div>

          <Snippet code={`
            <div class="buttons are-medium">
              <Button>All</Button>
              <Button>Medium</Button>
              <Button>Size</Button>
            </div>
          `} />

          <div class="buttons are-small">
            <Button>Small</Button>
            <Button>Small</Button>
            <Button>Small</Button>
            <Button class="is-normal">Normal</Button>
            <Button>Small</Button>
          </div>

          <Snippet code={`
            <div class="buttons are-small">
              <Button>Small</Button>
              <Button>Small</Button>
              <Button>Small</Button>
              <Button class="is-normal">Normal</Button>
              <Button>Small</Button>
            </div>
          `} />
        </section>

        <section class="demo__sample">
          <h2>显示</h2>

          <Button class="is-small is-fullwidth">Small</Button>
          <Button class="is-fullwidth">Normal</Button>
          <Button class="is-medium is-fullwidth">Medium</Button>
          <Button class="is-large is-fullwidth">Large</Button>

          <Snippet code={`
            <Button class="is-small is-fullwidth">Small</Button>
            <Button class="is-fullwidth">Normal</Button>
            <Button class="is-medium is-fullwidth">Medium</Button>
            <Button class="is-large is-fullwidth">Large</Button>
          `} />
        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <Button class="is-outlined">Outlined</Button>
          <Button class="is-primary is-outlined">Outlined</Button>
          <Button class="is-link is-outlined">Outlined</Button>
          <Button class="is-info is-outlined">Outlined</Button>
          <Button class="is-success is-outlined">Outlined</Button>
          <Button class="is-danger is-outlined">Outlined</Button>

          <Snippet code={`
            <Button class="is-outlined">Outlined</Button>
            <Button class="is-primary is-outlined">Outlined</Button>
            <Button class="is-link is-outlined">Outlined</Button>
            <Button class="is-info is-outlined">Outlined</Button>
            <Button class="is-success is-outlined">Outlined</Button>
            <Button class="is-danger is-outlined">Outlined</Button>
          `} />

          <Button class="is-primary is-inverted">Inverted</Button>
          <Button class="is-link is-inverted">Inverted</Button>
          <Button class="is-info is-inverted">Inverted</Button>
          <Button class="is-success is-inverted">Inverted</Button>
          <Button class="is-danger is-inverted">Inverted</Button>

          <Snippet code={`
            <Button class="is-primary is-inverted">Inverted</Button>
            <Button class="is-link is-inverted">Inverted</Button>
            <Button class="is-info is-inverted">Inverted</Button>
            <Button class="is-success is-inverted">Inverted</Button>
            <Button class="is-danger is-inverted">Inverted</Button>
          `} />

          <Button class="is-rounded">Rounded</Button>
          <Button class="is-primary is-rounded">Rounded</Button>
          <Button class="is-link is-rounded">Rounded</Button>
          <Button class="is-info is-rounded">Rounded</Button>
          <Button class="is-success is-rounded">Rounded</Button>
          <Button class="is-danger is-rounded">Rounded</Button>

          <Snippet code={`
            <Button class="is-rounded">Rounded</Button>
            <Button class="is-primary is-rounded">Rounded</Button>
            <Button class="is-link is-rounded">Rounded</Button>
            <Button class="is-info is-rounded">Rounded</Button>
            <Button class="is-success is-rounded">Rounded</Button>
            <Button class="is-danger is-rounded">Rounded</Button>
          `} />

          <Button>
            <IconUi icon="information-outline" />
            <span>文字</span>
          </Button>
          <Button>
            <span>文字</span>
            <IconUi icon="information-outline" />
            <span>文字</span>
          </Button>
          <Button>
            <IconUi icon="close-outline" />
            <span>文字</span>
          </Button>
          <Button>
            <span>文字</span>
            <IconUi icon="close-outline" />
            <span>文字</span>
          </Button>

          <Snippet code={`
            <Button>
              <IconUi icon="information-outline" />
              <span>文字</span>
            </Button>
            <Button>
              <span>文字</span>
              <IconUi icon="information-outline" />
              <span>文字</span>
            </Button>
            <Button>
              <IconUi icon="close-outline" />
              <span>文字</span>
            </Button>
            <Button>
              <span>文字</span>
              <IconUi icon="close-outline" />
              <span>文字</span>
            </Button>
          `} />
        </section>

        <section class="demo__sample">
          <h2>状态</h2>

          <Button class="is-loading">Loading</Button>
          <Button class="is-primary is-loading">Loading</Button>
          <Button class="is-link is-loading">Loading</Button>
          <Button class="is-info is-loading">Loading</Button>
          <Button class="is-success is-loading">Loading</Button>
          <Button class="is-warning is-loading">Loading</Button>
          <Button class="is-danger is-loading">Loading</Button>

          <Snippet code={`
            <Button class="is-loading">Loading</Button>
            <Button class="is-primary is-loading">Loading</Button>
            <Button class="is-link is-loading">Loading</Button>
            <Button class="is-info is-loading">Loading</Button>
            <Button class="is-success is-loading">Loading</Button>
            <Button class="is-warning is-loading">Loading</Button>
            <Button class="is-danger is-loading">Loading</Button>
          `} />

          <Button title="Disabled button" disabled>Disabled</Button>
          <Button class="is-primary" title="Disabled button" disabled>Disabled</Button>
          <Button class="is-link" title="Disabled button" disabled>Disabled</Button>
          <Button class="is-info" title="Disabled button" disabled>Disabled</Button>
          <Button class="is-success" title="Disabled button" disabled>Disabled</Button>
          <Button class="is-warning" title="Disabled button" disabled>Disabled</Button>
          <Button class="is-danger" title="Disabled button" disabled>Disabled</Button>

          <Snippet code={`
            <Button title="Disabled button" disabled>Disabled</Button>
            <Button class="is-primary" title="Disabled button" disabled>Disabled</Button>
            <Button class="is-link" title="Disabled button" disabled>Disabled</Button>
            <Button class="is-info" title="Disabled button" disabled>Disabled</Button>
            <Button class="is-success" title="Disabled button" disabled>Disabled</Button>
            <Button class="is-warning" title="Disabled button" disabled>Disabled</Button>
            <Button class="is-danger" title="Disabled button" disabled>Disabled</Button>
          `} />
        </section>

        <section class="demo__sample">
          <h2>多个按钮</h2>

          <div class="buttons">
            <Button class="button is-success">Save changes</Button>
            <Button class="button is-info">Save and continue</Button>
            <Button class="button is-danger">Cancel</Button>
          </div>

          <Snippet code={`
            <div class="buttons">
              <Button class="button is-success">Save changes</Button>
              <Button class="button is-info">Save and continue</Button>
              <Button class="button is-danger">Cancel</Button>
            </div>
          `} />

          <div class="buttons has-addons">
            <Button>Yes</Button>
            <Button>Maybe</Button>
            <Button>No</Button>
          </div>

          <Snippet code={`
            <div class="buttons has-addons">
              <Button>Yes</Button>
              <Button>Maybe</Button>
              <Button>No</Button>
            </div>
          `} />

          <div class="buttons">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
            <Button>Five</Button>
            <Button>Six</Button>
            <Button>Seven</Button>
            <Button>Eight</Button>
            <Button>Nine</Button>
            <Button>Ten</Button>
            <Button>Eleven</Button>
            <Button>Twelve</Button>
            <Button>Thirteen</Button>
            <Button>Fourteen</Button>
            <Button>Fifteen</Button>
            <Button>Sixteen</Button>
            <Button>Seventeen</Button>
            <Button>Eighteen</Button>
            <Button>Nineteen</Button>
            <Button>Twenty</Button>
          </div>

          <Snippet code={`
            <div class="buttons">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
              <Button>Four</Button>
              <Button>Five</Button>
              <Button>Six</Button>
              <Button>Seven</Button>
              <Button>Eight</Button>
              <Button>Nine</Button>
              <Button>Ten</Button>
              <Button>Eleven</Button>
              <Button>Twelve</Button>
              <Button>Thirteen</Button>
              <Button>Fourteen</Button>
              <Button>Fifteen</Button>
              <Button>Sixteen</Button>
              <Button>Seventeen</Button>
              <Button>Eighteen</Button>
              <Button>Nineteen</Button>
              <Button>Twenty</Button>
            </div>
          `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
