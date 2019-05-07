import m from 'mithril';
import { ProgressCircle } from '../../elements/Progress/ProgressCircle.js';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

const progressList = new Array(20).fill(0).map((value, index) => index * 5);

const colors = [
  'is-black',
  'is-dark',
  'is-light',
  'is-white',
  'is-primary',
  'is-link',
  'is-info',
  'is-success',
  'is-warning',
  'is-danger',
];

export const ProgressCirclePage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="进度环">

        <section class="demo__sample">
          <h2>示例</h2>

          <ProgressCircle />

          <Snippet code={`
            <ProgressCircle/>
          `} />
        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <ProgressCircle class="is-black" />
          <ProgressCircle class="is-dark" />
          <ProgressCircle class="is-light" />
          <ProgressCircle class="is-white" />
          <ProgressCircle class="is-primary" />
          <ProgressCircle class="is-link" />
          <ProgressCircle class="is-info" />
          <ProgressCircle class="is-success" />
          <ProgressCircle class="is-warning" />
          <ProgressCircle class="is-danger" />
          <Snippet code={`
            <ProgressCircle class="is-black"/>
            <ProgressCircle class="is-dark"/>
            <ProgressCircle class="is-light"/>
            <ProgressCircle class="is-white"/>
            <ProgressCircle class="is-primary"/>
            <ProgressCircle class="is-link"/>
            <ProgressCircle class="is-info"/>
            <ProgressCircle class="is-success"/>
            <ProgressCircle class="is-warning"/>
            <ProgressCircle class="is-danger"/>
          `} />
        </section>

        <section class="demo__sample">
          <h2>处理中</h2>
          {
            colors.map(color => (
              <ProgressCircle class={color} isPending={true} />
            ))
          }
        </section>

        <section class="demo__sample">
          <h2>进度</h2>
          {
            colors.map(color => (
              <div>
                {
                  progressList.map(progress => (
                    <ProgressCircle class={color} progress={progress} />
                  ))
                }
              </div>
            ))
          }
        </section>

      </LayoutWithTitleBar>
    );
  },
};
