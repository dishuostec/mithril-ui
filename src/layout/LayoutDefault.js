import m from 'mithril';
import classNames from 'classnames';
import { TitleBar } from '../components/TitleBar/TitleBar';
import { TabBar } from '../components/TabBar/TabBar';
import './LayoutWithTitleBar.scss';
import './LayoutWithTabBar.scss';

export const LayoutDefault = {
  view: function ({ attrs: { title, noGoBack, titleAddon, tabIndex, tabOnChange, tabList, class: className }, children }) {
    return (
      <div id="layout"
        class={classNames('has-tabBar', 'has-titleBar', className)}>

        <TitleBar
          id="titleBar"
          title={title} noGoBack={noGoBack} titleAddon={titleAddon} />

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
