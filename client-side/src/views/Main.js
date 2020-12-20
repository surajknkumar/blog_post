/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomeComponent from './home';
import EditComponent from './articles/edit';
import NewComponent from './articles/new';
import ShowComponent from './articles/show';
function MainComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/Edit" component={EditComponent} />
        <Route path="/New" component={NewComponent} />
        <Route path="/articles/:id" component={ShowComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default MainComponent;
