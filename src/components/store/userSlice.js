import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/lib/axiosInstanse';

export const inviteUser = createAsyncThunk(
  'user/invite',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('api/v1/users/invite-user', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const initiateSignup = createAsyncThunk(
  'user/initiateSignup',
  async (inviteToken, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`api/v1/users/initiate-signup/${inviteToken}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const completeSignup = createAsyncThunk(
  'user/completeSignup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('api/v1/users/complete-signup', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  'user/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('api/v1/users/all');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/update',
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`api/v1/users/update/${id}`, userData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message || 'Update failed');
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'user/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`api/v1/users/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    invitedUser: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearInvitedUser: (state) => {
      state.invitedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(inviteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(inviteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.invitedUser = action.payload.user;
        state.users.push(action.payload.user);
      })
      .addCase(inviteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(initiateSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initiateSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(initiateSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(completeSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(completeSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(completeSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.pagination = {
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          hasNextPage: action.payload.hasNextPage
        };
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload.user;
        const index = state.users.findIndex(user => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
        if (state.currentUser && state.currentUser.id === updatedUser.id) {
          state.currentUser = updatedUser;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.loading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = false;
      });
  },
});

export const { clearError, clearInvitedUser } = userSlice.actions;

export default userSlice.reducer;
