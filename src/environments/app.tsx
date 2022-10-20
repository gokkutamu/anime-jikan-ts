// Package main
import { Route, Routes } from 'react-router-dom';

// Page constructor
import Home from '../assets/fonts/Home';

function App() {
    return (
        <Routes>
            <Route index element={ <Home/> } />
        </Routes>
    );
}

export default App;