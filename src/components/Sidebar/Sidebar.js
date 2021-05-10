/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "logo-white.svg";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownActive: false,
      key: false
    };

    this.activeRoute.bind(this);
  }

  openDropdown(key) {
    this.state.key = key;
    this.state.dropdownActive = !this.state.dropdownActive;
  }

  renderDropdown(prop, key, parentKey) {
    console.log("prop.layout - ", prop.layout, " prop.path - ", prop.path);

    return (
      <div>
        {
          this.state.dropdownActive &&
          this.state.key === parentKey &&
          < li
            className={
              this.activeRoute(prop.layout + prop.path) +
              (prop.pro ? " active active-pro" : "")
            }
            key={key}
          >
            <NavLink
              to={prop.layout + prop.path}
              className="nav-link"
              activeClassName="active"
            >
              <p class="mr-4">{prop.name}</p>
            </NavLink>
          </li>
        }
      </div>
    )
  }

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }

  render() {
    return (
      <div className="sidebar" data-color={"blue"}>
        <div className="logo">
          <a
            href="#"
            className="simple-text logo-mini"
            target="_blank"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>

          <a
            href="#"
            className="simple-text logo-normal"
            target="_blank"
          >
            Mobile
          </a>
        </div>

        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.props.routes.map((prop, parentKey) => {
              if (prop.redirect) return null;

              if (!prop.invisible)
                return (
                  <li
                    className={
                      this.activeRoute(prop.layout + prop.path) +
                      (prop.pro ? " active active-pro" : "")
                    }
                    key={parentKey}
                  >
                    <NavLink
                      onClick={prop?.dropdown?.length > 0 ? () => this.openDropdown(parentKey) : () => null}
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >

                      <i className={"now-ui-icons " + prop.icon} />
                      <p>{prop.name}</p>

                    </NavLink>

                    {prop?.dropdown?.map((prop, key) => {
                      return (
                        this.renderDropdown(prop, key, parentKey)
                      )
                    })
                    }

                  </li>
                )
            })}
          </Nav>
        </div>
      </div >
    );
  }
}

export default Sidebar;
