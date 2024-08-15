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
  let count=0;

  function handleAdd()
  {
    count+=1;
    console.log(count);
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">ADD</button>
        <button className="sub">SUB</button>
      </div>
    </div>
  )
}

export default App;
