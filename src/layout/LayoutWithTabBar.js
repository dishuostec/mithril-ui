import m from 'mithril';
import classNames from 'classnames';
import { TabBar } from '../components/TabBar/TabBar';
import './LayoutWithTitleBar.scss';

export const LayoutWithTabBar = {
  view: function ({ attrs: { tabIndex, tabOnChange, tabList, class: className }, children }) {
    return (
      <div id="layout" class={classNames('has-tabBar', className)}>

        {children}

        <TabBar
          id="tabBar"
          activeIndex={tabIndex}
          onchange={tabOnChange}
          list={tabList}
        />
      </div>
    );
  },
};
