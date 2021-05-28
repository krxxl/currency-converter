import React, {useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import ConverterPage from 'containers/Pages/ConvertorPage';
import {useDispatch, useSelector} from 'react-redux';
import Template from 'containers/Dashboard/Template';
import {initDashboard, selectIsLoadingDashboard} from 'reducer/dashboard';
import RatesPage from 'containers/Pages/RatesPage';


const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initDashboard());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoadingDashboard);

  return (
    <BrowserRouter>
      {!isLoading ? <Template>
        <Switch>
          <Route exact path='/'>
            <ConverterPage/>
          </Route>
          <Route path='/second'>
            <RatesPage/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </Template>: "Loading dashboard..."}
    </BrowserRouter>
  );
};

export default Dashboard;
