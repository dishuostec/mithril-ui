import m from 'mithril';
import { TabBar } from '../../components/TabBar/TabBar';
import { IconFa } from '../../elements/Icon/IconFa';
import { Link } from '../../elements/Link/Link';
import { LayoutDefault } from '../../layout/LayoutDefault';
import { Snippet } from '../../components/Snippet/Snippet';

let demoTabIndex = 1;

const demoTabsWithIcon = [
  <Link><IconFa icon="phone" /><span class="is-size-7">电话</span></Link>,
  <Link><IconFa icon="microphone" /><span class="is-size-7">录音</span></Link>,
  <Link><IconFa icon="comments" /><span class="is-size-7">聊天</span></Link>,
  <Link><IconFa icon="envelope" /><span class="is-size-7">邮件</span></Link>,
];

const onchange = (index) => {
  demoTabIndex = index;
};

export const TabBarPage = {
  view: () => {

    return (
      <LayoutDefault
        title="菜单"
        tabIndex={demoTabIndex}
        tabOnChange={onchange}
        tabList={demoTabsWithIcon}
      >

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <TabBar
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            let demoTabIndex = 1;

            const demoTabsWithIcon = [
              <Link><IconFa icon="phone" /><span class="is-size-7">电话</span></Link>,
              <Link><IconFa icon="microphone" /><span class="is-size-7">录音</span></Link>,
              <Link><IconFa icon="comments" /><span class="is-size-7">聊天</span></Link>,
              <Link><IconFa icon="envelope" /><span class="is-size-7">邮件</span></Link>,
            ];

            const onchange = (index) => {
              demoTabIndex = index;
            };
            
            <TabBar
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

        </section>

      </LayoutDefault>
    );
  },
};
