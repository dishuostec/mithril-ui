import m from 'mithril';
import { Toast } from '../../components/Toast/Toast';
import { ToastModel } from '../../components/Toast/ToastModel';
import { Button } from '../../elements/Button/Button';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const ToastPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="弹窗">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <Button onclick={() => {
              ToastModel.setContent('内容');
            }}>打开弹窗</Button>

            <Button onclick={() => {
              ToastModel.setContent('很长的内容，'.repeat(5));
            }}>很长的内容</Button>

          </p>
          <Snippet code={`
            <Button onclick={() => {
              ToastModel.setContent('内容');
            }}>打开弹窗</Button>

            <Button onclick={() => {
              ToastModel.setContent('很长的内容，'.repeat(5));
            }}>很长的内容</Button>
          `} />

          <h3>自定义时间</h3>
          <p class="demo__preview">
            <Button onclick={() => {
              ToastModel.setContent('默认 3 秒后关闭');
            }}>默认 3 秒后关闭</Button>

            <Button onclick={() => {
              ToastModel.setContent('1 秒后关闭', 1000);
            }}>1 秒后关闭</Button>

            <Button onclick={() => {
              ToastModel.setContent('5 秒后关闭', 5000);
            }}>5 秒后关闭</Button>

          </p>
          <Snippet code={`
            <Button onclick={() => {
              ToastModel.setContent('默认 3 秒后关闭' );
            }}>默认 3 秒后关闭</Button>

            <Button onclick={() => {
              ToastModel.setContent('1 秒后关闭', 1000);
            }}>1 秒后关闭</Button>

            <Button onclick={() => {
              ToastModel.setContent('5 秒后关闭', 5000);
            }}>5 秒后关闭</Button>
          `} />


        </section>


        <Toast />

      </LayoutWithTitleBar>
    );
  },
};
