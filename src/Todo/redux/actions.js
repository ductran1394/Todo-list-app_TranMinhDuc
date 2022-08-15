import {ADD_JOB, DELETE_JOB, DONE_JOB, EDIT_JOB, SET_JOB} from "./type";

export const setJob = (payload) => {
   return {
      type: SET_JOB,
      payload,
   };
};

export const addJob = (payload) => {
   return {
      type: ADD_JOB,
      payload,
   };
};

export const doneJob = (payload) => {
   return {
      type: DONE_JOB,
      payload,
   };
};

export const deleteJob = (payload) => {
   return {
      type: DELETE_JOB,
      payload,
   };
};

export const editJob = (payload, index) => {
   return {
      type: EDIT_JOB,
      payload,
      index,
   };
};
