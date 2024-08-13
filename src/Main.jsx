import { createRoot } from 'react-dom/client'
import { useEffect } from 'react';
import { requestPermission } from './FireBaseSW';

const App = () => {
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)
