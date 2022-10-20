import {createSlice} from '@reduxjs/toolkit';
import fblogo from '../../assests/Bitmap.png';
import youtube from '../../assests/youtube.png';
import twitter from '../../assests/twitter.png';
import instagram from '../../assests/instagram.png';

const DATA = [
  {
    id: 1,
    URL: 'www.facebook.com',
    SiteName: 'Facebook',
    Sector: 'Social Media',
    UserName: 'abcd',
    SitePassword: '1234',
    Notes: '',
    image: fblogo,
  },
  {
    id: 2,
    URL: 'www.youtube.com/ssmraok',
    SiteName: 'YouTube',
    Sector: 'Social Media',
    UserName: 'abcd',
    SitePassword: '1234',
    Notes: '',
    image: youtube,
  },
  {
    id: 3,
    URL: 'www.twitter.com',
    SiteName: 'Twitter',
    Sector: 'Social Media',
    UserName: 'abcd',
    SitePassword: '1234',
    Notes: '',
    image: twitter,
  },
  {
    id: 4,
    URL: 'www.instagram.com',
    SiteName: 'Instagram',
    Sector: 'Social Media',
    UserName: 'abcd',
    SitePassword: '1234',
    Notes: '',
    image: instagram,
  },
];

export const slice = createSlice({
  name: 'slice',
  initialState: {value: DATA},
  reducers: {
    addSite: (state, action) => {
      state.value.push(action.payload);
    },

    updateSite: (state, action) => {
      state.value = state.value.map(passwordDetails => {
        if (passwordDetails.id === action.payload.id) {
          passwordDetails = action.payload;
        }
        return passwordDetails;
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
