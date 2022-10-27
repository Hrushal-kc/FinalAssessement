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
  initialState: {value: DATA, siteContainer: DATA},
  reducers: {
    addSite: (state, action) => {
      state.value.push(action.payload);
      state.siteContainer.push(action.payload);
    },

    updateSite: (state, action) => {
      state.value = state.value.map(passwordDetails => {
        if (passwordDetails.id === action.payload.id) {
          passwordDetails = action.payload;
        }
        return passwordDetails;
      });
      state.siteContainer = state.value;
    },

    deleteSite: (state, action) => {
      state.value = state.value.filter(task => task.id !== action.payload.id);
      state.siteContainer = state.value;
    },

    filterSite: (state, action) => {
      state.value = state.siteContainer.filter(values =>
        values.SiteName.toLowerCase().includes(action.payload.toLowerCase()),
      );
      console.log(action.payload);
    },

    filterDropDown: (state, action) => {
      if (action.payload == 'All') {
        state.value = state.siteContainer;
      } else {
        state.value = state.siteContainer.filter(site =>
          site.Sector.toLowerCase().includes(action.payload.toLowerCase()),
        );
      }
    },
  },
});

export default slice.reducer;
export const {addSite, updateSite, deleteSite, filterSite, filterDropDown} =
  slice.actions;
