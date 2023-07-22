import axios from "axios";
import React, { useState } from "react";
 

function Delete() {
  const [taskId, setSearch] = useState("");

  const searchid = (evt) => {
    if (evt.key === "Enter") {
      axios.delete(`http://127.0.0.1:8080/delDetails/${taskId}`)
        .then(response => {
          console.log("Question deleted successfully!");
          // You can add further logic or update state if needed
        })
        .catch(err => {
          console.log(err);
          // Handle the error if the delete request fails
        });
    }
  }

  return (
    <div className="tt">
      <div className="ccc">
        <h1 id="dels">Delete a Question </h1>
        <div className="">
          <input
            type="text"
            className="k"
            placeholder="Enter the Id"
            value={taskId}
            onChange={e => setSearch(e.target.value)}
            onKeyPress={searchid}
          />
        </div>
      </div>
    </div>
  );
}

export default Delete;