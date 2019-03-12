import m from 'mithril';
import { Button } from '../../elements/Button/Button';
import { Markdown } from '../../components/Markdown/Markdown';
import { MarkdownTest } from '../../components/Markdown/MarkdownTest';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

const DynamicContent = {
  content: 'test',

  change: () => {
    DynamicContent.content = 'test\n\n' + Date.now();
  },

  reset: () => {
    DynamicContent.content = 'test';
  },
};

export const MarkdownPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="弹窗">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <Markdown content="test" />
          </p>
          <Snippet code={`
            <Markdown content="test" />
          `} />

        </section>

        <section class="demo__sample">
          <h2>更新内容</h2>

          <p class="demo__preview">
            <Button onclick={() => {
              DynamicContent.change();
            }}>修改内容</Button>

            <Button onclick={() => {
              DynamicContent.reset();
            }}>重置内容</Button>

            <Markdown content={DynamicContent.content} />
          </p>
          <Snippet code={`
            <Markdown content="test" />
          `} />

        </section>

        <section class="demo__sample">
          <h2>测试</h2>

          <MarkdownTest />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
