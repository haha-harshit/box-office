import './App.css';

// import react router
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { Starred } from './Pages/Starred';
import { NotFound } from './Pages/NotFound';
import { Show } from './Pages/Show';

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/starred">
                <Starred />
            </Route>

            <Route exact path="/show/:id">
                <Show />
            </Route>

            {/* page not found */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default App;
