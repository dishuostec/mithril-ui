import m from 'mithril';
import classNames from 'classnames';
import './Indicator.scss';

const Indicator = {
  view: ({ attrs: { type, class: className, ...props } }) => {
    switch (type) {

    case 'ring':
      return (
        <div
          {...props}
          class={classNames('indicator', 'is-ring', className)}
        >
          <div />
          <div />
          <div />
          <div />
        </div>
      );

    case 'facebook':

      return (
        <div
          {...props}
          class={classNames('indicator', 'is-facebook', className)}
        >
          <div />
          <div />
          <div />
        </div>
      );

    default:

      return (
        <div
          {...props}
          class={classNames('indicator', 'is-dual-ring', className)}
        />
      );
    }
  },
};

export default Indicator;
