import React, { useState } from 'react'
import './App.css'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [task, settask] = useState(0)
  const [complete, setcomplete] = useState(0)
  const [work, setwork] = useState("")
  const [category, setcategory] = useState("")
  const [level, setlevel] = useState("Medium")
  const [taskelement, settaskelement] = useState([])

  const addtask = () => {
    if (work === "") {
      alert("Please set the task")
      return
    }
    if (category === "") {
      alert("Please set the category")
      return
    }

    settaskelement([
      ...taskelement,
      {
        "work": work,
        "level": level,
        "category": category,
        "completed": false, // New state for completed task
      }
    ])

    settask(task + 1)
    setwork("")
    setcategory("")
  }

  const deletetask = (index) => {
    const updatedTasks = taskelement.filter((_, i) => i !== index)
    settaskelement(updatedTasks)
    settask(task - 1)
    setcomplete(complete-1)
  }

  const completebtn = (index) => {
    const updatedTasks = [...taskelement]
    const taskToUpdate = updatedTasks[index]
    
    if (!taskToUpdate.completed) {
      taskToUpdate.completed = true
      setcomplete(complete + 1)
    }
    settaskelement(updatedTasks)
  }

  return (
    <div className='container'>
      <div className='heading'>
        <div>
          <h1>My Tasks</h1>
          <p>Keep Track of your tasks</p>
        </div>
        <div>
          <p><span></span>{complete}/{task} done</p>
        </div>
      </div>

      <div className='card-container'>
        <div>
          <span style={{ color: "#8e9196" }}>
            <i className="ri-todo-fill" style={{ fontSize: "20px", color: "blue" }}></i> Total Tasks
          </span>
          <h1>{task}</h1>
        </div>
        <div>
          <span style={{ color: "#8e9196" }}>
            <i className="ri-check-fill" style={{ color: "green", fontSize: "20px" }}></i> Completed
          </span>
          <h1>{complete}</h1>
        </div>
        <div>
          <span style={{ color: "#8e9196" }}>Success Rate</span>
          <h3>0%</h3>
        </div>
      </div>

      <div className='addtask-container'>
        <div className='addtask1'>
          <input
            placeholder='What needs to be done?'
            type='text'
            value={work}
            onChange={(e) => setwork(e.target.value)}
          />
          <select value={level} onChange={(e) => setlevel(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className='addtask2'>
          <input
            placeholder='Category(Optional)'
            type='text'
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          />
          <button onClick={addtask}>Add Task</button>
        </div>
      </div>

      <div className='search-container'>
        <i className="ri-search-line"></i>
        <input placeholder='Search tasks...' />
      </div>

      <div className='tasks-elements'>
        {taskelement.map((item, index) => (
          <div
            key={index}
            className='task-element'
            style={{
              backgroundColor: item.completed ? "#4caf50" : "var(--cardbgc)",
              padding: "15px",
              borderRadius: "15px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: item.completed ? "green" : "gray",
                  marginTop: "5px",
                  cursor: "pointer"
                }}
                onClick={() => completebtn(index)}
              >
                <i className={item.completed ? "ri-check-line" : "ri-radio-button-line"}></i>
              </span>
              <div>
                <h2 style={{ color: "white", margin: 0 }}>{item.work}</h2>
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <span
                    style={{
                      backgroundColor: "#4c3b10",
                      color: "gold",
                      padding: "2px 10px",
                      borderRadius: "10px",
                      fontSize: "13px"
                    }}
                  >
                    {item.level.toLowerCase()}
                  </span>
                  <span
                    style={{
                      backgroundColor: "#3b3e49",
                      color: "white",
                      padding: "2px 10px",
                      borderRadius: "10px",
                      fontSize: "13px"
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <i className="ri-pencil-line" style={{ color: "#ccc", cursor: "pointer" }}></i>
              <i
                className="ri-delete-bin-6-line"
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => deletetask(index)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
