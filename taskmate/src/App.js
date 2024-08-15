//functional based component
//one way 
// export const App = () =>
// {
//     return (
//         <h1>Hi!</h1>
//     )
// }

// //second way \
// const App = () =>
//     {
//         return (
//             <h1>Hi!</h1>
//         )
//     }

// export default App;

// //function based component
// import React from 'react'

// export default function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

//arrow function component
// import React from 'react'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

//class based component
//import React, { Component } from 'react'
// import Header from "./components/Header.js";
// import Footer from "./components/Footer.js";
import "./App.css";
import { useState } from 'react';


// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Header/>
//         <div>
//         <h1>Ramya is the best</h1>
//       </div>
//       <Footer />
//       </>
//     )
//   }
// }

function App()
{
  //replacing this with usestate
  //let count=0;
  const [count, setCount] = useState(0);

  function handleAdd()
  {
    //  count+=1;
    //  console.log(count);
   // setCount(count + 1);
    setCount(count => count + 5);
  }

  function handleSub()
  {
    setCount(count - 1);
  }

  function Reset()
  {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">ADD</button>
        <button onClick={handleSub} className="sub">SUB</button>
        <button onClick={Reset} className="reset">RESET</button>
      </div>
    </div>
  )
}

export default App;
