import RootLayout from '@components/rootLayout';
import NoteView from '@components/views/noteView';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

import './App.css';

function App() {
    const theme = createTheme({ fontFamily: 'Aptos', defaultRadius: 'md' });
    return (
        <MantineProvider theme={{ ...theme }}>
            <RootLayout>
                <NoteView />
            </RootLayout>
        </MantineProvider>
    );
}

export default App;
