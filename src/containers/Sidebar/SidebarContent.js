import React from "react";
import {useSelector, connect} from "react-redux";
import {Menu, Icon} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
//import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";

const SidebarContent = (props) => {

  let {navStyle, themeType, pathname} = useSelector(({settings}) => settings);

  const getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  let { user_privileges_list: user } = props.authUser !== null && props.authUser;

  return (<>

      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
          <UserProfile/>
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <div>        
            {
              user == "Super Administrator" && 
              <Menu
                defaultOpenKeys={[defaultOpenKeys]}
                selectedKeys={[selectedKeys]}
                theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                mode="inline">

                <Menu.Item key="dashboards">
                  <Link to="/dashboards"><i className="icon icon-dasbhoard"/>
                  <IntlMessages id="sidebar.dashboards"/></Link>
                </Menu.Item>

                <Menu.Item key="users">
                  <Link to="/users"><i className="icon icon-avatar -flex-column-reverse"/>
                    <IntlMessages id="sidebar.users"/></Link>
                </Menu.Item>
              </Menu>
            }
            {
              user == "Site Administrator" && 
              <Menu
                defaultOpenKeys={[defaultOpenKeys]}
                selectedKeys={[selectedKeys]}
                theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                mode="inline">

                <Menu.Item key="dashboards">
                  <Link to="/dashboards"><i className="icon icon-dasbhoard"/>
                  <IntlMessages id="sidebar.dashboards"/></Link>
                </Menu.Item>

                <Menu.Item key="users">
                  <Link to="/users"><i className="icon icon-avatar -flex-column-reverse"/>
                    <IntlMessages id="sidebar.users"/></Link>
                </Menu.Item>
              </Menu>
            }
            {
              user == "Org Admin" && 
              <Menu
                defaultOpenKeys={[defaultOpenKeys]}
                selectedKeys={[selectedKeys]}
                theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                mode="inline">

                <Menu.Item key="dashboards">
                  <Link to="/dashboards"><i className="icon icon-dasbhoard"/>
                  <IntlMessages id="sidebar.dashboards"/></Link>
                </Menu.Item>

                <Menu.Item key="org-employees">
                  <Link to="/org-employees"><i className="icon icon-avatar -flex-column-reverse"/>
                    <IntlMessages id="sidebar.org-employees"/></Link>
                </Menu.Item>

                <Menu.Item key="notification-types">
                  <Link to="/notification-types"><i className="icon icon-chat-new"/>
                    <IntlMessages id="sidebar.notification-types"/></Link>
                </Menu.Item>

                <Menu.Item key="groups">
                  <Link to="/groups"><Icon style={{fontSize : "22px"}} type="team" />
                    <IntlMessages id="sidebar.groups"/></Link>
                </Menu.Item>

                <Menu.Item key="subscribers">
                  <Link to="/subscribers"><i className="icon icon-avatar -flex-column-reverse"/>
                    <IntlMessages id="sidebar.subscribers"/></Link>
                </Menu.Item>

                <Menu.Item key="compose">
                  <Link to="/compose"><i className="icon icon-add-circle"/>
                    <IntlMessages id="sidebar.compose"/></Link>
                </Menu.Item>
              </Menu>
            }
            {
              user == "Org Employee" && 
              <Menu
                defaultOpenKeys={[defaultOpenKeys]}
                selectedKeys={[selectedKeys]}
                theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                mode="inline">

                <Menu.Item key="dashboards">
                  <Link to="/dashboards"><i className="icon icon-dasbhoard"/>
                  <IntlMessages id="sidebar.dashboards"/></Link>
                </Menu.Item>

                <Menu.Item key="notification-types">
                  <Link to="/notification-types"><i className="icon icon-chat-new"/>
                    <IntlMessages id="sidebar.notification-types"/></Link>
                </Menu.Item>

                <Menu.Item key="groups">
                  <Link to="/groups"><Icon style={{fontSize : "22px"}} type="team" />
                    <IntlMessages id="sidebar.groups"/></Link>
                </Menu.Item>

                <Menu.Item key="subscribers">
                  <Link to="/subscribers"><i className="icon icon-avatar -flex-column-reverse"/>
                    <IntlMessages id="sidebar.subscribers"/></Link>
                </Menu.Item>

                <Menu.Item key="compose">
                  <Link to="/compose"><i className="icon icon-add-circle"/>
                    <IntlMessages id="sidebar.compose"/></Link>
                </Menu.Item>
              </Menu>
            }
          </div>

          <div>
          {
              user == "Subscriber" && 
              <Menu
                defaultOpenKeys={[defaultOpenKeys]}
                selectedKeys={[selectedKeys]}
                theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                mode="inline">

                <Menu.Item key="dashboards">
                  <Link to="/dashboards"><i className="icon icon-dasbhoard"/>
                  <IntlMessages id="sidebar.dashboards"/></Link>
                </Menu.Item>

                <Menu.Item key="profile">
                  <Link to="/users"><i className="icon icon-avatar -flex-column-reverse"/>
                    <IntlMessages id="sidebar.profile"/></Link>
                </Menu.Item>
              </Menu>
            }
          </div>


        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

const mapStateToProps = ({auth}) => {
  const { authUser } = auth;
  return {authUser}
};

export default connect(mapStateToProps)(SidebarContent);