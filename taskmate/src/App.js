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
import React, { Component } from 'react'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <div>
        <h1>Ramya is teh best</h1>
      </div>
      <Footer />
      </>
    )
  }
}
