import {useReducer} from "react";

import "../App.css";
import {addJob, deleteJob, doneJob, editJob, setJob} from "./redux/actions";
import {initState, reducer} from "./redux/reducer";

// 4. Dispatch

function App() {
   const [state, dispatch] = useReducer(reducer, initState);

   const {job, jobs, doneJobList} = state;

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addJob(job));
      dispatch(setJob(""));
   };

   return (
      <div className="app">
         <div className="container">
            <header>
               <h1>Todo App</h1>
               <form id="new-task-form">
                  <input
                     value={job}
                     type="text"
                     name="new-task-input"
                     id="new-task-input"
                     placeholder="Enter job"
                     onChange={(e) => {
                        dispatch(setJob(e.target.value));
                     }}
                  />
                  <button onClick={handleSubmit} id="new-task-submit">
                     Add
                  </button>
               </form>
            </header>
            <main>
               <section className="task-list">
                  <div id="tasks">
                     <div>
                        {jobs.map((job, index) => {
                           return (
                              <div className="task" key={index}>
                                 <div className="content">
                                    <div
                                       className={`${
                                          doneJobList.includes(job) === true
                                             ? "doneJob"
                                             : ""
                                       }`}>
                                       {job}
                                    </div>
                                 </div>
                                 <div className="actions">
                                    <button
                                       onClick={() => dispatch(doneJob(job))}
                                       className="done">
                                       {doneJobList.includes(job) ? (
                                          <div style={{color: "crimson"}}>
                                             Undo
                                          </div>
                                       ) : (
                                          <div>Done</div>
                                       )}
                                    </button>
                                    <button
                                       onClick={() =>
                                          dispatch(editJob(job, index))
                                       }
                                       className="edit">
                                       Edit
                                    </button>
                                    <button
                                       onClick={() =>
                                          dispatch(deleteJob(index))
                                       }
                                       className="delete">
                                       Delete
                                    </button>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </section>
            </main>
         </div>
      </div>
   );
}

export default App;
