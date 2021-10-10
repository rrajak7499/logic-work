import './App.css';
import Navbar from './Component/Navbar'
import MyInputBox from './Component/MyInputBox'

function App() {
  return (
    <>
      <Navbar title="Jio" home="Home" about="About Us"/>
      <div className="container">
      <MyInputBox heading="Input text below:" />
      </div>
    </>
  );
}

export default App;
