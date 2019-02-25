import m from 'mithril';
import classNames from 'classnames';
import Swiper from 'swiper';
import './SwiperBox.scss';

const EFFECT = {
  SLIDE: 'slide',
  FADE: 'fade',
  CUBE: 'cube',
  COVERFLOW: 'coverflow',
  FLIP: 'flip',
};

const SwiperBox = () => {
  let swiper;

  return {
    oncreate: (vnode) => {
      const { isVertical, autoPlay, effect = 'slide', hasPagination = false, hasNavigation = false, hasScrollbar = false } = vnode.attrs;


      const config = {
        direction: isVertical ? 'vertical' : 'horizontal',
        loop: true,
        autoplay: Number.isInteger(autoPlay) ? { delay: autoPlay } : autoPlay,
        effect,
      };

      if (hasPagination) {
        config.pagination = {
          el: vnode.dom.querySelector('.swiper-pagination'),
        };
      }

      if (hasNavigation) {
        config.navigation = {
          nextEl: vnode.dom.querySelector('.swiper-button-next'),
          prevEl: vnode.dom.querySelector('.swiper-button-prev'),
        };
      }

      if (hasScrollbar) {
        config.scrollbar = {
          el: vnode.dom.querySelector('.swiper-scrollbar'),
          draggable: true,
        };
      }

      swiper = new Swiper(vnode.dom, config);

      vnode.oncreate && vnode.oncreate(vnode);
    },
    onremove: (vnode) => {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }

      vnode.attrs.onremove && vnode.attrs.onremove(vnode);
    },
    view: function ({ attrs: { class: className, contentList = [], hasPagination = false, hasNavigation = false, hasScrollbar = false } }) {
      return (
        <div class={classNames('swiper-container', className)}>
          <div class="swiper-wrapper">

            {contentList.map(slide => <div class="swiper-slide">{slide}</div>)}

          </div>

          {
            hasPagination
              ? <div class="swiper-pagination" />
              : null
          }

          {
            hasNavigation
              ? [
                <div class="swiper-button-prev" />,
                <div class='swiper-button-next' />,
              ]
              : null
          }


          {
            hasScrollbar
              ? <div class="swiper-scrollbar" />
              : null
          }
        </div>
      );
    },
  };
};

SwiperBox.EFFECT = EFFECT;

export default SwiperBox;
