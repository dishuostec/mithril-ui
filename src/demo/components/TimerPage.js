import m from 'mithril';
import { Timer } from '../../components/Timer/Timer';
import { Button } from '../../elements/Button/Button';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

const testTimerList = [];

let count = 0;

export const TimerPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="弹窗">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <Timer tid={'demo/timer'} isMono={true} />

            <Button
              onclick={() => {
                Timer.COUNTER.start('demo/timer', 3, () => {
                  alert('expired');
                });
              }}
            >启动</Button>
          </p>
          <Snippet code={`
            <Timer tid={'demo/timer'} isMono={true} />

            <Button
              onclick={() => {
                Timer.COUNTER.start('demo/timer', 3, () => {
                  alert('expired');
                });
              }}
            >启动</Button>
          `} />

        </section>

        <section class="demo__sample">
          <h2>动态添加</h2>
          <p class="demo__preview">

            <Button
              onclick={() => {
                const tid = ++count;
                const countdown = (testTimerList.length + 1) * 5;

                const onExpired = () => {
                  const index = testTimerList.findIndex(item => item.tid === tid);
                  if (index >= 0) {
                    testTimerList.splice(index, 1);
                  }
                };

                testTimerList.push({
                  tid,
                  countdown: countdown,
                  onExpired,
                });

                Timer.COUNTER.start(tid, countdown, onExpired);
              }}>
              添加计时器
            </Button>

            <Button
              onclick={() => {
                testTimerList.forEach(timer => {
                  timer.countdown += 5;
                  const { tid, countdown, onExpired } = timer;
                  Timer.COUNTER.start(tid, countdown, onExpired);
                });
              }}
            >
              延长时间
            </Button>

            {testTimerList.map(({ tid }) => (
              <p>{tid} <Timer tid={tid} isMono={true} /></p>
            ))}

          </p>
        </section>

      </LayoutWithTitleBar>
    );
  },
};
