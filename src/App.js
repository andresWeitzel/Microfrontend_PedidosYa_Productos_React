import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Message } from './components/Message';
import  Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Message></Message>
    </div>
  );
}

export default App;
