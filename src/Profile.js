import './App.css';
import React, { useState } from 'react';
import Tag from './Tag';


export default function Profile(props) {
  // Import props
  const { itemIdx, item, addTags } = props
  // Initialise other required props
  const [isCollapsed, setCollapsed] = useState(true)

  const handleTagAdd = (tag, e) => {
    console.log(e)
    console.log("tag callbacked to profile")
    addTags(tag);
  }

  return (
    // Render Profiles details
    <div className="App">
      <div className="Container" key={itemIdx}>
        <div className="Profile">
          {/* test score toggle button */}
          <button className="Button" name="button" onClick={() => setCollapsed(!isCollapsed)}>{isCollapsed ? "+" : "-"}</button>
          {/* Profile picture */}
          <img className="Profile-pic" src={item.pic} alt={item.firstName}></img>
          <div className="Profile-info">
            <h1 className="Profile-name">{item.firstName}{" "}{item.lastName}</h1>
            <div className="Profile-secondary">
              <p>Email: {item.email}</p>
              <p> Company: {item.company}</p>
              <p>Skill: {item.skill}</p>
              {/* Reducer function to calculate Average Grades */}
              <p> Grades:{(item.grades.reduce((a, b) => parseInt(a) + parseInt(b), 0) / item.grades.length)}%</p>
              {/* Render Profile tags here */}
              <Tag item={item} handleTagAdd={(value) => handleTagAdd(value)} isCollapsed={isCollapsed} />
              {/* Test Scores */}
              {item.grades.map((grade, gradeIdx) =>
                <p className={isCollapsed ? "Profile-grades" : "Grades-toggle"} key={gradeIdx}>Test{gradeIdx + 1} : {grade}</p>)}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

