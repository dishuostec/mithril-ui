import m from 'mithril';
import classNames from 'classnames';
import './TabBar.scss';
import Tabs from '../Tabs/Tabs';

const TabBar = {
  view: (vnode) => {
    const { class: className, activeIndex, onchange, list } = vnode.attrs;

    return (
      <footer class={classNames('tab-bar', className)}>
        <Tabs
          class="is-toggle is-fullwidth is-vertical"
          activeIndex={activeIndex}
          onchange={onchange}
          list={list} />
      </footer>
    );
  },
};

export default TabBar;
