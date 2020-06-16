import React from 'react';
import InProgressItem from "./InProgressItem";
import projects from "../data/inprogress";

function InProgress(props) {
  
  return (
    <div className="in-progress">
      {projects.map((item, index) => (
        <div className="inprogress_item" key={index}>
          <InProgressItem
            project={item}         
            index={index}
          />
        </div>
      ))}
    </div>
  )}
      
export default InProgress;