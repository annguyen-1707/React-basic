import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { Bounce, ToastContainer } from 'react-toastify';


function App() {


  return (
    <div>
      <div className="app-container">
        <Container>
          <Header />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <TableUsers />
        </Container>

      </div>
    </div>
  );
}

export default App;
