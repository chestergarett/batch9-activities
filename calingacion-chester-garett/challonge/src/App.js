import './App.css';
import QuickShortcutSidebar from './components/QuickShortcutSidebar/QuickShortcutSidebar';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainBody from './components/MainBody/MainBody';
import Login from './components/Login/Login';

function App() {
  return (
    <div className='main-app'>
      <div className='quick-shortcut-sidebar'>
        <QuickShortcutSidebar />
      </div>
      <div className='main-sidebar'>
        <MainSidebar />
      </div>
      <div className='main-body'>
        <MainBody />
      </div>
    </div>
    // <Login/>

  );
}

export default App;
