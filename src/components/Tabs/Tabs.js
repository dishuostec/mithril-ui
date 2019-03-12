import m from 'mithril';
import classNames from 'classnames';
import './Tabs.scss';

export const Tabs = {
  view: ({ attrs: { class: className, list, onchange, activeIndex }, children }) => (
    <div class={classNames('tabs', className)}>
      <ul>
        {list && list.map((tab, index) => (
          <li
            class={classNames({ 'is-active': activeIndex === index })}
            onclick={() => {
              activeIndex !== index && onchange && onchange(index);
            }}
          >{tab}</li>
        ))}
      </ul>
    </div>
  ),
};
