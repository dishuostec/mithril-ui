import m from 'mithril';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const TitlePage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="标签">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview demo__preview--icon">
            <h1>标题 h1</h1>
            <h2>标题 h2</h2>
            <h3>标题 h3</h3>
            <h4>标题 h4</h4>
            <h5>标题 h5</h5>
            <h6>标题 h6</h6>
          </p>

          <Snippet code={`
            <h1>标题 h1</h1>
            <h2>标题 h2</h2>
            <h3>标题 h3</h3>
            <h4>标题 h4</h4>
            <h5>标题 h5</h5>
            <h6>标题 h6</h6>
          `} />
          <p class="demo__preview demo__preview--icon">
            <p class="is-size-1">Size 1</p>
            <p class="is-size-2">Size 2</p>
            <p class="is-size-3">Size 3</p>
            <p class="is-size-4">Size 4</p>
            <p class="is-size-5">Size 5</p>
            <p class="is-size-6">Size 6</p>
            <p class="is-size-7">Size 7</p>
          </p>

          <Snippet code={`
            <p class="is-size-1">Size 1</p>
            <p class="is-size-2">Size 2</p>
            <p class="is-size-3">Size 3</p>
            <p class="is-size-4">Size 4</p>
            <p class="is-size-5">Size 5</p>
            <p class="is-size-6">Size 6</p>
            <p class="is-size-7">Size 7</p>
          `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
