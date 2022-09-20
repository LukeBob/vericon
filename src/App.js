
import { useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './components/AppContext';

function App() {
  const [data,] = useContext(AppContext)

  data && console.log(data)

  return (


        <div className="App">
          {}
        </div>

   


  );
}

export default App;
