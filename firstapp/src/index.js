import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

// JSX
const App = () => {
    return(
        <div>
            <Header/>
            <h1>Welcome to react APP</h1>
            <h2>This iS NareshIt Class</h2>
            <div>
                This is inner div
            </div>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));