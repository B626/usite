import { Link, Route, Routes } from 'react-router-dom';
import AboutWar from './components/AboutWar/AboutWar';
import HelpAffectedPeople from './components/HelpAffectedPeople/HelpAffectedPeople'
import HelpUkrainianForces from './components/HelpUkrainianForces/HelpUkrainianForces';
import ImportantHelp from './components/ImportantHelp/ImportantHelp';
import logo from './assets/img/logo.png'
import './App.css'
import Main from './components/Main/Main';
import ProvideHome from './components/ProvideHome/ProvideHome';
import HumanitarianHelp from './components/HumanitarianHelp/HumanitarianHelp'
import PayForAffectedPeople from './components/PayForAffectedPeople/PayForAffectedPeople';
import PayForUkrainianForces from './components/PayForUkrainianForces/PayForUkrainianForces';
import { BrowserRouter } from 'react-router-dom';
import EnemyLosses from './components/EnemyLosses/EnemyLosses';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='wrapper'>
          <div className='headerWrapper'>
            <header className='header'>
              <div>
                <Link to='/'>
                  <img className='logo' src={logo} alt="" />
                </Link>
              </div>
              <nav>
                <Link className='navItem' to='/aboutwar'>Про війну</Link>
                <Link className='navItem' to='/helpaffectedpeople'>Допомогти постраждалим</Link>
                <Link className='navItem' to='/helpukrainianforces'>Допомогти ЗСУ</Link>
                <Link className='navItem' to='/importanthelp'>Чому важливо допомагати</Link>
              </nav>
            </header>
          </div>
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


// store={props.store.getState()}

export default App;

