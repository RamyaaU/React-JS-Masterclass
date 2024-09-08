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
import TaskCard from './TaskCard'

//old way of init props
//const TaskColumn = (props) => {
const TaskColumn = ({title, icon}) => {
  return (
      <section className='task_column'>
        <h2 className='task_column_heading'>
          {/* //old way of calling props */}
          {/* <img className='task_column_icon' src={props} alt="To do" /> {props.title} */}
          <img className='task_column_icon' src={icon} alt="To do" /> {title}
          To do
        </h2>

        <TaskCard />
      </section>
  )
}

export default TaskColumn
