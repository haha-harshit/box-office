import './App.css';

// import react router
import { Switch, Route } from 'react-router-dom';

import { Nav } from './myComponents/Nav';
import { HomePage } from './Pages/HomePage';
import { Starred } from './Pages/Starred';
import { NotFound } from './Pages/NotFound';

function App() {
    return (
        <div>
            <Nav />

            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/starred">
                    <Starred />
                </Route>

                {/* page not found */}
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
