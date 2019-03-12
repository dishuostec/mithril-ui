import m from 'mithril';
import { IconFa } from '../../elements/Icon/IconFa';
import { Tabs } from '../../components/Tabs/Tabs';
import { Link } from '../../elements/Link/Link';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

let demoTabIndex = 1;

const demoTabs = [
  <Link>电话</Link>,
  <Link>录音</Link>,
  <Link>聊天</Link>,
  <Link>邮件</Link>,
];

const demoTabsWithIcon = [
  <Link><IconFa icon="phone" /><span>电话</span></Link>,
  <Link><IconFa icon="microphone" /><span>录音</span></Link>,
  <Link><IconFa icon="comments" /><span>聊天</span></Link>,
  <Link><IconFa icon="envelope" /><span>邮件</span></Link>,
];

const onchange = (index) => {
  demoTabIndex = index;
};

export const TabsPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="标签页">

        <section class="demo__sample">
          <h2>示例</h2>

          <Snippet code={`
            let demoTabIndex = 1;

            const demoTabs = [
              <Link>电话</Link>,
              <Link>录音</Link>,
              <Link>聊天</Link>,
              <Link>邮件</Link>,
            ];

            const demoTabsWithIcon = [
              <Link><IconFa icon="phone" /><span>电话</span></Link>,
              <Link><IconFa icon="microphone" /><span>录音</span></Link>,
              <Link><IconFa icon="comments" /><span>聊天</span></Link>,
              <Link><IconFa icon="envelope" /><span>邮件</span></Link>,
            ];

            const onchange = (index) => {
              demoTabIndex = index;
            };
                      
          `} />

          <p class="demo__preview">
            <Tabs
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          </p>
          <Snippet code={`
            <Tabs
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          `} />

          <h3>居中对齐</h3>
          <p class="demo__preview">
            <Tabs
              class="is-centered"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-centered"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          `} />

          <h3>右对齐</h3>
          <p class="demo__preview">
            <Tabs
              class="is-right"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-right"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          `} />
        </section>

        <section class="demo__sample">
          <h2>图标</h2>

          <p class="demo__preview">
            <Tabs
              class="is-centered"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-centered"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

          <h3>垂直</h3>
          <p class="demo__preview">
            <Tabs
              class="is-centered is-vertical"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-centered is-vertical"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />
        </section>

        <section class="demo__sample">
          <h2>尺寸</h2>

          <h3>小</h3>
          <p class="demo__preview">
            <Tabs
              class="is-small"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-small"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          `} />

          <h3>中</h3>
          <p class="demo__preview">
            <Tabs
              class="is-dedium"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-dedium"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          `} />
          <h3>大</h3>
          <p class="demo__preview">
            <Tabs
              class="is-large"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-large"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabs}
            />
          `} />
        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <h3>boxed</h3>
          <p class="demo__preview">
            <Tabs
              class="is-boxed"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-boxed"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

          <h3>toggle</h3>
          <p class="demo__preview">
            <Tabs
              class="is-toggle"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-toggle"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

          <h3>toggle rounded</h3>
          <p class="demo__preview">
            <Tabs
              class="is-toggle is-toggle-rounded"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-toggle is-toggle-rounded"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

          <h3>fullwidth</h3>
          <p class="demo__preview">
            <Tabs
              class="is-fullwidth"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-fullwidth"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

          <h3>fullwidth vertical</h3>
          <p class="demo__preview">
            <Tabs
              class="is-fullwidth is-vertical"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-fullwidth is-vertical"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

          <h3>toggle fullwidth vertical</h3>
          <p class="demo__preview">
            <Tabs
              class="is-toggle is-fullwidth is-vertical"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          </p>
          <Snippet code={`
            <Tabs
              class="is-toggle is-fullwidth is-vertical"
              activeIndex={demoTabIndex}
              onchange={onchange}
              list={demoTabsWithIcon}
            />
          `} />

        </section>
      </LayoutWithTitleBar>
    );
  },
};
