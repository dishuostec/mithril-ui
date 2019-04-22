import { InputWrapFactory } from '../../factory/InputWrap';
import './Input.scss';

const pattern = /^[+-]?\d*(?:\.\d*)?/;

const defaultNumberConverter = parseFloat;

const defaultNumberFilter = (displayValue, attrs) => {
  const { min, max } = attrs;

  const match = pattern.exec(displayValue);

  if (match) {
    displayValue = match[0];
  }

  if (min == null && max == null) {
    return displayValue;
  }

  let value = defaultNumberConverter(displayValue);

  if (min != null && value < min) {
    return min;
  }

  if (max != null && value > max) {
    return max;
  }

  return displayValue;
};

export const InputNumber = InputWrapFactory('number', {
  defaultFilter: defaultNumberFilter,
  defaultConverter: defaultNumberConverter,
});
