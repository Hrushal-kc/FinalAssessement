import {createSlice} from '@reduxjs/toolkit';
const initialValues = [];

export const userCreditional = createSlice({
  name: 'creditional',
  initialState: {user: initialValues, isValidUser: null},
  reducers: {
    signUpUser: (state, action) => {
      state.user.push(action.payload);
      //   console.log(action.payload);
    },
    signINUser: (state, action) => {
      state.user = state.user.map(credential => {
        if (credential.MobileNumber === action.payload.MobileNumber) {
          if (credential.mPin === action.payload.mPin) {
            state.isValidUser = true;
          }
        }
      });
      console.log(action.payload);
    },
  },

  // state.user = state.user.map(credentials => {
  //   if (credentials.MobileNumber === action.payload.MobileNumber) {
  //     if (credentials.mPin === action.payload.mPin) {
  //       state.isValidUser = true;
  //     }

  //   }

  // });
});

export const {signUpUser, signINUser} = userCreditional.actions;
export default userCreditional.reducer;
