import './App.css';
import { Switch, Route } from 'react-router-dom';
function App() {
    return (
        <Switch>
            <Route exact path="/">
                This is homepage
            </Route>
            <Route exact path="/ab">
                Error
            </Route>

            {/* page not found */}
            <Route>
                <h4>This Page is not Present</h4>
                <h1>404 Error</h1>
            </Route>
        </Switch>
    );
}

export default App;
