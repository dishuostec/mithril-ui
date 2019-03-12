import m from 'mithril';
import { SwiperBox } from '../../components/SwiperBox/SwiperBox';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const SwiperBoxPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="轮播">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">
            <SwiperBox
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

          <h3>自动播放</h3>
          <p class="demo__preview">
            <SwiperBox
              autoPlay={3000}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>组件</h2>

          <h3>导航</h3>
          <p class="demo__preview">
            <SwiperBox
              hasNavigation={true}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

          <h3>分页</h3>
          <p class="demo__preview">
            <SwiperBox
              hasPagination={true}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

          <h3>滚动条</h3>
          <p class="demo__preview">
            <SwiperBox
              hasScrollbar={true}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>效果</h2>

          <h3>Fade</h3>
          <p class="demo__preview">
            <SwiperBox
              effect={SwiperBox.EFFECT.FADE}
              autoPlay={1000}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

          <h3>Coverflow</h3>
          <p class="demo__preview">
            <SwiperBox
              effect={SwiperBox.EFFECT.COVERFLOW}
              autoPlay={1000}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

          <h3>Flip</h3>
          <p class="demo__preview">
            <SwiperBox
              effect={SwiperBox.EFFECT.FLIP}
              autoPlay={1000}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

          <h3>Cube</h3>
          <p class="demo__preview">
            <SwiperBox
              effect={SwiperBox.EFFECT.CUBE}
              autoPlay={1000}
              contentList={[
                <p class="demo-box-1">1</p>,
                <p class="demo-box-2">2</p>,
                <p class="demo-box-3">3</p>,
                <p class="demo-box-4">4</p>,
              ]}
            />
          </p>
          <Snippet code={`
          `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
