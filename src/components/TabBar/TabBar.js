import m from 'mithril';
import classNames from 'classnames';
import './TabBar.scss';
import { Tabs } from '../Tabs/Tabs';

export const TabBar = {
  view: (vnode) => {
    const { class: className, activeIndex, onchange, list, ...props } = vnode.attrs;

    return (
      <footer class={classNames('tab-bar', className)} {...props}>
        <Tabs
          class="is-toggle is-fullwidth is-vertical"
          activeIndex={activeIndex}
          onchange={onchange}
          list={list} />
      </footer>
    );
  },
};
