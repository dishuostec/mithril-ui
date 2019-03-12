import m from 'mithril';
import { PullDown } from '../../components/PullDown/PullDown';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const PullDownPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="下拉刷新">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview demo__sample__container">
            <PullDown
              mainElement={document.documentElement}
              triggerElement={document.documentElement}
              distThreshold={50}
              distMax={60}
              distReload={45}
              instructionsPullToRefresh="下拉刷新"
              instructionsReleaseToRefresh="松开刷新"
              instructionsRefreshing="正在获取数据"

              onRefresh={() => {
                alert('refresh');
              }}
            >
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
              <p>line</p>
            </PullDown>
          </p>
          <Snippet code={`
            <PullDown
              mainElement={document.documentElement}
              triggerElement={document.documentElement}
              distThreshold={50}
              distMax={60}
              distReload={45}
              instructionsPullToRefresh="下拉刷新"
              instructionsReleaseToRefresh="松开刷新"
              instructionsRefreshing="正在获取数据"

              onRefresh={() => {
                alert('refresh');
              }}
            >
              <p>line</p>
            </PullDown>
          `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
