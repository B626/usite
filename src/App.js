import { Link, Route, Routes } from 'react-router-dom';
import AboutWar from './components/AboutWar/AboutWar';
import HelpAffectedPeople from './components/HelpAffectedPeople/HelpAffectedPeople'
import HelpUkrainianForces from './components/HelpUkrainianForces/HelpUkrainianForces';
import ImportantHelp from './components/ImportantHelp/ImportantHelp';
import logo from './assets/img/logo.png'
import s from './App.module.css'
import Main from './components/Main/Main';

function App() {
  return (
    <div className={s.app}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <div>
            <Link to='/main'>
              <img className={s.logo} src={logo} alt="" />
            </Link>
          </div>
          <nav>
            <Link className={s.navItem} to='/aboutwar'>About war</Link>
            <Link className={s.navItem} to='/helpaffectedpeople'>Help affected people</Link>
            <Link className={s.navItem} to='/helpukrainianforces'>Help ukrainian forces</Link>
            <Link className={s.navItem} to='/importanthelp'>Help is important</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/aboutwar' element={<AboutWar />} />
          <Route path='/helpaffectedpeople' element={<HelpAffectedPeople />} />
          <Route path='/helpukrainianforces' element={<HelpUkrainianForces />} />
          <Route path='/importanthelp' element={<ImportantHelp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
