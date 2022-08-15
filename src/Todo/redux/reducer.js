import {ADD_JOB, DELETE_JOB, DONE_JOB, EDIT_JOB, SET_JOB} from "./type";

export const initState = {
   job: "",
   jobs: [],
   doneJobList: [],
};

export const reducer = (state, action) => {
   switch (action.type) {
      case SET_JOB:
         return {
            ...state,
            job: action.payload,
         };

      case ADD_JOB:
         return {
            ...state,
            jobs: [...state.jobs, action.payload],
         };

      case DONE_JOB:
         let doneJobsListUpdate = [...state.doneJobList];

         let chooseIndex = doneJobsListUpdate.includes(action.payload);

         if (chooseIndex === false) {
            // chưa có trong mảng
            doneJobsListUpdate.push(action.payload);
         } else {
            let newDoneJobsListUpdate = doneJobsListUpdate.filter(
               (job) => job !== action.payload
            );
            doneJobsListUpdate = newDoneJobsListUpdate;
         }

         return {
            ...state,
            doneJobList: doneJobsListUpdate,
         };

      case DELETE_JOB:
         const newJobs = [...state.jobs];

         newJobs.splice(action.payload, 1);

         return {
            ...state,
            jobs: newJobs,
         };

      case EDIT_JOB:
         const newEditJobs = [...state.jobs];
         newEditJobs.splice(action.index, 1);

         return {
            ...state,
            job: action.payload,
            jobs: newEditJobs,
         };

      default:
         throw new Error("invalid action");
   }
};
