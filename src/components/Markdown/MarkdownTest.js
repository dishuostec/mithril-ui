import m from 'mithril';
import { Markdown } from './Markdown';
import { readFileSync } from 'fs';

const testMarkdown = readFileSync(__dirname + '/test.md', 'utf8');

export const MarkdownTest = {
  view: function () {
    return <Markdown content={testMarkdown} />;
  },
};
