import './App.css';
import Input from './Components/Form/Input';
import useForm from './Hooks/useForm';

function App() {
  const firstName = useForm()
  const lastName = useForm()
  const email = useForm('email')
  const password = useForm('password')
  return (
    <div className="App"> 
      <div className='left-content'>
        <h1 className='title'>Learn to code by watching others</h1>
        <p className='description'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable. </p>
      </div>

      <div className='right-content'>
        <span>
          <a href='/'>Try it free 7 days</a> then $20/mo. thereafter
        </span>
        <form>
          <Input placeholder='First Name' name='firstname' {...firstName}/>
          <Input placeholder='Last Name' name='lastname' {...lastName}/>
          <Input placeholder='Email Address' name='email' {...email}/>
          <Input placeholder='Password' name='password' {...password}/>
          <button className='button'>Claim your free trial </button>
          <p>By clicking the button, you are agreeing to our <a href='/'>Terms and Services</a></p>
        </form>
      </div>
    </div>
  )
}

export default App;
