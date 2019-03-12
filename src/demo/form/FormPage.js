import m from 'mithril';
import { Button } from '../../elements/Button/Button';
import { InputNumber } from '../../form/Input/InputNumber';
import { InputPassword } from '../../form/Input/InputPassword';
import { InputTel } from '../../form/Input/InputTel';
import { Control } from '../../form/Control/Control';
import { Field } from '../../form/Field/Field';
import { FieldBody } from '../../form/Field/FieldBody';
import { FieldLabel } from '../../form/Field/FieldLabel';
import { Form } from '../../form/Form/Form';
import { Help } from '../../form/Help/Help';
import { InputText } from '../../form/Input/InputText';
import { Label } from '../../form/Label/Label';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const FormPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="表单">

        <section class="demo__sample">
          <h2>示例</h2>

          <Form>

            <Field>
              <Label>Name</Label>
              <Control>
                <InputText placeholder="foo" />
              </Control>
            </Field>

            <Field>
              <Label>Username</Label>
              <Control>
                <InputText class="is-success" placeholder="请输入用户名" value="张三" />
              </Control>
              <p class="help is-success">用户名可用</p>
            </Field>

            <Field class="is-grouped">
              <Control>
                <button class="button is-link">提交</button>
              </Control>
              <Control>
                <button class="button">取消</button>
              </Control>
            </Field>

          </Form>

          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>横向</h2>

          <Form>

            <Field class="is-horizontal">
              <FieldLabel>
                <Label>姓名</Label>
              </FieldLabel>

              <FieldBody>

                <Field class="has-addons">
                  <Control>
                    <InputText placeholder="foo" />
                  </Control>
                  <Control>
                    <InputText placeholder="bar" />
                  </Control>
                </Field>
              </FieldBody>

            </Field>

            <Field class="is-horizontal">
              <FieldLabel>
                <Label>手机</Label>
              </FieldLabel>

              <FieldBody>

                <Field class="has-addons has-addons-fullwidth">
                  <Control class="is-expanded">
                    <InputText placeholder="foo" />
                  </Control>
                </Field>

                <Field class="has-addons has-addons-fullwidth">
                  <Control class="is-expanded">
                    <InputText placeholder="bar" />
                  </Control>
                </Field>

                <p class="help">提示文字</p>

              </FieldBody>

            </Field>

            <Field>
              <Control class="buttons">
                <button class="button is-fullwidth is-link">提交</button>
                <button class="button is-fullwidth">取消</button>
              </Control>
            </Field>

          </Form>

          <Snippet code={`
          `} />

        </section>


        <section class="demo__sample">
          <h2>实例</h2>

          <h3>注册表单</h3>
          <Form>

            <Field>
              <Control>
                <InputText placeholder="姓名" />
              </Control>
            </Field>

            <Field>
              <Control>
                <InputTel placeholder="请输入手机号" />
              </Control>
            </Field>

            <Field class="is-horizontal">
              <FieldBody>
                <Field class="has-addons">
                  <Control class="is-expanded">
                    <InputNumber placeholder="请输入短信验证码" />
                  </Control>
                  <Control>
                    <Button class="is-medium is-size-5">获取验证码</Button>
                  </Control>
                </Field>
              </FieldBody>
            </Field>

            <Field>
              <Control>
                <InputPassword placeholder="请输入密码" />
              </Control>
            </Field>

            <Field>
              <Control class="buttons">
                <button class="button is-fullwidth is-medium is-link">提交</button>
                <button class="button is-fullwidth is-text">我已有账号，直接登录</button>
              </Control>
            </Field>

            <Field>
              <Control class="buttons">
                <button class="button is-fullwidth is-medium is-link">提交</button>
              </Control>
            </Field>

            <Field class="is-grouped">
              <Control class="is-expanded">
                <button class="button is-fullwidth is-text has-text-left">选项一</button>
              </Control>
              <Control class="is-expanded">
                <button class="button is-fullwidth is-text has-text-right">选项二</button>
              </Control>
            </Field>


          </Form>

          <Snippet code={`
          `} />

          <h3>两端对齐</h3>
          <Form>

            <Field class="is-horizontal">
              <FieldLabel>
                <Label>账号</Label>
              </FieldLabel>

              <FieldBody>
                <Field>
                  <Control class="is-expanded">
                    <InputText class="has-text-right" placeholder="bar" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>

            <Field class="is-horizontal">
              <FieldLabel>
                <Label>项目名称很长</Label>
              </FieldLabel>

              <FieldBody>
                <Field>
                  <Control class="is-expanded">
                    <InputText class="has-text-right" placeholder="bar" />
                  </Control>
                </Field>
              </FieldBody>
            </Field>

          </Form>

        </section>


        <section class="demo__sample">
          <h2>按钮位置</h2>

          <h3>组合</h3>

          <Field class="has-addons">
            <Control>
              <button class="button is-link">提交</button>
            </Control>
            <Control>
              <button class="button">取消</button>
            </Control>
          </Field>

          <Field class="has-addons has-addons-centered">
            <Control>
              <button class="button is-link">提交</button>
            </Control>
            <Control>
              <button class="button">取消</button>
            </Control>
          </Field>

          <Field class="has-addons has-addons-right">
            <Control>
              <button class="button is-link">提交</button>
            </Control>
            <Control>
              <button class="button">取消</button>
            </Control>
          </Field>

          <Field class="has-addons has-addons-fullwidth">
            <Control class="is-expanded">
              <button class="button is-link is-fullwidth">提交</button>
            </Control>
            <Control class="is-expanded">
              <button class="button is-fullwidth">取消</button>
            </Control>
          </Field>

          <h3>多个按钮</h3>
          <Field class="is-grouped">
            <Control>
              <button class="button is-link">提交</button>
            </Control>
            <Control>
              <button class="button">取消</button>
            </Control>
          </Field>

          <Field class="is-grouped is-grouped-centered">
            <Control>
              <button class="button is-link">提交</button>
            </Control>
            <Control>
              <button class="button">取消</button>
            </Control>
          </Field>

          <Field class="is-grouped is-grouped-right">
            <Control>
              <button class="button is-link">提交</button>
            </Control>
            <Control>
              <button class="button">取消</button>
            </Control>
          </Field>

          <Field class="is-grouped">
            <Control class="is-expanded">
              <button class="button is-link is-fullwidth">提交</button>
            </Control>
            <Control class="is-expanded">
              <button class="button is-fullwidth">取消</button>
            </Control>
          </Field>

          <h3>通栏</h3>

          <Field>
            <Control>
              <button class="button is-fullwidth is-link">提交</button>
            </Control>
            <Help>提示文字</Help>
            <Help class="has-text-right">提示文字在右边</Help>
          </Field>

          <Field>
            <Control class="buttons">
              <button class="button is-fullwidth is-link">提交</button>
              <button class="button is-fullwidth">取消</button>
            </Control>
            <Help>提示文字</Help>
            <Help class="has-text-right">提示文字在右边</Help>
          </Field>

        </section>

      </LayoutWithTitleBar>
    );
  },
};
