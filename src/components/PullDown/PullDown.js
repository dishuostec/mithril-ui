import m from 'mithril';
import classNames from 'classnames';
import ptr from './library/init';
import './PullDown.scss';

export const PullDown = () => {
  let pulltorefresh;

  return ({
    oncreate: (vnode) => {
      const {
        distThreshold,
        distMax,
        distReload,
        distIgnore,
        mainElement,
        triggerElement,
        // ptrElement,
        // classPrefix,
        cssProp,
        iconArrow,
        iconRefreshing,
        instructionsPullToRefresh,
        instructionsReleaseToRefresh,
        instructionsRefreshing,
        refreshTimeout,
        // getMarkup,
        // getStyles,
        // onInit,
        onRefresh,
        resistanceFunction,
        shouldPullToRefresh,
      } = vnode.attrs;

      pulltorefresh = ptr.init({
        distThreshold,
        distMax,
        distReload,
        distIgnore,
        mainElement: mainElement || vnode.dom,
        triggerElement: triggerElement || vnode.dom,
        cssProp,
        iconArrow,
        iconRefreshing,
        instructionsPullToRefresh,
        instructionsReleaseToRefresh,
        instructionsRefreshing,
        refreshTimeout,
        onRefresh,
        resistanceFunction,
        shouldPullToRefresh,
      });

      vnode.oncreate && vnode.oncreate(vnode);
    },
    onremove: (vnode) => {
      ptr.destroyAll();
      pulltorefresh = null;
      vnode.attrs.onremove && vnode.attrs.onremove(vnode);
    },
    view: ({ attrs: { class: className }, children }) => (
      <div class={classNames('pulltorefresh', className)}>
        <div class="ha_ptr">
          <div class="ha_ptr__box">
            <div class="ha_ptr__content">
              <div class="ha_ptr__icon" />
              <div class="ha_ptr__text" />
            </div>
          </div>
        </div>
        {children}
      </div>
    ),
  });
};
