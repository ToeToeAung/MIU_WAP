import './App.css';
import Son  from './Components/Son/Son';

function App() {  
  
  return (
    <div>
    <h1> This is parent to Son  </h1>
     <Son>
      <span> This is a span tag in Parent</span>
     </Son>
    </div>
  );
}

export default App;
