import m from 'mithril';
import { Button } from '../../elements/Button/Button';
import { ModalModel } from '../../components/Modal/ModalModel';
import { Modal } from '../../components/Modal/Modal';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';
import { readFileSync } from 'fs';

const testMarkdown = readFileSync(__dirname + '/testMarkdown.md', 'utf8');

export const ModalPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="弹窗">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <Button onclick={() => {
              ModalModel.setContent('内容');
            }}>打开弹窗</Button>

            <Button onclick={() => {
              ModalModel.setContent('很长的内容，'.repeat(5));
            }}>很长的内容</Button>

            <Button onclick={() => {
              ModalModel.setTitle('Markdown');
              ModalModel.setContent(testMarkdown);
              ModalModel.setIsMarkdown();
            }}>Markdown</Button>
          </p>
          <Snippet code={`
          `} />

          <p class="demo__preview">
            <Button
              onclick={() => {
                ModalModel.setTitle('标题');
                ModalModel.setContent('内容');
              }}
            >带标题</Button>
          </p>
          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>自定义按钮</h2>

          <p class="demo__preview">
            <Button
              onclick={() => {
                ModalModel.setContent('内容');
                ModalModel.addOperation((
                  <Button class="is-light" onclick={() => {
                    alert(1);
                    ModalModel.hide();
                  }}>自定义</Button>
                ));
              }}
            >自定义按钮</Button>
          </p>
          <Snippet code={`
          `} />

          <p class="demo__preview">
            <Button
              onclick={() => {
                ModalModel.setContent('内容');
                ModalModel.addOperation((
                  <Button class="is-info is-fullwidth" onclick={() => {
                    alert(1);
                    ModalModel.hide();
                  }}>自定义</Button>
                ));
              }}
            >通栏按钮</Button>
          </p>
          <Snippet code={`
          `} />

          <p class="demo__preview">
            <Button
              onclick={() => {
                ModalModel.setContent('内容');
                ModalModel.addOperation((
                  <Button class="is-light" onclick={() => {
                    alert(1);
                    ModalModel.hide();
                  }}>Button 1</Button>
                ));
                ModalModel.addOperation((
                  <Button class="is-primary" onclick={() => {
                    alert(2);
                    ModalModel.hide();
                  }}>Button 2</Button>
                ));
              }}
            >多个按钮</Button>
          </p>
          <Snippet code={`
          `} />

          <p class="demo__preview">
            <Button
              onclick={() => {
                ModalModel.setContent('内容');
                ModalModel.addOperation((
                  <Button class="is-light is-fullwidth" onclick={() => {
                    alert(1);
                    ModalModel.hide();
                  }}>Button 1</Button>
                ));
                ModalModel.addOperation((
                  <Button class="is-primary is-fullwidth" onclick={() => {
                    alert(2);
                    ModalModel.hide();
                  }}>Button 2</Button>
                ));
              }}
            >多个通栏按钮</Button>
          </p>
          <Snippet code={`
          `} />

        </section>

        <Modal />

      </LayoutWithTitleBar>
    );
  },
};
