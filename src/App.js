import './App.css';

// import react router
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './Pages/HomePage';
import { Starred } from './Pages/Starred';
import { NotFound } from './Pages/NotFound';
import { Show } from './Pages/Show';

import { ThemeProvider } from 'styled-components';

const theme = {
    mainColors: {
        blue: '#2400ff',
        gray: '#c6c6c6',
        dark: '#353535',
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default App;
