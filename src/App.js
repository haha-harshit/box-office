import './App.css';

// import react router
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { Starred } from './Pages/Starred';
import { NotFound } from './Pages/NotFound';

function App() {
    return (
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
    );
}

export default App;
