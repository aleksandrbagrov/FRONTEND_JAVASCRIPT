import './App.scss';
import Circle from './Components/010/Circle';
import Square from './Components/010/Square';


const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {

  // const print = color => {
  //   console.log('%c' + color, `background:${color}; padding:5px;`);
  // }

  return (
    <div className="App">
      <header className="App-header">

        <div className="squares">
          {
            dogs.map((dog, index) => <Square key={index} dog={dog} />)
          }
        </div>
        <div className="circles">
          {
            [...dogs].sort((a, b) => b.length - a.length).map((dog, index) => <Circle key={index} dog={dog} id={index + 1} />)
          }
        </div>

        <div className='flex'>
          {
            dogs.map((dog, index) => index % 2 === 0 ? <div className="squares"><Square key={index} dog={dog} /></div> : <div className="circles"><Circle key={index} dog={dog} id={index + 1} /></div>)
          }
        </div>
        <div className="squares">
          {
            dogs.filter(dog => dog[0] !== dog[0].toUpperCase()).map((dog, index) => <Square key={index} dog={dog} />)
          }
        </div>
        <div className="squares">
          {
            dogs.map((dog, index) => <Square key={index} dog={dog.length} color={dog.length > 6 ? "greenyellow" : "red"}/>)
          }
        </div>


      </header>
    </div>
  );

}

export default App;