import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import defaultUsers from './defaultUsers.json';

const defaultUsersState = { ...defaultUsers };

const constructUsers = (users) => {
  const usersWithGroups = {
    'All': [],
    'HR': [],
    'CEO': [],
    'Developers': [],
    'Sales': [],
    'Teamleads': [],
    'Unmanaged': [],
    'Financials': [],
    'Managers': [],
  };

  for (let user of Object.values(users)) {
    usersWithGroups[user.group].push(user);
    usersWithGroups['All'].push(user);
  }

  return usersWithGroups;
};


export const initializeApp = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => (
    await axios.get('http://62.217.183.92:5000/get_users?number=500')
      .then((res) => res.data)
      .catch((err) => defaultUsersState)
  )
);


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isInitialized: false,
    view: 'cards',
    users: {},

    searchValue: '',
    searchField: 'everywhere',
    selectedGroup: 'All',
    sortColumn: 'fullname',
    sortOrder: 'default',
  },
  reducers: {
    changeSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    changeSortColumn(state, action) {
      state.sortColumn = action.payload;
    },
    changeSelectedGroup(state, action) {
      state.selectedGroup = action.payload;
    },
    changeSearchColumn(state, action) {
      state.searchField = action.payload;
    },
    changeSearchValue(state, action) {
      state.searchValue = action.payload.toLowerCase();
    },
    setView(state, action) {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeApp.pending, (state) => {
      console.log('loading list of users');
    });

    builder.addCase(initializeApp.fulfilled, (state, action) => {
      state.users = constructUsers(action.payload.users);
      state.isInitialized = true;
    });

  },
});

export default usersSlice.reducer;
export const {
  changeSortOrder,
  changeSortColumn,
  changeSelectedGroup,
  changeSearchColumn,
  changeSearchValue,
  setView,
} = usersSlice.actions;