import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';

function App() {
  return (
    <div>
      <div className="app-container">
        <Header />
        <TableUsers />
      </div>
    </div>
  );
}

export default App;
