import m from 'mithril';
import { Menu } from '../../components/Menu/Menu';
import { MenuItem } from '../../components/Menu/MenuItem';
import { MenuLabel } from '../../components/Menu/MenuLabel';
import { MenuList } from '../../components/Menu/MenuList';
import { IconFa } from '../../elements/Icon/IconFa';
import { IconUi } from '../../elements/Icon/IconUi';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const MenuPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="菜单">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__sample__container demo__preview">
            <Menu>

              <MenuLabel>标题</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
                <MenuItem title="Item 3" />
              </MenuList>

              <MenuLabel>标题</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
              </MenuList>

            </Menu>
          </p>
          <Snippet code={`
            <Menu>

              <MenuLabel>标题</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
                <MenuItem title="Item 3" />
              </MenuList>

              <MenuLabel>标题</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
              </MenuList>

            </Menu>
          `} />

        </section>

        <section class="demo__sample">
          <h2>附加内容</h2>

          <p class="demo__sample__container demo__preview">
            <Menu>

              <MenuLabel>添加文字</MenuLabel>
              <MenuList>
                <MenuItem title="Item" tip="tip" />
                <MenuItem title="Item" subtitle="subtitle" />
              </MenuList>

              <MenuLabel>图标</MenuLabel>
              <MenuList>
                <MenuItem title="Item" iconRight={<IconUi icon="triangle-right-outline" />} />
                <MenuItem title="Item" iconRight={<IconUi icon="triangle-right-outline" />} />
                <MenuItem title="Item" iconLeft={<IconFa icon="briefcase" />} />
                <MenuItem title="Item" iconLeft={<IconFa icon="briefcase" />} />
                <MenuItem title="Item"
                  iconLeft={<IconFa icon="briefcase" />}
                  iconRight={<IconUi icon="triangle-right-outline" />} />
                <MenuItem
                  title="Item"
                  subtitle="subtitle"
                  tip="tip"
                  iconLeft={<IconFa icon="briefcase" />}
                  iconRight={<IconUi icon="triangle-right-outline" />}
                />
              </MenuList>

            </Menu>
          </p>
          <Snippet code={`
            <Menu>

              <MenuLabel>添加文字</MenuLabel>
              <MenuList>
                <MenuItem title="Item" tip="tip" />
                <MenuItem title="Item" subtitle="subtitle" />
              </MenuList>

              <MenuLabel>图标</MenuLabel>
              <MenuList>
                <MenuItem title="Item" iconRight={<IconUi icon="triangle-right-outline" />} />
                <MenuItem title="Item" iconRight={<IconUi icon="triangle-right-outline" />} />
                <MenuItem title="Item" iconLeft={<IconFa icon="briefcase" />} />
                <MenuItem title="Item" iconLeft={<IconFa icon="briefcase" />} />
                <MenuItem title="Item"
                  iconLeft={<IconFa icon="briefcase" />}
                  iconRight={<IconUi icon="triangle-right-outline" />} />
                <MenuItem
                  title="Item"
                  subtitle="subtitle"
                  tip="tip"
                  iconLeft={<IconFa icon="briefcase" />}
                  iconRight={<IconUi icon="triangle-right-outline" />}
                />
              </MenuList>

            </Menu>
          `} />

        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <h3>通栏</h3>
          <p class="demo__sample__container demo__preview">

            <Menu>
              <MenuLabel>默认</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
                <MenuItem title="Item 3" />
              </MenuList>
            </Menu>

            <Menu class="is-fullwidth">
              <MenuLabel>通栏</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
                <MenuItem title="Item 3" />
              </MenuList>
            </Menu>

          </p>
          <Snippet code={`
            <Menu>
              <MenuLabel>默认</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
                <MenuItem title="Item 3" />
              </MenuList>
            </Menu>

            <Menu class="is-fullwidth">
              <MenuLabel>通栏</MenuLabel>
              <MenuList>
                <MenuItem title="Item 1" />
                <MenuItem title="Item 2" />
                <MenuItem title="Item 3" />
              </MenuList>
            </Menu>
          `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
