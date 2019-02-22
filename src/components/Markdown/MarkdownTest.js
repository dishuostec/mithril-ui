import m from 'mithril';
import Markdown from './Markdown';
import { readFileSync } from 'fs';

const testMarkdown = readFileSync(__dirname + '/test.md', 'utf8');

const MarkdownTest = {
  view: function () {
    return <Markdown content={testMarkdown} />;
  },
};

export default MarkdownTest;
