import m from 'mithril';
import classNames from 'classnames';
import './Timer.scss';
import TimerCounter from './TimerCounter';

const Timer = {
  COUNTER: TimerCounter,
  view: function ({ attrs: { tid, class: className, isMono = false } }) {
    return (
      <span class={classNames('timer', className, {
        'is-pending': TimerCounter.get(tid),
        'is-mono': isMono,
      })}>
        {TimerCounter.format(tid)}
      </span>
    );
  },
};

export default Timer;
