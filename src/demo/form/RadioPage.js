import m from 'mithril';
import { Control } from '../../form/Control/Control';
import { Radio } from '../../form/Radio/Radio';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const RadioPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="单选框">

        <section class="demo__sample">
          <h2>示例</h2>

          <Control>
            <Radio name="answer">Yes</Radio>
            <Radio name="answer">No</Radio>
          </Control>

          <Snippet code={`
            <Control>
              <Radio name="answer">Yes</Radio>
              <Radio name="answer">No</Radio>
            </Control>
          `} />

          <Control>
            <Radio name="answer">Yes</Radio>
            <Radio name="answer" checked>No</Radio>
          </Control>

          <Snippet code={`
            <Control>
              <Radio name="answer">Yes</Radio>
              <Radio name="answer" checked>No</Radio>
            </Control>
          `} />

          <Control>
            <Radio name="rsvp">Going</Radio>
            <Radio name="rsvp">Not going</Radio>
            <Radio name="rsvp" disabled>Maybe</Radio>
          </Control>

          <Snippet code={`
            <Control>
              <Radio name="rsvp">Going</Radio>
              <Radio name="rsvp">Not going</Radio>
              <Radio name="rsvp" disabled>Maybe</Radio>
            </Control>
          `} />

        </section>
      </LayoutWithTitleBar>
    );
  },
};
