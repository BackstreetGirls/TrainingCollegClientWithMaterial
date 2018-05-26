import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import HomePage from './routes/HomePage';
import Page404 from './routes/404Page';
import CourseDetailPage from './routes/CourseDetailPage';
import PlaceOrderMainPage from './routes/placeorder/PlaceOrderMainPage';
import TraineeInfoPage from './routes/traineeinfo/TraineeInfoPage';
import ChangePasswordPage from './routes/traineeinfo/ChangePasswordPage';
import OrderListPage from './routes/myorder/OrderListPage'
import AllCoursesPage from './routes/courselist/AllCoursesPage';
import SearchResultPage from './routes/courselist/SearchResultPage';
import MyFavoritePage from './routes/courselist/MyFavoritePage'

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/homepage" exact component={HomePage}/>
        <Route path="/detail&courseID=:key" exact component={CourseDetailPage}/>
        {/*<Route path="/detail" exact component={CourseDetailPage}/>*/}
        <Route path='/placeorder' exact component={PlaceOrderMainPage}/>
        <Route path='/traineecenter' exact component={TraineeInfoPage}/>
        <Route path='/changepassword' exact component={ChangePasswordPage}/>
        <Route path='/myorder' exact component={OrderListPage}/>
        <Route path='/allcourses' exact component={AllCoursesPage}/>
        <Route path='/searchresult' exact component={SearchResultPage}/>
        <Route path='/myfavorite' exact component={MyFavoritePage}/>

        <Route path='*' exact component={Page404}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
