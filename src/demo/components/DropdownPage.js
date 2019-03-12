import m from 'mithril';
import { DropdownDivider } from '../../components/Dropdown/DropdownDivider';
import { DropdownLink } from '../../components/Dropdown/DropdownLink';
import { DropdownItem } from '../../components/Dropdown/DropdownItem';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const DropdownPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="下拉列表">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <Dropdown text="Links">
              <DropdownLink>Link 1</DropdownLink>
              <DropdownLink isActive={true}>Link 2</DropdownLink>
              <DropdownLink>Link 3</DropdownLink>
              <DropdownLink>Link 4</DropdownLink>
              <DropdownDivider />
              <DropdownLink>Link 5</DropdownLink>
            </Dropdown>
          </p>
          <Snippet code={`
            <Dropdown text="Links">
              <DropdownLink>Link 1</DropdownLink>
              <DropdownLink isActive={true}>Link 2</DropdownLink>
              <DropdownLink>Link 3</DropdownLink>
              <DropdownLink>Link 4</DropdownLink>
              <DropdownDivider />
              <DropdownLink>Link 5</DropdownLink>
            </Dropdown>
          `} />

        </section>

        <section class="demo__sample">
          <h2>其他内容</h2>

          <p class="demo__preview">
            <Dropdown text="Content">
              <DropdownItem>
                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
              </DropdownItem>
              <DropdownDivider />
              <DropdownLink>Link</DropdownLink>
            </Dropdown>
          </p>
          <Snippet code={`
            <Dropdown text="Content">
              <DropdownItem>
                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem>
                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
              </DropdownItem>
              <DropdownDivider />
              <DropdownLink>Link</DropdownLink>
            </Dropdown>
          `} />

        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <h3>右对齐</h3>

          <p class="demo__preview demo__preview--align-right">
            <Dropdown text="Links" isRight={true}>
              <DropdownLink>Link 1</DropdownLink>
              <DropdownLink>Link 2</DropdownLink>
              <DropdownLink>Link 3</DropdownLink>
            </Dropdown>
          </p>
          <Snippet code={`
            <Dropdown text="Links" isRight={true}>
              <DropdownLink>Link 1</DropdownLink>
              <DropdownLink>Link 2</DropdownLink>
              <DropdownLink>Link 3</DropdownLink>
            </Dropdown>
          `} />

          <h3>向上弹出</h3>

          <p class="demo__preview">
            <Dropdown text="Links" isDropup={true}>
              <DropdownLink>Link 1</DropdownLink>
              <DropdownLink isActive={true}>Link 2</DropdownLink>
              <DropdownLink>Link 3</DropdownLink>
              <DropdownLink>Link 4</DropdownLink>
              <DropdownDivider />
              <DropdownLink>Link 5</DropdownLink>
            </Dropdown>
          </p>
          <Snippet code={`
            <Dropdown text="Links" isDropup={true}>
              <DropdownLink>Link 1</DropdownLink>
              <DropdownLink isActive={true}>Link 2</DropdownLink>
              <DropdownLink>Link 3</DropdownLink>
              <DropdownLink>Link 4</DropdownLink>
              <DropdownDivider />
              <DropdownLink>Link 5</DropdownLink>
            </Dropdown>
           `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
