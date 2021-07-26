import { BrowserRouter, Route } from 'react-router-dom'

import { Landing, Kiosk } from '../routes';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/kiosk" exact component={Kiosk} />
        </BrowserRouter>
    );
}

export { Router };