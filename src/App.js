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
        <span className='price-info'>
          <a href='/'>Try it free 7 days</a> then $20/mo. thereafter
        </span>
        <form>
          <Input placeholder='First Name' name='firstname' type='text' {...firstName}/>
          <Input placeholder='Last Name' name='lastname' type='text'{...lastName}/>
          <Input placeholder='Email Address' name='email' type='email'{...email}/>
          <Input placeholder='Password' name='password' type='password'{...password}/>
          <button className='button'>Claim your free trial </button>
          <p className='terms-description'>By clicking the button, you are agreeing to our <a href='/'>Terms and Services</a></p>
        </form>
      </div>
    </div>
  )
}

export default App;
