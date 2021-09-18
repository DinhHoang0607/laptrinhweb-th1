import { HashRouter, Route, Switch } from 'react-router-dom';
import Fanpage from './components/Fanpage/Fanpage';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <HashRouter>
      <Route
        render={(props) => (
          <>
            <Header />
            <div className='container'>
              <div className='main-container'>
                <Nav />
                <div className='main'>
                  <Switch>
                    <Route path='/' exact component={Form} />
                    <Route path='/map' component={Map} />
                    <Route path='/fanpage' component={Fanpage} />
                  </Switch>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      />
    </HashRouter>
  );
}

export default App;
