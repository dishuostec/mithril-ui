import m from 'mithril';
import classNames from 'classnames';
import TitleBar from '../components/TitleBar/TitleBar';
import TabBar from '../components/TabBar/TabBar';
import './LayoutWithTitleBar.scss';
import './LayoutWithTabBar.scss';

const LayoutDefault = {
  view: function ({ attrs: { title, noGoBack, titleAddon, tabIndex, tabOnChange, tabList, class: className }, children }) {
    return (
      <div id="layout" class={classNames('has-tabBar', 'has-titleBar', className)}>

        <TitleBar title={title} noGoBack={noGoBack} titleAddon={titleAddon} />

        {children}

        <TabBar
          activeIndex={tabIndex}
          onchange={tabOnChange}
          list={tabList}
        />
      </div>
    );
  },
};

export default LayoutDefault;
