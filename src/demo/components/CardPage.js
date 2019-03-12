import { CardOperations } from '../../components/Card/CardOperations';
import { Button } from '../../elements/Button/Button';
import m from 'mithril';
import { Card } from '../../components/Card/Card';
import { CardContent } from '../../components/Card/CardContent';
import { CardField } from '../../components/Card/CardField';
import { CardFieldGroup } from '../../components/Card/CardFieldGroup';
import { CardFooter } from '../../components/Card/CardFooter';
import { CardHeader } from '../../components/Card/CardHeader';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';

export const CardPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="卡片">

        <section class="demo__sample">
          <h2>示例</h2>

          <div class="demo__sample__container">
            <Card>
              卡片
            </Card>
          </div>

          <Snippet code={`
            <Card>
              卡片
            </Card>
          `} />

          <h3>通用</h3>
          <div class="demo__sample__container">
            <Card>
              <CardHeader
                title="卡片标题"
                icon="triangle-down-outline"
              />
              <CardContent>
                <p>
                  卡片内容
                </p>
              </CardContent>
              <CardFooter>
                <div class="card-footer-item">foo</div>
                <div class="card-footer-item">bar</div>
                <div class="card-footer-item">baz</div>
              </CardFooter>
            </Card>
          </div>

          <Snippet code={`
            <Card>
              <CardHeader
                title="卡片标题"
                icon="triangle-down-outline"
              />
              <CardContent>
                <p>
                  卡片内容
                </p>
              </CardContent>
              <CardFooter>
                <div class="card-footer-item">foo</div>
                <div class="card-footer-item">bar</div>
                <div class="card-footer-item">baz</div>
              </CardFooter>
            </Card>
          `} />

          <h3>标题居中</h3>
          <div class="demo__sample__container">
            <Card>
              <CardHeader
                title="卡片标题"
                icon="triangle-down-outline"
                class="is-centered"
              />
              <CardContent>
                <p>
                  卡片内容
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader
                title="卡片标题"
                class="is-centered"
              />
              <CardContent>
                <p>
                  卡片内容
                </p>
              </CardContent>
            </Card>
          </div>
          <Snippet code={`
            <Card>
              <CardHeader
                title="卡片标题"
                icon="triangle-down-outline"
                class="is-centered"
              />
              <CardContent>
                <p>
                  卡片内容
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader
                title="卡片标题"
                class="is-centered"
              />
              <CardContent>
                <p>
                  卡片内容
                </p>
              </CardContent>
            </Card>
          `} />

          <h3>按钮</h3>
          <div class="demo__sample__container">
            <Card>
              <CardContent>
                <p>一个按钮</p>
              </CardContent>
              <CardOperations>
                <Button>button</Button>
              </CardOperations>
            </Card>
          </div>
          <Snippet code={`
            <Card>
              <CardContent>
                <p>一个按钮</p>
              </CardContent>
              <CardOperations>
                <Button>button</Button>
              </CardOperations>
            </Card>
          `} />

          <div class="demo__sample__container">
            <Card>
              <CardContent>
                <p>一个按钮</p>
              </CardContent>
              <CardOperations>
                <Button class="is-fullwidth is-danger">button</Button>
              </CardOperations>
            </Card>
          </div>
          <Snippet code={`
            <Card>
              <CardContent>
                <p>一个按钮</p>
              </CardContent>
              <CardOperations>
                <Button class="is-fullwidth is-danger">button</Button>
              </CardOperations>
            </Card>
          `} />

          <div class="demo__sample__container">
            <Card>
              <CardContent>
                <p>两个个按钮</p>
              </CardContent>
              <CardOperations>
                <Button class="is-info">Info</Button>
                <Button class="is-primary">Primary</Button>
              </CardOperations>
            </Card>
          </div>
          <Snippet code={`
            <Card>
              <CardContent>
                <p>两个个按钮</p>
              </CardContent>
              <CardOperations>
                <Button class="is-info">Info</Button>
                <Button class="is-primary">Primary</Button>
              </CardOperations>
            </Card>
          `} />

          <div class="demo__sample__container">
            <Card>
              <CardContent>
                <p>两个个按钮</p>
              </CardContent>
              <CardOperations>
                <Button class="is-fullwidth is-info">button</Button>
                <Button class="is-fullwidth is-primary">button</Button>
              </CardOperations>
            </Card>
          </div>
          <Snippet code={`
            <Card>
              <CardContent>
                <p>两个个按钮</p>
              </CardContent>
              <CardOperations>
                <Button class="is-fullwidth is-info">button</Button>
                <Button class="is-fullwidth is-primary">button</Button>
              </CardOperations>
            </Card>
          `} />

        </section>

        <section class="demo__sample">
          <h2>数据展示</h2>

          <h3>示例</h3>
          <div class="demo__sample__container">
            <Card>
              <CardContent>
                <CardField name="property1" label="项目" value="内容" />
              </CardContent>
            </Card>
          </div>
          <Snippet code={`
            <Card>
              <CardContent>
                <CardField name="property1" label="项目" value="内容" />
              </CardContent>
            </Card>
          `} />

          <h3>分组</h3>
          <div class="demo__sample__container">
            <Card>
              <CardContent>

                <CardFieldGroup>
                  <CardField label="项目1" value="value 1" />
                  <CardField label="项目2" value="value 2" />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="项目1" value="value 1" />
                  <CardField label="项目2" value="value 2" />
                  <CardField label="项目3" value="value 3" />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="项目1" value="value 1" />
                  <CardField label="项目2" value="value 2" />
                </CardFieldGroup>
              </CardContent>
            </Card>
          </div>
          <Snippet code={`
          `} />

          <h3>对齐</h3>
          <div class="demo__sample__container demo__preview">
            <Card>
              <CardContent>
                <CardField label="项目 1" value="内容 1" />
                <CardField label="项目 2" value="内容 2" />
                <CardField label="项目 3" value="内容 3" />
                <CardField label="left" value="内容" left={true} />
                <CardField label="left" value="内容" left={true} />
                <CardField label="center" value="内容" center={true} />
                <CardField label="center" value="内容" center={true} />
                <CardField label="right" value="内容" right={true} />
                <CardField label="right" value="内容" right={true} />
              </CardContent>
            </Card>
          </div>
          <Snippet code={`
          `} />

          <h3>垂直显示</h3>
          <div class="demo__sample__container demo__preview">
            <Card>
              <CardHeader
                title="卡片标题"
              />

              <CardContent>
                <CardFieldGroup>
                  <CardField label="垂直显示" value="内容" vertical={true} />
                </CardFieldGroup>
                <CardFieldGroup>
                  <CardField label="垂直显示" value="内容" vertical={true} reverse={true} />
                </CardFieldGroup>
              </CardContent>

              <CardContent>
                <CardFieldGroup>
                  <CardField label="left" value="1" left={true} vertical={true} />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="center" value="1" center={true} vertical={true} />
                  <CardField label="center" value="2" center={true} vertical={true} />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="right" value="1" right={true} vertical={true} />
                  <CardField label="right" value="2" right={true} vertical={true} />
                  <CardField label="right" value="3" right={true} vertical={true} />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="left" value="1" left={true} vertical={true} />
                  <CardField label="center" value="1" center={true} vertical={true} />
                  <CardField label="right" value="3" right={true} vertical={true} />
                </CardFieldGroup>
              </CardContent>

            </Card>
          </div>
          <Snippet code={`
          `} />

          <h3>垂直布局</h3>
          <div class="demo__sample__container demo__preview">
            <Card>
              <CardContent>
                <CardFieldGroup spaceEvenly={true}>
                  <CardField label="left" value="1" left={true} vertical={true} />
                </CardFieldGroup>

                <CardFieldGroup spaceEvenly={true}>
                  <CardField label="center" value="1" center={true} vertical={true} />
                  <CardField label="center" value="2" center={true} vertical={true} />
                </CardFieldGroup>

                <CardFieldGroup spaceEvenly={true}>
                  <CardField label="right" value="1" right={true} vertical={true} />
                  <CardField label="right" value="2" right={true} vertical={true} />
                  <CardField label="right" value="3" right={true} vertical={true} />
                </CardFieldGroup>
              </CardContent>
            </Card>
          </div>

          <h3>反向显示</h3>
          <div class="demo__sample__container demo__preview">
            <Card>
              <CardContent>
                <CardFieldGroup>
                  <CardField label="left" value="1" left={true} vertical={true} reverse={true} />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="center"
                    value="1"
                    center={true}
                    vertical={true}
                    reverse={true} />
                  <CardField label="center"
                    value="2"
                    center={true}
                    vertical={true}
                    reverse={true} />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="right" value="1" right={true} vertical={true} reverse={true} />
                  <CardField label="right" value="2" right={true} vertical={true} reverse={true} />
                  <CardField label="right" value="3" right={true} vertical={true} reverse={true} />
                </CardFieldGroup>

                <CardFieldGroup>
                  <CardField label="left" value="1" left={true} vertical={true} reverse={true} />
                  <CardField label="center"
                    value="1"
                    center={true}
                    vertical={true}
                    reverse={true} />
                  <CardField label="right" value="3" right={true} vertical={true} reverse={true} />
                </CardFieldGroup>
              </CardContent>
            </Card>
          </div>

        </section>

      </LayoutWithTitleBar>
    );
  },
};
