import React, { Suspense } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import RouteConfig from "./route.config"
import Loading from "../components/Loading"
import PageNavigationLister from '../utils/PageNavigationLister'


const PrivateRoute = ({ location, component, ...rest }) =>
  localStorage.getItem("signin") === "true" ? (
    <Route {...rest} component={component} />
  ) : (
    <Redirect to={{ pathname: "/", state: { from: location } }} />
  );

const RouteList = () => (

  <Switch>
    {RouteConfig.map(({ path, component, protect }, key) =>
      protect ? (
        <PrivateRoute path={path} component={component} exact key={key} />
      ) : (
        <Route path={path} exact key={key} component={component} />
      )
    )}
  </Switch>
);

export default function AppRoute() {
  return (
    <>
      <PageNavigationLister />
      <Suspense fallback={<Loading />}>
        <RouteList />
      </Suspense>
    </>
  );
}
