import m from 'mithril';
import './Label.scss';

export const Label = {
  view: ({ attrs: { disabled, ...props }, children }) => (
    <label
      {...props}
      class="label"
      disabled={disabled}
    >{children}</label>
  ),
};
