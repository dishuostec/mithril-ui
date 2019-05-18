import m from 'mithril';
import { Checkbox } from '../../form/Checkbox/Checkbox';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const CheckboxPage = () => {
  let checked = false;

  const click = () => {
    checked = !checked;
  };

  return {
    view: () => (
      <LayoutWithTitleBar title="复选框">

        <section class="demo__sample">
          <h2>示例</h2>

          <div>
            <Checkbox name="foo">Remember me</Checkbox>
          </div>

          <div>
            <Checkbox name="bar" checked={true}>Remember me</Checkbox>
          </div>

          <Snippet code={`
            <Checkbox name="foo">Remember me</Checkbox>

            <Checkbox name="bar" checked={true}>Remember me</Checkbox>

            <Checkbox name="bar" checked={false}>Remember me</Checkbox>
          `} />

          <h3>toggle</h3>

          <div>
            <Checkbox checked={checked} onclick={() => {
              click();
            }}>click to toggle</Checkbox>
          </div>

          <h3>disable</h3>

          <div>
            <Checkbox name="foo" disabled={true}>Remember me</Checkbox>
          </div>

          <div>
            <Checkbox name="bar" checked={true} disabled={true}>Remember
                                                                me</Checkbox>
          </div>

        </section>
      </LayoutWithTitleBar>
    ),
  };
};
