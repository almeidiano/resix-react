import Nav from '../components/Nav.js';
import Sidebar from '../components/Sidebar.js';
import ToggleButtonLaunch from '../components/ToggleButtonLaunch.js';

function LaunchBtns() {

  const Btns = () => {
    const buttons = [];

    for (let i = 1; i < 9; i++) {
      buttons.push(
        <div className='switchToggle-area'>{<ToggleButtonLaunch pinNumber={i} />}</div>
      );
    }

    return(
      <div className='launchBtns'>
        {buttons}
      </div>
    );
  }

  return (
    <div className='app'>
      <Sidebar />
      <Nav />
      <div className="container">
        <main>
          <Btns />
        </main>
      </div>
    </div>
  )
}

export default LaunchBtns