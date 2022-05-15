import './App.css';
import Input from './Components/Form/Input';

function App() {
  return (
    <div className="App"> 
      <div className='left-content'>
        <h1 className='title'>Learn to code by watching others</h1>
        <p className='description'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable. </p>
      </div>

      <div className='right-content'>
        <span>Try it free 7 days then $20/mo. thereafter</span>
        <form>
          <Input placeholder='First Name' name='firstname'/>
          <Input placeholder='Last Name' name='lirstname'/>
          <Input placeholder='Email Address' name='email'/>
          <Input placeholder='Password' name='password'/>
          <button>Claim your free trial </button>
          <p>By clicking the button, you are agreeing to our Terms and Services</p>
        </form>
      </div>
    </div>
  )
}

export default App;
