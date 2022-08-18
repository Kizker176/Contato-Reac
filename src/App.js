import logo from './logo.svg';
import './App.css';
import ContactoList from './components/container/contacto_list';

function App() {
  const defaultcontact = { name: 'Kizker', Apellido: 'Alvarez', Email: 'kizkereac@reac.com', conectado: false };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoList contact={defaultcontact}></ContactoList>
      </header>
    </div>
  );
}

export default App;
