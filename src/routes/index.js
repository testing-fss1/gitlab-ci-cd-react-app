import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}dashboards`} component={asyncComponent(() => import('./Dashboards'))}/>
      <Route path={`${match.url}users`} component={asyncComponent(() => import('./Users'))}/>
      <Route path={`${match.url}org-employees`} component={asyncComponent(() => import('./OrgEmployees'))}/>
      <Route path={`${match.url}subscribers`} component={asyncComponent(() => import('./Subscribers'))}/>
      <Route path={`${match.url}groups`} component={asyncComponent(() => import('./Groups'))}/>
      <Route path={`${match.url}notification-types`} component={asyncComponent(() => import('./NotificationTypes'))}/>
      <Route path={`${match.url}compose`} component={asyncComponent(() => import('./Compose'))}/>
      <Route path={`${match.url}change-password`} component={asyncComponent(() => import('./ChangePassword'))}/>
      <Route path={`${match.url}change-email-id/user-id/:sm_memb_id/email-id/:sm_email`} component={asyncComponent(() => import('./ChangeEmailId'))}/>
      <Route path={`${match.url}subscriberEdit`} component={asyncComponent(() => import('./SubscriberEdit'))}/>
      <Route path={`${match.url}profile`} component={asyncComponent(() => import('./Profile'))}/>
      <Route path={`${match.url}home`} component={asyncComponent(() => import('./Dashboards'))}/>
      <Route path={`${match.url}GroupSingleView/orngid/:orng_id`} component={asyncComponent(() => import('./GroupsSingleView'))}/>
      <Route exact path={`${match.url}org-id/:org_id/user-id/:sm_memb_id/subscribers/list`} component={asyncComponent(() => import('./SubscriberSingleView'))}/>
    </Switch>
  </div>
);

export default App;
