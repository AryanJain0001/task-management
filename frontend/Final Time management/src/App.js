import React, { useEffect , useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Login } from "./Login";
import { Register } from "./Register";

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { NewProjects,TaskManagement,Projects,ProjectClient, ProjectManager , NewTask , ModifyTask, DeleteTask , TimeTracker, Meeting, Today, Yesterday, Last7Days, Last30Days, GenerateNewInvoice, OldInvoice, Calendar, Employees,  Pyramid, Kanban, Line, Area, Bar} from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import TodoApp from './pages/Todo';

// function App() {
//   const [currentForm, setCurrentForm] = useState("login");

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   };

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (


    // <div className="App">
    // {currentForm === "login" ? (
    //   <Login onFormSwitch={toggleForm} />
    // ) : (
    //   <Register onFormSwitch={toggleForm} />
    // )}

    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* Dashboard  */}
                <Route path="/" element={(<Login />)} />
                <Route path="/TaskManagement" element={(<TaskManagement />)} />


                {/* Project  */}
                <Route path="/New-project" element={<NewProjects/>} />

                {/* management  */}
                <Route path="/projects" element={<Projects/>} />
                <Route path="/project-client" element={<ProjectClient/>} />
                <Route path="/project-Manager" element={<ProjectManager/>} />
                <Route path="/employees" element={<Employees/>} />

                {/* Task  */}
                <Route path="/new-task" element={<NewTask/>} />
                <Route path="/modify-task" element={<ModifyTask />} />
                <Route path="/delete-task" element={<DeleteTask />} />


                {/* Employee Task  */}
                <Route path="/kanban" element={<Kanban/>} />
  

                {/* Apps  */}
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/time-tracker" element={<TimeTracker/>} />
                <Route path="/meeting" element={<Meeting />} />
                
                {/* Reports  */}
                <Route path="/today" element={<Today/>} />
                <Route path="/yesterday" element={<Yesterday/>} />
                <Route path="/last-7-days" element={<Last7Days/>} />
             


                {/* Invoice  */}
                <Route path="/generate-new-invoice" element={<GenerateNewInvoice/>} />
                <Route path="/old-invoice" element={<OldInvoice/>} />
         

                
                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pyramid />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/todo-app" element={<TodoApp/>} />
                
              


              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
    //  </div>
  

  );
};
// };
// };
export default App;
