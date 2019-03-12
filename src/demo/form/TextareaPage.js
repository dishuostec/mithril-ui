import m from 'mithril';
import { Control } from '../../form/Control/Control';
import { Field } from '../../form/Field/Field';
import { Textarea } from '../../form/Input/Textarea';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const TextareaPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="多行文本框">

        <section class="demo__sample">
          <h2>示例</h2>

          <div>
            <Textarea placeholder="foo bar" />
          </div>

          <Snippet code={`
            <Textarea placeholder="foo bar" />
          `} />

        </section>

        <section class="demo__sample">
          <h2>颜色</h2>

          <Field>
            <Control>
              <Textarea class="is-primary" placeholder="Primary textarea" />
            </Control>
          </Field>

          <Field>
            <Control>
              <Textarea class="is-info" placeholder="Info textarea" />
            </Control>
          </Field>

          <Field>
            <Control>
              <Textarea class="is-success" placeholder="Success textarea" />
            </Control>
          </Field>

          <Field>
            <Control>
              <Textarea class="is-warning" placeholder="Warning textarea" />
            </Control>
          </Field>

          <Field>
            <Control>
              <Textarea class="is-danger" placeholder="Danger textarea" />
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control>
                <Textarea class="is-primary" placeholder="Primary textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Textarea class="is-info" placeholder="Info textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Textarea class="is-success" placeholder="Success textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Textarea class="is-warning" placeholder="Warning textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Textarea class="is-danger" placeholder="Danger textarea" />
              </Control>
            </Field>
          `} />

        </section>

        <section class="demo__sample">
          <h2>尺寸</h2>

          <Field>
            <Control>
              <Textarea class="is-small" placeholder="Small textarea" />
            </Control>
          </Field>

          <Field>
            <Control>
              <Textarea placeholder="Normal textarea" />
            </Control>
          </Field>

          <Field>
            <Control>
              <Textarea class="is-medium" placeholder="Medium textarea" />
            </Control>
          </Field>

          <Field>
            <Control>
              <Textarea class="is-large" placeholder="Large textarea" />
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control>
                <Textarea class="is-small" placeholder="Small textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Textarea placeholder="Normal textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Textarea class="is-medium" placeholder="Medium textarea" />
              </Control>
            </Field>

            <Field>
              <Control>
                <Textarea class="is-large" placeholder="Large textarea" />
              </Control>
            </Field>
          `} />

        </section>

        <section class="demo__sample">
          <h2>样式</h2>

          <Field>
            <Control>
              <Textarea class="is-rounded" placeholder="Rounded textarea" />
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control>
                <Textarea class="is-rounded" placeholder="Rounded textarea" />
              </Control>
            </Field>
          `} />

        </section>

        <section class="demo__sample">
          <h2>状态</h2>

          <h3>加载中</h3>

          <Field>
            <Control class="is-loading">
              <Textarea placeholder="Loading textarea" />
            </Control>
          </Field>

          <Snippet code={`
            <Field>
              <Control class="is-loading">
                <Textarea placeholder="Loading textarea" />
              </Control>
            </Field>
          `} />

          <h3>禁用</h3>

          <Control>
            <Textarea disabled placeholder="Disabled textarea" />
          </Control>

          <Snippet code={`
            <Control>
              <Textarea disabled placeholder="Disabled textarea" />
            </Control>
          `} />

          <h3>只读</h3>

          <Control>
            <Textarea readonly value="This text is readonly" />
          </Control>

          <Snippet code={`
            <Control>
              <Textarea readonly value="This text is readonly" />
            </Control>
          `} />

          <h3>固定大小</h3>

          <Control>
            <Textarea class="has-fixed-size" value="Fixed size textarea" />
          </Control>

          <Snippet code={`
            <Control>
              <Textarea class="has-fixed-size" value="Fixed size textarea" />
            </Control>
          `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
