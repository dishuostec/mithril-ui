import { InputWrapFactory } from '../../factory/InputWrap';
import './Input.scss';

const pattern = /^[+-]?\d*(?:\.\d*)?/;


const defaultNumberConverter = (value, attrs) => {
  value = parseFloat(value);

  if (isNaN(value)) {
    return 0;
  }

  const { min, max } = attrs;

  if (min != null && value < min) {
    return min;
  }

  if (max != null && value > max) {
    return max;
  }

  return value;
};

const defaultNumberFilter = (displayValue, attrs) => {
  const match = pattern.exec(displayValue);

  if (match) {
    displayValue = match[0];
  }

  return displayValue;
};

export const InputNumber = InputWrapFactory('number', {
  defaultFilter: defaultNumberFilter,
  defaultConverter: defaultNumberConverter,
});
