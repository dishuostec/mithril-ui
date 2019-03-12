import m from 'mithril';
import classNames from 'classnames';

const SIZE = Object.freeze({
  X2: 'icon-size-2x',
  X3: 'icon-size-3x',
  X4: 'icon-size-4x',
  X5: 'icon-size-5x',
  X6: 'icon-size-6x',
  X7: 'icon-size-7x',
  X8: 'icon-size-8x',
  X9: 'icon-size-9x',
  X10: 'icon-size-10x',
});

const TRANSFORM = Object.freeze({
  ROTATE_45: 'icon-rotate-45',
  ROTATE_90: 'icon-rotate-90',
  ROTATE_135: 'icon-rotate-135',
  ROTATE_180: 'icon-rotate-180',
  ROTATE_225: 'icon-rotate-225',
  ROTATE_270: 'icon-rotate-270',
  ROTATE_315: 'icon-rotate-315',
  FLIP_HORIZONTAL: 'icon-flip-h',
  FLIP_VERTICAL: 'icon-flip-v',
  FLIP_BOTH: 'icon-flip-both',
});

export const IconWrapFactory = (iconCategroy, iconPrefix) => {
  return {
    SIZE,
    TRANSFORM,

    view: ({ attrs: { icon, size, transform, class: className, ...props } }) => {

      const moduleClass = classNames('icon', className);
      const iconClass = classNames(iconCategroy, size, transform, {
        [`${iconPrefix}${icon}`]: icon,
      });

      return (
        <span
          {...props}
          class={moduleClass}
        >
          <i class={iconClass} />
        </span>
      );
    },
  };
};
