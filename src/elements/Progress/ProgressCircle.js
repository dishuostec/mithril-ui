import m from 'mithril';
import classNames from 'classnames';

import './ProgressCircle.scss';

export const ProgressCircle = {
  view: ({ attrs: { class: className, progress, isPending } }) => (
    <span class={classNames('progress', 'progress-circle', className, {
      [`is-${progress}`]: progress !== void 0,
      'is-pending': isPending,
    })}>
      <span class="progress-circle-half" />
      <span class="progress-circle-rect">
        <span class="progress-circle-bar" />
      </span>
    </span>
  ),
};
