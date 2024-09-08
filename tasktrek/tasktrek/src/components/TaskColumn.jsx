// import React from 'react'
// import Todo from "../assets/direct-hit.png"
// import "./TaskColumn.css"

// const TaskColumn = () => {
//   return (
//     <div>
//       <section className='task_column'>
//         <h2 className='task_column_heading'>
//           <img className='task_column_icon' src = {Todo} alt = " " /> To do</h2>
//       </section>
//     </div>
//   )
// }

// export default TaskColumn

import React from 'react'
import Todo from "../assets/direct-hit.png"
import "./TaskColumn.css"

const TaskColumn = (props) => {
  return (
      <section className='task_column'>
        <h2 className='task_column_heading'>
          <img className='task_column_icon' src={props.icon} alt="To do" /> {props.title}
          To do
        </h2>
      </section>
  )
}

export default TaskColumn
