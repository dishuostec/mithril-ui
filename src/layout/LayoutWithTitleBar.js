import m from 'mithril';
import classNames from 'classnames';
import TitleBar from '../components/TitleBar/TitleBar';
import './LayoutWithTitleBar.scss';

const LayoutWithTitleBar = {
  view: function ({ attrs: { title, class: className, noGoBack, titleAddon }, children }) {
    return (
      <div id="layout" class={classNames('has-titleBar', className)}>

        <TitleBar title={title} noGoBack={noGoBack} titleAddon={titleAddon} />

        {children}

      </div>
    );
  },
};

export default LayoutWithTitleBar;
