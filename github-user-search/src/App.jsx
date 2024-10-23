import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Search = lazy(() => import('./components/Search'));
const OtherComponent = lazy(() => import('./components/OtherComponent')); // Example of another component

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/other" element={<OtherComponent />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
