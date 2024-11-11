import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import AppRouter from './AppRouter';


function App() {
  return (
    <div className="App">
      <HelmetProvider>

          <AppRouter />
      </HelmetProvider>
    </div>
  );
}

export default App;
