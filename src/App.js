import './App.css';
import jessica from './jessica.jpeg';
function App() {
  return (
    <div className="main">
      <div className='box'>
        <img src={jessica} alt='pic' />
        <h1>Jessica Randall</h1>
        <span>London, United Kingdom</span>
        <p>"Front-end Developer and avid reader."</p>
        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
}

export default App;
