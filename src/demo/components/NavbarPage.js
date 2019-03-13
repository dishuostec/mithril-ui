import m from 'mithril';
import { LayoutWithTitleBar } from '../../layout/LayoutWithTitleBar';
import { Snippet } from '../../components/Snippet/Snippet';
import { Navbar } from '../../components/Navbar/Navbar';
import { NavbarBrand } from '../../components/Navbar/NavbarBrand';
import { NavbarMenu } from '../../components/Navbar/NavbarMenu';
import { NavbarStart } from '../../components/Navbar/NavbarStart';
import { NavbarEnd } from '../../components/Navbar/NavbarEnd';
import { NavbarDivider } from '../../components/Navbar/NavbarDivider';
import { NavbarItemLink } from '../../components/Navbar/NavbarItemLink';
import { NavbarDropdownLink } from '../../components/Navbar/NavbarDropdownLink';
import { NavbarItem } from '../../components/Navbar/NavbarItem';
import { NavbarDropdown } from '../../components/Navbar/NavbarDropdown';

export const NavbarPage = {
  view: () => {
    return (
      <LayoutWithTitleBar title="导航栏">

        <section class="demo__sample">
          <h2>示例</h2>

          <p class="demo__preview">

            <Navbar>

              <NavbarBrand to="/">Logo</NavbarBrand>

              <NavbarMenu>

                <NavbarStart>
                  <NavbarItemLink to="/">Link 1</NavbarItemLink>
                  <NavbarItemLink to="/">Link 2</NavbarItemLink>
                  <NavbarItem>Text Menu</NavbarItem>

                  <NavbarItem class="has-dropdown is-hoverable">

                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>

                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>

                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>

                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

          </p>
          <Snippet code={`
          `} />

        </section>

        <section class="demo__sample">
          <h2>Dropdown</h2>

          <h3>Normal</h3>
          <p class="demo__preview">
            <Navbar>
              <NavbarMenu>
                <NavbarStart>

                  <NavbarItem class="has-dropdown is-hoverable">

                    <NavbarDropdownLink>Normal Menu</NavbarDropdownLink>

                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>

                </NavbarStart>
              </NavbarMenu>
            </Navbar>
          </p>
          <Snippet code={`
          `} />

          <h3>Align right</h3>
          <p class="demo__preview">
            <Navbar>
              <NavbarMenu>
                <NavbarEnd>

                  <NavbarItem class="has-dropdown is-hoverable">

                    <NavbarDropdownLink>Align Right</NavbarDropdownLink>

                    <NavbarDropdown class="is-right">
                      <NavbarItemLink to="/">Sub Link</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>

                </NavbarEnd>
              </NavbarMenu>
            </Navbar>
          </p>
          <Snippet code={`
          `} />

          <h3>Dropup</h3>
          <p class="demo__preview">
            <Navbar>
              <NavbarMenu>
                <NavbarStart>

                  <NavbarItem class="has-dropdown has-dropdown-up is-hoverable">

                    <NavbarDropdownLink>Dropdown Up</NavbarDropdownLink>

                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>

                </NavbarStart>
              </NavbarMenu>
            </Navbar>
          </p>
          <Snippet code={`
          `} />

          <h3>Without arrow</h3>
          <p class="demo__preview">
            <Navbar>
              <NavbarMenu>
                <NavbarStart>

                  <NavbarItem class="has-dropdown is-hoverable">

                    <NavbarDropdownLink class="is-arrowless">Without Arrow</NavbarDropdownLink>

                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>

                </NavbarStart>
              </NavbarMenu>
            </Navbar>
          </p>
          <Snippet code={`
          `} />

          <h3>boxed</h3>
          <p class="demo__preview">
            <Navbar class="is-transparent">
              <NavbarMenu>
                <NavbarStart>

                  <NavbarItem class="has-dropdown is-hoverable">

                    <NavbarDropdownLink>Boxed Menu</NavbarDropdownLink>

                    <NavbarDropdown class="is-boxed">
                      <NavbarItemLink to="/">Sub Link</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>

                </NavbarStart>
              </NavbarMenu>
            </Navbar>
          </p>
          <Snippet code={`
          `} />


        </section>

        <section class="demo__sample">
          <h2>Colors</h2>

          <p class="demo__preview">

            <Navbar class="is-primary">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-link">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-info">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-success">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-warning">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-danger">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-black">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-dark">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-light">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

            <Navbar class="is-white">

              <NavbarBrand to="/">Logo</NavbarBrand>
              <NavbarMenu>
                <NavbarStart>
                  <NavbarItemLink to="/">Link Item</NavbarItemLink>
                  <NavbarItem>Text Item</NavbarItem>
                  <NavbarItem class="has-dropdown is-hoverable">
                    <NavbarDropdownLink>dropdown menu</NavbarDropdownLink>
                    <NavbarDropdown>
                      <NavbarItemLink to="/">Sub Link 1</NavbarItemLink>
                      <NavbarItemLink to="/">Sub Link 2</NavbarItemLink>
                    </NavbarDropdown>
                  </NavbarItem>
                  <NavbarItemLink to="/">Link 3</NavbarItemLink>
                </NavbarStart>
                <NavbarEnd>
                  <NavbarItemLink to="/">Link at end</NavbarItemLink>
                </NavbarEnd>
              </NavbarMenu>

            </Navbar>

          </p>
          <Snippet code={`
          `} />

        </section>

      </LayoutWithTitleBar>
    );
  },
};
