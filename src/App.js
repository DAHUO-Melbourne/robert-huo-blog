import React, {useState} from 'react';
import Homepage from './pages/homepage'
import Programs from './pages/programs';
import TopMenu from './components/menu';
import { BrowserRouter, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

export const Context = React.createContext();

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  const handleSwitch = language => {
      setCurrentLanguage(language)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <TopMenu currentLanguage={currentLanguage} handleSwitch={handleSwitch}/>
        <Context.Provider value={currentLanguage}>
          <Route path = '/' exact component={Homepage}/>
          <Route path = '/programs' exact component={Programs}/>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
