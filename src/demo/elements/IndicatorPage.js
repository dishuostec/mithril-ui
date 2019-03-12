import m from 'mithril';
import { Indicator } from '../../elements/Indicator/Indicator';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const IndicatorPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="指示器">

        <section class="demo__sample">
          <h2>示例</h2>

          <Indicator />
          <Indicator type="ring" />
          <Indicator type="facebook" />
          <Snippet code={`
            <Indicator />
            <Indicator type="facebook"/>
            <Indicator type="ring"/>
          `} />
        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <Indicator class="is-black">Black</Indicator>
          <Indicator class="is-dark">Dark</Indicator>
          <Indicator class="is-light">Light</Indicator>
          <Indicator class="is-white">White</Indicator>
          <Indicator class="is-primary">Primary</Indicator>
          <Indicator class="is-link">Link</Indicator>
          <Indicator class="is-info">Info</Indicator>
          <Indicator class="is-success">Success</Indicator>
          <Indicator class="is-warning">Warning</Indicator>
          <Indicator class="is-danger">Danger</Indicator>
          <Snippet code={`
          `} />

          <Indicator type="ring" class="is-black">Black</Indicator>
          <Indicator type="ring" class="is-dark">Dark</Indicator>
          <Indicator type="ring" class="is-light">Light</Indicator>
          <Indicator type="ring" class="is-white">White</Indicator>
          <Indicator type="ring" class="is-primary">Primary</Indicator>
          <Indicator type="ring" class="is-link">Link</Indicator>
          <Indicator type="ring" class="is-info">Info</Indicator>
          <Indicator type="ring" class="is-success">Success</Indicator>
          <Indicator type="ring" class="is-warning">Warning</Indicator>
          <Indicator type="ring" class="is-danger">Danger</Indicator>
          <Snippet code={`
          `} />

          <Indicator type="facebook" class="is-black">Black</Indicator>
          <Indicator type="facebook" class="is-dark">Dark</Indicator>
          <Indicator type="facebook" class="is-light">Light</Indicator>
          <Indicator type="facebook" class="is-white">White</Indicator>
          <Indicator type="facebook" class="is-primary">Primary</Indicator>
          <Indicator type="facebook" class="is-link">Link</Indicator>
          <Indicator type="facebook" class="is-info">Info</Indicator>
          <Indicator type="facebook" class="is-success">Success</Indicator>
          <Indicator type="facebook" class="is-warning">Warning</Indicator>
          <Indicator type="facebook" class="is-danger">Danger</Indicator>
          <Snippet code={`
          `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
