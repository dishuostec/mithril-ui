import m from 'mithril';
import { Control } from '../../form/Control/Control';
import { Field } from '../../form/Field/Field';
import { InputNumber } from '../../form/Input/InputNumber';
import { InputPassword } from '../../form/Input/InputPassword';
import { InputText } from '../../form/Input/InputText';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const InputPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="文本框">

        <section class="demo__sample">
          <h2>示例</h2>

          <div>
            <InputText placeholder="Text input" />
            <InputPassword placeholder="Password input" />
            <InputNumber placeholder="Number input" />
          </div>

          <Snippet code={`
            <InputText placeholder="Text input" />
            <InputPassword placeholder="Password input" />
            <InputNumber placeholder="Number input" />
          `} />

        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <Field>
            <Control>
              <InputText class="is-primary" placeholder="Primary input" />
            </Control>
          </Field>

          <Field>
            <Control>
              <InputText class="is-info" placeholder="Info input" />
            </Control>
          </Field>

          <Field>
            <Control>
              <InputText class="is-success" placeholder="Success input" />
            </Control>
          </Field>

          <Field>
            <Control>
              <InputText class="is-warning" placeholder="Warning input" />
            </Control>
          </Field>

          <Field>
            <Control>
              <InputText class="is-danger" placeholder="Danger input" />
            </Control>
          </Field>

          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>尺寸</h2>

          <Field>
            <Control>
              <InputText class="is-small" placeholder="Small input" />
            </Control>
          </Field>

          <Field>
            <Control>
              <InputText placeholder="Normal input" />
            </Control>
          </Field>

          <Field>
            <Control>
              <InputText class="is-medium" placeholder="Medium input" />
            </Control>
          </Field>

          <Field>
            <Control>
              <InputText class="is-large" placeholder="Large input" />
            </Control>
          </Field>

          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <Field>
            <Control>
              <InputText class="is-rounded" placeholder="Rounded input" />
            </Control>
          </Field>

          <Snippet code={`
          `} />

          <Control>
            <InputText class="is-static" value="This text is static" />
          </Control>
          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>状态</h2>

          <h3>加载中</h3>

          <Field>
            <Control class="is-loading">
              <InputText placeholder="Loading input" />
            </Control>
          </Field>

          <Snippet code={`
          `} />

          <h3>禁用</h3>

          <Control>
            <InputText disabled placeholder="Disabled input" />
          </Control>

          <Snippet code={`
          `} />

          <h3>只读</h3>

          <Control>
            <InputText readonly value="This text is readonly" />
          </Control>

          <Control>
            <InputText class="is-static" readonly value="This text is static" />
          </Control>

          <Snippet code={`
          `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
