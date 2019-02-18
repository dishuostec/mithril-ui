import m from 'mithril';
import './Radio.scss';

const Radio = {
  view: ({ attrs: { disabled, ...props }, children }) => (
    <label class="radio" disabled={disabled}>
      <input
        {...props}
        disabled={disabled}
        type="radio"
      />
      {children}
    </label>
  ),
};

export default Radio;
