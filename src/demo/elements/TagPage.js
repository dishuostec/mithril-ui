import m from 'mithril';
import { Tag } from '../../elements/Tag/Tag';
import { Tags } from '../../elements/Tag/Tags';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const TagPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="标签">

        <section class="demo__sample">
          <h2>示例</h2>

          <Tag>Tag label</Tag>

          <Snippet code={`
            <Tag>Tag label</Tag>
          `} />
        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <Tag class="is-black">Black</Tag>
          <Tag class="is-dark">Dark</Tag>
          <Tag class="is-light">Light</Tag>
          <Tag class="is-white">White</Tag>
          <Tag class="is-primary">Primary</Tag>
          <Tag class="is-link">Link</Tag>
          <Tag class="is-info">Info</Tag>
          <Tag class="is-success">Success</Tag>
          <Tag class="is-warning">Warning</Tag>
          <Tag class="is-danger">Danger</Tag>
          <Snippet code={`
            <Tag class="is-black">Black</Tag>
            <Tag class="is-dark">Dark</Tag>
            <Tag class="is-light">Light</Tag>
            <Tag class="is-white">White</Tag>
            <Tag class="is-primary">Primary</Tag>
            <Tag class="is-link">Link</Tag>
            <Tag class="is-info">Info</Tag>
            <Tag class="is-success">Success</Tag>
            <Tag class="is-warning">Warning</Tag>
            <Tag class="is-danger">Danger</Tag>
          `} />
        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <Tag class="is-rounded">Rounded</Tag>
          <Tag class="is-rounded is-black">Black</Tag>
          <Tag class="is-rounded is-dark">Dark</Tag>
          <Tag class="is-rounded is-light">Light</Tag>
          <Tag class="is-rounded is-white">White</Tag>
          <Tag class="is-rounded is-primary">Primary</Tag>
          <Tag class="is-rounded is-link">Link</Tag>
          <Tag class="is-rounded is-info">Info</Tag>
          <Tag class="is-rounded is-success">Success</Tag>
          <Tag class="is-rounded is-warning">Warning</Tag>
          <Tag class="is-rounded is-danger">Danger</Tag>

          <Snippet code={`
            <Tag class="is-rounded">Rounded</Tag>
          `} />

          <Tag class="is-delete" />
          <Tag class="is-delete is-black" />
          <Tag class="is-delete is-dark" />
          <Tag class="is-delete is-light" />
          <Tag class="is-delete is-white" />
          <Tag class="is-delete is-primary" />
          <Tag class="is-delete is-link" />
          <Tag class="is-delete is-info" />
          <Tag class="is-delete is-success" />
          <Tag class="is-delete is-warning" />
          <Tag class="is-delete is-danger" />
          <Snippet code={`
            <Tag class="is-delete" />
          `} />

          <Tag class="is-outlined">Outlined</Tag>
          <Tag class="is-outlined is-black">Black</Tag>
          <Tag class="is-outlined is-dark">Dark</Tag>
          <Tag class="is-outlined is-light">Light</Tag>
          <Tag class="is-outlined is-white">White</Tag>
          <Tag class="is-outlined is-primary">Primary</Tag>
          <Tag class="is-outlined is-link">Link</Tag>
          <Tag class="is-outlined is-info">Info</Tag>
          <Tag class="is-outlined is-success">Success</Tag>
          <Tag class="is-outlined is-warning">Warning</Tag>
          <Tag class="is-outlined is-danger">Danger</Tag>
        </section>

        <section class="demo__sample">
          <h2>标签列表</h2>

          <Tags>
            <Tag>One</Tag>
            <Tag>Two</Tag>
            <Tag>Three</Tag>
          </Tags>
          <Snippet code={`
            <Tags>
              <Tag>One</Tag>
              <Tag>Two</Tag>
              <Tag>Three</Tag>
            </Tags>
          `} />

          <Tags class="has-addons">
            <Tag>Package</Tag>
            <Tag class="is-primary">Ui</Tag>
          </Tags>
          <Snippet code={`
            <Tags class="has-addons">
              <Tag>Package</Tag>
              <Tag class="is-primary">Ui</Tag>
            </Tags>
          `} />

          <Tags class="has-addons">
            <Tag class="is-danger">Package</Tag>
            <Tag class="is-delete" />
          </Tags>
          <Snippet code={`
            <Tags class="has-addons">
              <Tag class="is-danger">Package</Tag>
              <Tag class="is-delete"/>
            </Tags>
          `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
