import m from 'mithril';
import { Control } from '../../form/Control/Control';
import { Select } from '../../form/Select/Select.js';
import { Field } from '../../form/Field/Field.js';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';
import { IconFa } from '../../elements/Icon/IconFa.js';

export const SelectPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="选择框">

        <section class="demo__sample">
          <h2>示例</h2>

          <h3>单选</h3>
          <Select>
            <option>Select dropdown</option>
            <option>With options</option>
          </Select>

          <Snippet code={`
            <Select>
              <option>Select dropdown</option>
              <option>With options</option>
            </Select>
          `} />

          <h3>多选</h3>

          <Select multiple={true} size={8}>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </Select>

          <Snippet code={`
            <Select multiple={true} size={8}>
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brazil">Brazil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Guyana">Guyana</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Suriname">Suriname</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
            </Select>
          `} />

        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <Field>
            <Control>
              <Select class="is-primary">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>
          <Field>
            <Control>
              <Select class="is-info">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>
          <Field>
            <Control>
              <Select class="is-success">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>
          <Field>
            <Control>
              <Select class="is-warning">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>
          <Field>
            <Control>
              <Select class="is-danger">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Snippet code={`
            <Field>
                    <Control>
                    <Select class="is-primary">
                    <option>Select dropdown</option>
                    <option>With options</option>
                    </Select>
                    </Control>
                    </Field>
            <Field>
                    <Control>
                    <Select class="is-info">
                    <option>Select dropdown</option>
                    <option>With options</option>
                    </Select>
                    </Control>
                    </Field>
            <Field>
                    <Control>
                    <Select class="is-success">
                    <option>Select dropdown</option>
                    <option>With options</option>
                    </Select>
                    </Control>
                    </Field>
            <Field>
                    <Control>
                    <Select class="is-warning">
                    <option>Select dropdown</option>
                    <option>With options</option>
                    </Select>
                    </Control>
                    </Field>
            <Field>
                    <Control>
                    <Select class="is-danger">
                    <option>Select dropdown</option>
                    <option>With options</option>
                    </Select>
                    </Control>
                    </Field>
          `} />

        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <h3>圆角</h3>
          <Select class="is-rounded">
            <option>Rounded dropdown</option>
            <option>With options</option>
          </Select>

          <Snippet code={`
            <Select class="is-rounded">
              <option>Rounded dropdown</option>
              <option>With options</option>
            </Select>
          `} />

          <h3>大小</h3>

          <Field>
            <Control>
              <Select class="is-small">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Control>
              <Select class="">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Control>
              <Select class="is-medium">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Field>
            <Control>
              <Select class="is-large">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control>
                <Select class="is-small">
                  <option>Select dropdown</option>
                  <option>With options</option>
                </Select>
              </Control>
            </Field>

            <Field>
              <Control>
                <Select class="">
                  <option>Select dropdown</option>
                  <option>With options</option>
                </Select>
              </Control>
            </Field>

            <Field>
              <Control>
                <Select class="is-medium">
                  <option>Select dropdown</option>
                  <option>With options</option>
                </Select>
              </Control>
            </Field>

            <Field>
              <Control>
                <Select class="is-large">
                  <option>Select dropdown</option>
                  <option>With options</option>
                </Select>
              </Control>
            </Field>
          `} />

        </section>

        <section class="demo__sample">
          <h2>状态</h2>

          <h3>正常</h3>

          <Field>
            <Control>
              <Select class="">
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Snippet code={`
            <Field>
                    <Control>
                    <Select class="">
                    <option>Select dropdown</option>
                    <option>With options</option>
                    </Select>
                    </Control>
                    </Field>
          `} />

          <h3>悬停</h3>

          <Field>
            <Control>
              <Select isHovered={true}>
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control>
                <Select isHovered={true}>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </Select>
              </Control>
            </Field>
          `} />

          <h3>聚焦</h3>

          <Field>
            <Control>
              <Select isFocused={true}>
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control>
                <Select isFocused={true}>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </Select>
              </Control>
            </Field>
          `} />

          <h3>加载中</h3>

          <Field>
            <Control>
              <Select isLoading={true}>
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control>
                <Select isLoading={true}>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </Select>
              </Control>
            </Field>
          `} />

        </section>

        <section class="demo__sample">
          <h2>添加图标</h2>

          <Field>
            <Control class="has-icons-left">
              <Select>
                <option>Select dropdown</option>
                <option>With options</option>
              </Select>
              <IconFa icon="globe" class="is-left" />
            </Control>
          </Field>
          <Snippet code={`
          `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
