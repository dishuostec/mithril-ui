import m from 'mithril';
import './Checkbox.scss';

const Checkbox = {
  view: ({ attrs: { disabled, ...props }, children }) => (
    <label class="checkbox" disabled={disabled}>
      <input
        {...props}
        disabled={disabled}
        type="checkbox"
      />
      {children}
    </label>
  ),
};

export default Checkbox;
