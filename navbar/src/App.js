

import './App.css';

function App() {
  const links = ['Services','Projects','About'];
  return (
    <div className="App">
      <div>
        <h1>LOGOBAKERY</h1>
      </div>
      <div className="flex">
        {links.map((e)=>{
          return <p>{e}</p>
        })}
      </div>
      <div>
        <button>Contact</button>
      </div>
    </div>
  );
}

// function Links(props) {
// 	return <p>{props.link}</p>;
// }

export default App;