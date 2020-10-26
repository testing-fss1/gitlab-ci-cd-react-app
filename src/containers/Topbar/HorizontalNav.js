import React from "react";
import {useSelector, connect} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";
import NotificationIcon from "components/NotificationIcon";
 



const SubMenu = Menu.SubMenu;

const HorizontalNav = (props) => {

  const navStyle = useSelector(({settings}) => settings.navStyle);
  const pathname = useSelector(({settings}) => settings.pathname);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";

    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  let { user_privileges_list: user } = props.authUser !== null && props.authUser;
  return (
    <div>        
      {
        user == "Super Administrator" && 
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          mode="horizontal">

          <Menu.Item key="dashboards">
            <Link to="/dashboards">
              <IntlMessages id="sidebar.dashboards"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="users">
            <Link to="/users">
              <IntlMessages id="sidebar.users"/>
            </Link>
          </Menu.Item>
        </Menu>
      }
      {
        user == "Site Administrator" && 
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          mode="horizontal">

          <Menu.Item key="dashboards">
            <Link to="/dashboards">
              <IntlMessages id="sidebar.dashboards"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="users">
            <Link to="/users">
              <IntlMessages id="sidebar.users"/>
            </Link>
          </Menu.Item>
        </Menu>
      }
      {
        user == "Org Admin" && 
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          mode="horizontal">

          <Menu.Item key="dashboards">
            <Link to="/dashboards">
              <IntlMessages id="sidebar.dashboards"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="org-employees">
            <Link to="/org-employees">
              <IntlMessages id="sidebar.org-employees"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="notification-types">
            <Link to="/notification-types">
              <IntlMessages id="sidebar.notification-types"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="groups">
            <Link to="/groups">
              <IntlMessages id="sidebar.groups"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="subscribers">
            <Link to="/subscribers">
              <IntlMessages id="sidebar.subscribers"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="compose">
            <Link to="/compose">
              <IntlMessages id="sidebar.compose"/>
            </Link>
          </Menu.Item>
        </Menu>
      }
      {
        user == "Org Employee" && 
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          mode="horizontal">

          <Menu.Item key="dashboards">
            <Link to="/dashboards">
              <IntlMessages id="sidebar.dashboards"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="notification-types">
            <Link to="/notification-types">
              <IntlMessages id="sidebar.notification-types"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="groups">
            <Link to="/groups">
              <IntlMessages id="sidebar.groups"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="subscribers">
            <Link to="/subscribers">
              <IntlMessages id="sidebar.subscribers"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="compose">
            <Link to="/compose">
              <IntlMessages id="sidebar.compose"/>
            </Link>
          </Menu.Item>
        </Menu>
      }
      {
        user == "Subscriber" && 
        <Menu
          defaultOpenKeys={[defaultOpenKeys]}
          selectedKeys={[selectedKeys]}
          mode="horizontal">

          <Menu.Item key="dashboards">
            <Link to="/dashboards">
              <IntlMessages id="sidebar.dashboards"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="profile">
            <Link to="/profile">
              <IntlMessages id="sidebar.profile"/>
            </Link>
          </Menu.Item>

          <Menu.Item key="notification">            
            <NotificationIcon />           
          </Menu.Item>
        </Menu>
      }
    </div>
  );
};

HorizontalNav.propTypes = {};

const mapStateToProps = ({auth}) => {
  const { authUser } = auth;
  return {authUser}
};

export default connect(mapStateToProps)(HorizontalNav);

