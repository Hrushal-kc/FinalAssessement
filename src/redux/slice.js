import {createSlice} from '@reduxjs/toolkit';

const taskList = [
  {
    id: 1,
    task: 'doing the app',
    status: 'false',
  },

  {
    id: 2,
    task: 'running app',
    status: 'false',
  },
];

export const slice = createSlice({
  name: 'slice',
  initialState: {value: taskList},
  reducers: {
    addSite: (state, action) => {
      state.value.push(action.payload);
    },

    updateSite: (state, action) => {
      state.value.map(task => {
        if (task.id === action.payload.id) {
          task.task = action.payload.task;
        }
      });
    },

    deleteSite: (state, action) => {
      state.value = state.value.filter(task => task.id !== action.payload.id);
    },

    updateStatus: (state, action) => {
      state.value.map(task => {
        if (task.id === action.payload.id) {
          task.status = action.payload.status;
        }
      });
    },
  },
});

export default slice.reducer;
export const {addSite, updateSite, deleteSite, updateStatus} = slice.actions;
