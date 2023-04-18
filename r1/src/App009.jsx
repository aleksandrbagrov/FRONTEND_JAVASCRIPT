import './App.scss';
import './Components/005/animal.scss';
import Labas from './Components/009/Labas';
import Props from './Components/009/Props';
import TwoProps from './Components/009/TwoProps';
import ZebraiBebrai from './Components/009/ZebraiBebrai';
import rand from './Functions/rand';
import randColor from './Functions/randColor';

// const box = <div className='pinkBox'></div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Labas />
        <Props tekstas={"Linkejimai nuo vilko!"} />
        <ZebraiBebrai param={rand(1, 2)} />
        <TwoProps text1={"Zuikis pabego"} text2={"Bebras panyro"} color={randColor()}/>
      </header>
    </div>
  );

}

export default App;