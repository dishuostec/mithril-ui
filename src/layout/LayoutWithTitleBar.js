import m from 'mithril';
import TitleBar from '../components/TitleBar/TitleBar';


const LayoutWithTitleBar = {
  view: function ({ attrs: { title, clickTitle }, children }) {
    return (
      <div id="layout" class="has_titleBar">
        <TitleBar title={title} clickTitle={clickTitle} />

        {children}
      </div>
    );
  },
};

export default LayoutWithTitleBar;
