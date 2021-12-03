import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { Component } from 'react';
import store from './redux/store';
import { Tabs } from './Components/Tabs/Tabs';
import { PhotosPage } from './Pages/PhotosPage/PhotosPage';
import { InternetPage } from './Pages/InternetPage/InternetPage';
import { SocialPage } from './Pages/SocialPage/SocialPage';

class App extends Component {
    render() {
      return (
        <div className="App">
          <Header/>
          <div className="container">
            <Tabs/>
            <Switch>
              <Route path="/photos" component={() => <PhotosPage/>}/>
              <Route path="/internet" component={() => <InternetPage/>}/>
              <Route path="/social" component={() => <SocialPage/>}/>
              <Route expect path="/" component={() => <div></div>}/>
            </Switch>
          </div>
        </div>
      )
    }
}

const AppContainer = compose(withRouter, connect(null , null))(App)

const MainApp = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
} 

export default MainApp;
