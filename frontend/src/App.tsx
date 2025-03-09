import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import './App.css';

function App() {
    return (
        <MantineProvider>
            <div>
                <h1>Hello World</h1>
            </div>
        </MantineProvider>
    );
}

export default App;
