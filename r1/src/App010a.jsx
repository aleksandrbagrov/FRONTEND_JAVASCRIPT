import './App.scss';
import Bala from './Components/010/Bala';
import Sala from './Components/010/Sala';
import Tvenkinis from './Components/010/Tvenkinis';
import Valtis from './Components/010/Valtis';



const seaPlaners = [
  { id: 1, type: 'man', name: 'Lina', color: 'blue' },
  { id: 2, type: 'car', name: 'Opel', color: 'red' },
  { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
  { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
  { id: 5, type: 'man', name: 'Tomas', color: 'green' },
  { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
  { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
  { id: 8, type: 'car', name: 'MB', color: 'blue' },
  { id: 9, type: 'car', name: 'ZIL', color: 'red' },
  { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

const render = [
  { type: 'man', render: 'Valtys' },
  { type: 'car', render: 'Laivas' },
  { type: 'animal', render: 'Sala' },
  { type: 'fish', render: 'Jura' },
]


function App() {

  return (
    <div className="App">
      <header className="App-header">

        <div className='data-table'>
          <h1>Task #1</h1>
          {
            seaPlaners.map(item => <Bala key={seaPlaners.id} data={item} />)
          }
        </div>
        <div className='data-table'>
          <h1>Task #2</h1>
          <Tvenkinis key={seaPlaners.id} data={seaPlaners} />
        </div>
        <div className='data-table'>
          <h1>Task #3</h1>
          {
            seaPlaners.map(line => <div)
          }
          <Jura />

        </div>

      </header>
    </div>
  );

}

export default App;