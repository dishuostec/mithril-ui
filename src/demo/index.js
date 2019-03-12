import m from 'mithril';
import '../scss/style.scss';
import './demo.scss';
import { Link } from '../elements/Link/Link';
import { CardPage } from './components/CardPage';
import { DropdownPage } from './components/DropdownPage';
import { MarkdownPage } from './components/MarkdownPage';
import { MenuPage } from './components/MenuPage';
import { ModalPage } from './components/ModalPage';
import { PullDownPage } from './components/PullDownPage';
import { SwiperBoxPage } from './components/SwiperBoxPage';
import { TabBarPage } from './components/TabBarPage';
import { TabsPage } from './components/TabsPage';
import { TimerPage } from './components/TimerPage';
import { TitleBarPage } from './components/TitleBarPage';
import { ToastPage } from './components/ToastPage';
import { ButtonPage } from './elements/ButtonPage';
import { IconPage } from './elements/IconPage';
import { IndicatorPage } from './elements/IndicatorPage';
import { LinkPage } from './elements/LinkPage';
import { TablePage } from './elements/TablePage';
import { TagPage } from './elements/TagPage';
import { TitlePage } from './elements/TitlePage';
import { CheckboxPage } from './form/CheckboxPage';
import { FormPage } from './form/FormPage';
import { InputPage } from './form/InputPage';
import { RadioPage } from './form/RadioPage';
import { TextareaPage } from './form/TextareaPage';

const elements = {
  '/button': ButtonPage,
  '/icon': IconPage,
  '/indicator': IndicatorPage,
  '/link': LinkPage,
  '/table': TablePage,
  '/tag': TagPage,
  '/title': TitlePage,
};

const form = {
  '/checkbox': CheckboxPage,
  // file
  '/form': FormPage,
  '/input': InputPage,
  '/radio': RadioPage,
  '/textarea': TextareaPage,
};

const components = {
  '/card': CardPage,
  '/dropdown': DropdownPage,
  '/markdown': MarkdownPage,
  '/menu': MenuPage,
  '/modal': ModalPage,
  '/pullDown': PullDownPage,
  '/swiperBox': SwiperBoxPage,
  '/tabBar': TabBarPage,
  '/tabs': TabsPage,
  '/timer': TimerPage,
  '/titleBar': TitleBarPage,
  '/toast': ToastPage,
};

const createList = (pages) => Object.entries(pages).map(([uri, page]) => (
  <li>
    <Link to={uri}>{uri}</Link>
  </li>
));

const Index = {
  view: function () {
    return (
      <div>
        <h1 class="is-size-5">elements</h1>
        <ul>{createList(elements)}</ul>

        <h1 class="is-size-5">form</h1>
        <ul>{createList(form)}</ul>

        <h1 class="is-size-5">components</h1>
        <ul>{createList(components)}</ul>
      </div>
    );
  },
};

m.route(document.body, '/index', {
  ...elements,
  ...form,
  ...components,
  '/:404...': Index,
});
