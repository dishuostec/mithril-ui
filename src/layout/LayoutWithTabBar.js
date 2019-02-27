import m from 'mithril';
import classNames from 'classnames';
import TabBar from '../components/TabBar/TabBar';
import './LayoutWithTitleBar.scss';

const LayoutWithTitleBar = {
  view: function ({ attrs: { tabIndex, tabOnChange, tabList, class: className }, children }) {
    return (
      <div id="layout" class={classNames('has-tabBar', className)}>

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

export default LayoutWithTitleBar;
