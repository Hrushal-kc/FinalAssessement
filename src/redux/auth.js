import {createSlice} from '@reduxjs/toolkit';
const initialValues = [];

export const userCreditional = createSlice({
  name: 'creditional',
  initialState: {user: initialValues, isValidUser: null},
  reducers: {
    signUpUser: (state, action) => {
      state.user.push(action.payload);
    },
  },

  signINUser: (state, action) => {
    // state.user = state.user.map(credentials => {
    //   if (credentials.MobileNumber === action.payload.MobileNumber) {
    //     if (credentials.mPin === action.payload.mPin) {
    //       state.isValidUser = true;
    //     }

    //   }

    // });
    console.log(action.payload);
  },
});

export const {signUpUser, signINUser} = userCreditional.actions;
export default userCreditional.reducer;
