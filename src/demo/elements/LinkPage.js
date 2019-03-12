import m from 'mithril';
import { Link } from '../../elements/Link/Link';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const LinkPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="链接">

        <section class="demo__sample">
          <h2>示例</h2>

          <Link to="/">链接（会产生新历史）</Link>

          <Snippet code={`
            <Link to="/">链接（会产生新历史）</Link>
          `} />

          <Link to="/" replace={true}>链接（不会产生新历史）</Link>

          <Snippet code={`
            <Link to="/" replace={true}>链接（不会产生新历史）</Link>
          `} />
        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <Link to="/" class="is-white">White</Link>
          <Link to="/" class="is-light">Light</Link>
          <Link to="/" class="is-dark">Dark</Link>
          <Link to="/" class="is-black">Black</Link>

          <Snippet code={`
            <Link to="/" class="is-white">White</Link>
            <Link to="/" class="is-light">Light</Link>
            <Link to="/" class="is-dark">Dark</Link>
            <Link to="/" class="is-black">Black</Link>
          `} />

          <Link to="/" class="is-primary">Primary</Link>
          <Link to="/" class="is-link">Link</Link>
          <Link to="/" class="is-info">Info</Link>
          <Link to="/" class="is-success">Success</Link>
          <Link to="/" class="is-warning">Warning</Link>
          <Link to="/" class="is-danger">Danger</Link>

          <Snippet code={`
            <Link to="/" class="is-primary">Primary</Link>
            <Link to="/" class="is-link">Link</Link>
            <Link to="/" class="is-info">Info</Link>
            <Link to="/" class="is-success">Success</Link>
            <Link to="/" class="is-warning">Warning</Link>
            <Link to="/" class="is-danger">Danger</Link>
          `} />
        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <Link to="/" class="has-underline">Underline</Link>
          <Snippet code={`
            <Link to="/" class="has-underline">Underline</Link>
          `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
