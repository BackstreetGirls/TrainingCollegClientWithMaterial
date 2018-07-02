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
// import SearchResultPage from './routes/courselist/SearchResultPage';
import MyFavoritePage from './routes/courselist/MyFavoritePage'
import PythonSearchPage from './routes/courselist/PythonSearchPage'
import CurrentPage from './routes/courselist/CurrentPage'
import ArtCulturePage from './routes/courselist/ArtCulturePage'

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/homepage" exact component={HomePage}/>
        <Route path="/detail&courseID=:key" exact component={CourseDetailPage}/>
        <Route path='/placeorder' exact component={PlaceOrderMainPage}/>
        <Route path='/traineecenter' exact component={TraineeInfoPage}/>
        <Route path='/changepassword' exact component={ChangePasswordPage}/>
        <Route path='/myorder' exact component={OrderListPage}/>
        <Route path='/allcourses' exact component={AllCoursesPage}/>
        <Route path='/searchresult' exact component={PythonSearchPage}/>
        <Route path='/myfavorite' exact component={MyFavoritePage}/>
        <Route path='/pythonsearch' exact component={PythonSearchPage}/>
        <Route path='/currentcourses' exact component={CurrentPage}/>
        <Route path='/artcourses' exact component={ArtCulturePage}/>

        <Route path='*' exact component={Page404}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
