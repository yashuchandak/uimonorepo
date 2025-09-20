import React from 'react';
import './styles.css';
import { Button } from '@your-monorepo/components';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>Welcome to the UI Monorepo</h1>
            <Button label="Click Me" />
        </div>
    );
};

export default App;