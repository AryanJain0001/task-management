import React from "react";

const NewTask = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-violet-500 text-white font-bold py-2 px-4rounded-3xl">
      <h1>NEW TASK</h1>
      <form action="noaction.php">
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <input type="text" name="" placeholder="Project Name" />
        </div>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <input type="text" name="" placeholder="Project Manager" />
        </div>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <input type="text" name="" placeholder="Task Type" />
          </div>
          <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <input type="text" name="" placeholder="Employee Assignment" />
          
        </div>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <input
            type="text"
            name=""
            placeholder="Time Required"
          />
        </div>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <input type="text" name="" placeholder="Description" />
        </div>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">CREATE TASK</button>
      </form>
    </div>
  );
};

export default NewTask;
