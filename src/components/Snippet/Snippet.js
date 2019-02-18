import m from 'mithril';
import dedent from 'dedent';
import hljs from 'highlight.js/lib/highlight';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import './Snippet.scss';

hljs.registerLanguage('html', html);

const Snippet = {
  oncreate: (vnode) => {
    hljs.highlightBlock(vnode.dom.querySelector('code'));
  },
  view: ({ attrs: { code } }) => (
    <details>
      <summary>代码</summary>
      <pre class="code"><code>{dedent(code)}</code></pre>
    </details>
  ),
};

export default Snippet;
