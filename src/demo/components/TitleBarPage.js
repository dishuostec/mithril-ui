import m from 'mithril';
import { TitleBar } from '../../components/TitleBar/TitleBar';
import { IconUi } from '../../elements/Icon/IconUi';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const TitleBarPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="标题栏">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <TitleBar title="标题文字" />
          </p>
          <Snippet code={`
            <TitleBar title="标题文字" />
          `} />

          <p class="demo__preview">
            <TitleBar title="没有按钮" noGoBack={true} />
          </p>
          <Snippet code={`
            <TitleBar title="没有按钮" noGoBack={true} />
          `} />

          <p class="demo__preview">
            <TitleBar title="带附加内容" titleAddon={<IconUi icon="triangle-right-outline" />} />
          </p>
          <Snippet code={`
            <TitleBar title="带附加内容" titleAddon={<IconUi icon="triangle-right-outline" />} />
          `} />

          <p class="demo__preview">
            <TitleBar title={['标题文字', <IconUi icon="triangle-down" />]} />
          </p>
          <Snippet code={`
            <TitleBar title={['标题文字', <IconUi icon="triangle-down" />]} />
          `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
