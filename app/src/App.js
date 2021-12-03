import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { Component } from 'react';
import store from './redux/store';
import { Tabs } from './Components/Tabs/Tabs';
import { PhotosPage } from './Pages/PhotosPage/PhotosPage';
import { InternetPage } from './Pages/InternetPage/InternetPage';
import { SocialPage } from './Pages/SocialPage/SocialPage';
import { AccPage } from './Pages/AccPage/AccPage';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { loginUser } from './redux/reducers';

class App extends Component {
    componentDidMount() {
      const login = localStorage.getItem('login')
      const password = localStorage.getItem('password')
      this.props.loginUser(login, password)
    }


    render() {
      if (!this.props.initialized) {
        return (
          <LoginPage/>
        )
      }else{
      return (
        <div className="App">
          <Header/>
            <Switch>
              <Route expect path="/accaunt" component={() => <AccPage/>}/>
              <Route expect path="/" component={() => <div className="container">
                    <Tabs/>
                    <Switch>
                      <Route path="/photos" component={() => <PhotosPage/>}/>
                      <Route path="/internet" component={() => <InternetPage/>}/>
                      <Route path="/social" component={() => <SocialPage/>}/>
                      <Route path="*"><Redirect to="/photos" /></Route>
                    </Switch>
                </div>
                }/>
            </Switch>
        </div>
      )
      }
    }
}

const mapStateToProps = (state) => ({
  userType: state.app.userType,
  initialized: state.app.initialized
})

const AppContainer = compose(withRouter , connect(mapStateToProps, { loginUser }))(App)

const MainApp = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
} 

export default MainApp;
