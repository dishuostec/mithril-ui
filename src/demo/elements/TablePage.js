import m from 'mithril';
import { Snippet } from '../../components/Snippet/Snippet';
import { Table } from '../../elements/Table/Table';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';

export const TablePage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="表格">

        <section class="demo__sample">
          <h2>示例</h2>
          <Table>
            <thead>
              <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
                <th><abbr title="Played">Pld</abbr></th>
                <th><abbr title="Won">W</abbr></th>
                <th><abbr title="Drawn">D</abbr></th>
                <th><abbr title="Points">Pts</abbr></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
                <th><abbr title="Played">Pld</abbr></th>
                <th><abbr title="Won">W</abbr></th>
                <th><abbr title="Drawn">D</abbr></th>
                <th><abbr title="Points">Pts</abbr></th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>1</th>
                <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                  title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                </td>
                <td>38</td>
                <td>23</td>
                <td>12</td>
                <td>81</td>
              </tr>
              <tr>
                <th>2</th>
                <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
                  title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                <td>38</td>
                <td>19</td>
                <td>13</td>
                <td>70</td>
              </tr>
              <tr class="is-selected">
                <th>3</th>
                <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
                  title="Manchester City F.C.">Manchester City</a></td>
                <td>38</td>
                <td>19</td>
                <td>9</td>
                <td>66</td>
              </tr>
              <tr>
                <th>4</th>
                <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
                  title="Manchester United F.C.">Manchester United</a></td>
                <td>38</td>
                <td>19</td>
                <td>9</td>
                <td>66</td>
              </tr>
              <tr>
                <th>5</th>
                <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C."
                  title="Liverpool F.C.">Liverpool</a></td>
                <td>38</td>
                <td>16</td>
                <td>12</td>
                <td>60</td>
              </tr>
              <tr>
                <th>6</th>
                <td><a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
                  title="Sunderland A.F.C.">Sunderland</a></td>
                <td>38</td>
                <td>9</td>
                <td>12</td>
                <td>39</td>
              </tr>
              <tr>
                <th>7</th>
                <td><a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
                  title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
                </td>
                <td>38</td>
                <td>9</td>
                <td>10</td>
                <td>37</td>
              </tr>
            </tbody>
          </Table>

          <Snippet code={`
            <Table>
              <thead>
              <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
                <th><abbr title="Played">Pld</abbr></th>
                <th><abbr title="Won">W</abbr></th>
                <th><abbr title="Drawn">D</abbr></th>
                <th><abbr title="Points">Pts</abbr></th>
              </tr>
              </thead>
              <tfoot>
              <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
                <th><abbr title="Played">Pld</abbr></th>
                <th><abbr title="Won">W</abbr></th>
                <th><abbr title="Drawn">D</abbr></th>
                <th><abbr title="Points">Pts</abbr></th>
              </tr>
              </tfoot>
              <tbody>
              <tr>
                <th>1</th>
                <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                  title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
                </td>
                <td>38</td>
                <td>23</td>
                <td>12</td>
                <td>81</td>
              </tr>
              <tr>
                <th>2</th>
                <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
                  title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                <td>38</td>
                <td>19</td>
                <td>13</td>
                <td>70</td>
              </tr>
              <tr class="is-selected">
                <th>3</th>
                <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
                  title="Manchester City F.C.">Manchester City</a></td>
                <td>38</td>
                <td>19</td>
                <td>9</td>
                <td>66</td>
              </tr>
              <tr>
                <th>4</th>
                <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
                  title="Manchester United F.C.">Manchester United</a></td>
                <td>38</td>
                <td>19</td>
                <td>9</td>
                <td>66</td>
              </tr>
              <tr>
                <th>5</th>
                <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C."
                  title="Liverpool F.C.">Liverpool</a></td>
                <td>38</td>
                <td>16</td>
                <td>12</td>
                <td>60</td>
              </tr>
              <tr>
                <th>6</th>
                <td><a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
                  title="Sunderland A.F.C.">Sunderland</a></td>
                <td>38</td>
                <td>9</td>
                <td>12</td>
                <td>39</td>
              </tr>
              <tr>
                <th>7</th>
                <td><a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
                  title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
                </td>
                <td>38</td>
                <td>9</td>
                <td>10</td>
                <td>37</td>
              </tr>
              </tbody>
            </Table>
          `} />
        </section>

        <section class="demo__sample">
          <h2>修饰符</h2>

          <h3>is-bordered</h3>
          <Table class="is-bordered">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
            </tbody>
          </Table>
          <Snippet code={`
            <Table class="is-bordered">
              <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              </tbody>
            </Table>
          `} />

          <h3>is-striped</h3>
          <Table class="is-striped">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </Table>
          <Snippet code={`
            <Table class="is-striped">
              <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
              </tbody>
            </Table>
           `} />

          <h3>is-narrow</h3>
          <Table class="is-narrow">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </Table>
          <Snippet code={`
            <Table class="is-narrow">
            <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Three</td>
              <td>Four</td>
            </tr>
            <tr>
              <td>Five</td>
              <td>Six</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>Eight</td>
            </tr>
            <tr>
              <td>Nine</td>
              <td>Ten</td>
            </tr>
            <tr>
              <td>Eleven</td>
              <td>Twelve</td>
            </tr>
            </tbody>
          </Table>
           `} />

          <h3>is-fullwidth</h3>
          <Table class="is-fullwidth">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </Table>
          <Snippet code={`
            <Table class="is-fullwidth">
            <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Three</td>
              <td>Four</td>
            </tr>
            <tr>
              <td>Five</td>
              <td>Six</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>Eight</td>
            </tr>
            <tr>
              <td>Nine</td>
              <td>Ten</td>
            </tr>
            <tr>
              <td>Eleven</td>
              <td>Twelve</td>
            </tr>
            </tbody>
          </Table>
           `} />

          <h3>合并使用</h3>
          <Table class="is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>One</th>
                <th>Two</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Three</td>
                <td>Four</td>
              </tr>
              <tr>
                <td>Five</td>
                <td>Six</td>
              </tr>
              <tr>
                <td>Seven</td>
                <td>Eight</td>
              </tr>
              <tr>
                <td>Nine</td>
                <td>Ten</td>
              </tr>
              <tr>
                <td>Eleven</td>
                <td>Twelve</td>
              </tr>
            </tbody>
          </Table>
          <Snippet code={`
            <Table class="is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
            <tr>
              <th>One</th>
              <th>Two</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Three</td>
              <td>Four</td>
            </tr>
            <tr>
              <td>Five</td>
              <td>Six</td>
            </tr>
            <tr>
              <td>Seven</td>
              <td>Eight</td>
            </tr>
            <tr>
              <td>Nine</td>
              <td>Ten</td>
            </tr>
            <tr>
              <td>Eleven</td>
              <td>Twelve</td>
            </tr>
            </tbody>
          </Table>
           `} />
        </section>

      </LayoutWithTitleBar>
    );
  },
};
