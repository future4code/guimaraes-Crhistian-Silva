import './App.css';
import UserContainer from './components/usercontainer';
import ButtonContainer from './components/buttoncontainer';
import MessageContainer from './components/messagecontainer';
import MessageSentContainer from './components/messagesentcontainer';


function App() {
  return (

    <div className="BodyWatsLabContainer">

      <MessageSentContainer/> 
      
      <div className='BottomContainer'>
        <UserContainer/>
        <MessageContainer/>
        <ButtonContainer/>
      </div>

    </div>
  );
}

export default App;
