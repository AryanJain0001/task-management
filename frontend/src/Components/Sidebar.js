import React from 'react'
 const Sidebar = ()=>  {
  
    return (
      <div>
        
<button className="btn btn-sm btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Side Navigator
</button>

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <button type="button" h5 className="offcanvas-title" id="staticBackdropLabel" class="navbar navbar-dark bg-dark" herf="#">home</button>
        
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <button className="offcanvas-body" class="navbar navbar-dark bg-dark"> 
    <div>
     Add Project
    </div>
  </button>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Task
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Add</a></li>
    <li><a class="dropdown-item" href="#">Modify</a></li>
    <li><a class="dropdown-item" href="#">Delete</a></li>
  </ul>
</div>
  <button className="offcanvas-body" class="navbar navbar-dark bg-dark">
    <div>
   projects
    </div>
  </button>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Employee
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Add</a></li>
    <li><a class="dropdown-item" href="#">delete</a></li>
 </ul>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Employee Task
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">All Task</a></li>
    <li><a class="dropdown-item" href="#">Ongoing Task</a></li>
    <li><a class="dropdown-item" href="#">Completed Task</a></li>
  </ul>
</div>
  <button className="offcanvas-body" class="navbar navbar-dark bg-dark">
    <div>
Time Tracker
    </div>
  </button>
  <button  className="offcanvas-body" class="navbar navbar-dark bg-dark">
    <div>
   Meeting
    </div>
  </button>
  <button className="offcanvas-body" class="navbar navbar-dark bg-dark">
    <div>
Client
    </div>
  </button>

  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Reports
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Today</a></li>
    <li><a class="dropdown-item" href="#">Yesterday</a></li>
    <li><a class="dropdown-item" href="#">Last 7 Days</a></li>
    <li><a class="dropdown-item" href="#">Last 30 Days</a></li>
  </ul>
  <button className="offcanvas-body" class="navbar navbar-dark bg-dark">
    <div>
 Invoice
    </div>
  </button>
  <button className="offcanvas-body" class="navbar navbar-dark bg-dark">
    <divr>
Calender
    </divr>
  </button>
</div>
</div>
        
      </div>
    )
  }


  export default Sidebar

