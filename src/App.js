import { Route, Routes } from 'react-router-dom';
import AboutWar from './components/AboutWar/AboutWar';
import HelpAffectedPeople from './components/HelpAffectedPeople/HelpAffectedPeople'
import HelpUkrainianForces from './components/HelpUkrainianForces/HelpUkrainianForces';
import ImportantHelp from './components/ImportantHelp/ImportantHelp';
import './App.css'
import Main from './components/Main/Main';
import ProvideHome from './components/ProvideHome/ProvideHome';
import HumanitarianHelp from './components/HumanitarianHelp/HumanitarianHelp'
import PayForAffectedPeople from './components/PayForAffectedPeople/PayForAffectedPeople';
import PayForUkrainianForces from './components/PayForUkrainianForces/PayForUkrainianForces';
import { BrowserRouter } from 'react-router-dom';
import EnemyLosses from './components/EnemyLosses/EnemyLosses';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <div className='wrapper'>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/aboutwar' element={<AboutWar />} />
            <Route path='/helpaffectedpeople' element={<HelpAffectedPeople />} />
            <Route path='/helpukrainianforces' element={<HelpUkrainianForces />} />
            <Route path='/importanthelp' element={<ImportantHelp />} />
            <Route path='/providehome' element={<ProvideHome />} />
            <Route path='/humanitarianhelp' element={<HumanitarianHelp />} />
            <Route path='/payforaffectedpeople' element={<PayForAffectedPeople />} />
            <Route path='/payforukrainianforces' element={<PayForUkrainianForces />} />
            <Route path='/enemylosses' element={<EnemyLosses />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;

