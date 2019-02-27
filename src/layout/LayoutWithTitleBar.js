import m from 'mithril';
import TitleBar from '../components/TitleBar/TitleBar';
import './LayoutWithTitleBar.scss';

const LayoutWithTitleBar = {
  view: function ({ attrs: { title, class: className, noGoBack, titleAddon }, children }) {
    return (
      <div id="layout" class="has_titleBar">
        <TitleBar title={title} class={className} noGoBack={noGoBack} titleAddon={titleAddon} />
        {children}
      </div>
    );
  },
};

export default LayoutWithTitleBar;
