import m from 'mithril';
import { IconFa } from '../../elements/Icon/IconFa';
import { IconMdi } from '../../elements/Icon/IconMdi';
import { IconUi } from '../../elements/Icon/IconUi';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const IconPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="图标">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" />
          </p>
          <Snippet code={`
            <IconFa icon="home" />
          `} />

          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" />
          </p>
          <Snippet code={`
            <IconMdi icon="flag" />
          `} />

        </section>

        <section class="demo__sample">
          <h2>内置</h2>

          <p class="demo__preview demo__preview--icon">
            <IconUi icon="arrow-up" />
            <IconUi icon="arrow-down" />
            <IconUi icon="arrow-left" />
            <IconUi icon="arrow-right" />
            <IconUi icon="triangle-up" />
            <IconUi icon="triangle-down" />
            <IconUi icon="triangle-left" />
            <IconUi icon="triangle-right" />
            <IconUi icon="triangle-up-outline" />
            <IconUi icon="triangle-down-outline" />
            <IconUi icon="triangle-left-outline" />
            <IconUi icon="triangle-right-outline" />
            <IconUi icon="information" />
            <IconUi icon="information-outline" />
            <IconUi icon="close" />
            <IconUi icon="close-outline" />
            <IconUi icon="warning" />
          </p>

          <Snippet code={`
            <IconUi icon="arrow-right" />
            <IconUi icon="arrow-left" />
            <IconUi icon="arrow-down" />
            <IconUi icon="triangle-down" />
            <IconUi icon="triangle-left" />
            <IconUi icon="triangle-right" />
            <IconUi icon="triangle-up" />
            <IconUi icon="info" />
            <IconUi icon="warning" />
            <IconUi icon="close" />
          `} />

        </section>

        <section class="demo__sample">
          <h2>Font Awesome</h2>

          <p class="demo__preview demo__preview--icon">
            <a href="https://fontawesome.com/icons?d=gallery&s=brands,solid&m=free">Font Awesome</a>
            <IconFa icon="home" />
          </p>
          <Snippet code={`
            <IconFa icon="home" />
          `} />

          <h3>颜色</h3>
          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" class="has-text-white" />
            <IconFa icon="home" class="has-text-light" />
            <IconFa icon="home" class="has-text-dark" />
            <IconFa icon="home" class="has-text-black" />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" class="has-text-primary" />
            <IconFa icon="home" class="has-text-link" />
            <IconFa icon="home" class="has-text-info" />
            <IconFa icon="home" class="has-text-success" />
            <IconFa icon="home" class="has-text-warning" />
            <IconFa icon="home" class="has-text-danger" />
          </p>
          <Snippet code={`
            <IconFa icon="home" class="has-text-white" />
            <IconFa icon="home" class="has-text-light" />
            <IconFa icon="home" class="has-text-dark" />
            <IconFa icon="home" class="has-text-black" />

            <IconFa icon="home" class="has-text-primary" />
            <IconFa icon="home" class="has-text-link" />
            <IconFa icon="home" class="has-text-info" />
            <IconFa icon="home" class="has-text-success" />
            <IconFa icon="home" class="has-text-warning" />
            <IconFa icon="home" class="has-text-danger" />
          `} />

          <h3>大小</h3>
          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" class="is-small" />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" class="" />
            <IconFa icon="home" class="" size={IconFa.SIZE.X2} />
            <IconFa icon="home" class="" size={IconFa.SIZE.X3} />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" class="is-medium" />
            <IconFa icon="home" class="is-medium" size={IconFa.SIZE.X2} />
            <IconFa icon="home" class="is-medium" size={IconFa.SIZE.X3} />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" class="is-large" />
            <IconFa icon="home" class="is-large" size={IconFa.SIZE.X2} />
            <IconFa icon="home" class="is-large" size={IconFa.SIZE.X3} />
          </p>
          <Snippet code={`
            <IconFa icon="home" class="is-small" />

            <IconFa icon="home" class="" />
            <IconFa icon="home" class="" size={IconFa.SIZE.X2} />
            <IconFa icon="home" class="" size={IconFa.SIZE.X3} />

            <IconFa icon="home" class="is-medium" />
            <IconFa icon="home" class="is-medium" size={IconFa.SIZE.X2} />
            <IconFa icon="home" class="is-medium" size={IconFa.SIZE.X3} />

            <IconFa icon="home" class="is-large" />
            <IconFa icon="home" class="is-large" size={IconFa.SIZE.X2} />
            <IconFa icon="home" class="is-large" size={IconFa.SIZE.X3} />
          `} />

          <h3>翻转</h3>
          <p class="demo__preview demo__preview--icon">
            <IconFa icon="home" />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_45} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_90} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_180} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_135} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_225} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_270} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_315} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.FLIP_HORIZONTAL} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.FLIP_VERTICAL} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.FLIP_BOTH} />
          </p>
          <Snippet code={`
            <IconFa icon="home" />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_45} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_90} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_180} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_135} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_225} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_270} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.ROTATE_315} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.FLIP_HORIZONTAL} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.FLIP_VERTICAL} />
            <IconFa icon="home" transform={IconFa.TRANSFORM.FLIP_BOTH} />
           `} />

        </section>

        <section class="demo__sample">
          <h2>Material Design Icons</h2>

          <p class="demo__preview demo__preview--icon">
            <a href="https://cdn.materialdesignicons.com/3.4.93/">Material Design Icons</a>
            <IconMdi icon="flag" />
          </p>
          <Snippet code={`
            <IconMdi icon="flag" />
          `} />

          <h3>颜色</h3>
          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" class="has-text-white" />
            <IconMdi icon="flag" class="has-text-light" />
            <IconMdi icon="flag" class="has-text-dark" />
            <IconMdi icon="flag" class="has-text-black" />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" class="has-text-primary" />
            <IconMdi icon="flag" class="has-text-link" />
            <IconMdi icon="flag" class="has-text-info" />
            <IconMdi icon="flag" class="has-text-success" />
            <IconMdi icon="flag" class="has-text-warning" />
            <IconMdi icon="flag" class="has-text-danger" />
          </p>
          <Snippet code={`
            <IconMdi icon="flag" class="has-text-white" />
            <IconMdi icon="flag" class="has-text-light" />
            <IconMdi icon="flag" class="has-text-dark" />
            <IconMdi icon="flag" class="has-text-black" />

            <IconMdi icon="flag" class="has-text-primary" />
            <IconMdi icon="flag" class="has-text-link" />
            <IconMdi icon="flag" class="has-text-info" />
            <IconMdi icon="flag" class="has-text-success" />
            <IconMdi icon="flag" class="has-text-warning" />
            <IconMdi icon="flag" class="has-text-danger" />
          `} />

          <h3>大小</h3>
          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" class="is-small" />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" class="" />
            <IconMdi icon="flag" class="" size={IconMdi.SIZE.X2} />
            <IconMdi icon="flag" class="" size={IconMdi.SIZE.X3} />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" class="is-medium" />
            <IconMdi icon="flag" class="is-medium" size={IconMdi.SIZE.X2} />
            <IconMdi icon="flag" class="is-medium" size={IconMdi.SIZE.X3} />
          </p>
          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" class="is-large" />
            <IconMdi icon="flag" class="is-large" size={IconMdi.SIZE.X2} />
            <IconMdi icon="flag" class="is-large" size={IconMdi.SIZE.X3} />
          </p>
          <Snippet code={`
            <IconMdi icon="flag" class="is-small" />

            <IconMdi icon="flag" class="" />
            <IconMdi icon="flag" class="" size={IconMdi.SIZE.X2} />
            <IconMdi icon="flag" class="" size={IconMdi.SIZE.X3} />

            <IconMdi icon="flag" class="is-medium" />
            <IconMdi icon="flag" class="is-medium" size={IconMdi.SIZE.X2} />
            <IconMdi icon="flag" class="is-medium" size={IconMdi.SIZE.X3} />

            <IconMdi icon="flag" class="is-large" />
            <IconMdi icon="flag" class="is-large" size={IconMdi.SIZE.X2} />
            <IconMdi icon="flag" class="is-large" size={IconMdi.SIZE.X3} />
          `} />

          <h3>翻转</h3>
          <p class="demo__preview demo__preview--icon">
            <IconMdi icon="flag" />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_45} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_90} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_180} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_135} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_225} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_270} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_315} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.FLIP_HORIZONTAL} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.FLIP_VERTICAL} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.FLIP_BOTH} />
          </p>
          <Snippet code={`
            <IconMdi icon="flag" />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_45} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_90} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_180} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_135} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_225} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_270} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.ROTATE_315} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.FLIP_HORIZONTAL} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.FLIP_VERTICAL} />
            <IconMdi icon="flag" transform={IconMdi.TRANSFORM.FLIP_BOTH} />
          `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
