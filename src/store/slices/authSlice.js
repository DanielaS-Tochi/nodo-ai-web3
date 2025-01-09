import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock async delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user storage
const mockUsers = new Map();

// Helper function to handle tokens
const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

// Async thunks
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      await delay(1000); // Simulate API call
      
      // Check if user exists
      const user = mockUsers.get(credentials.email);
      if (!user || user.password !== credentials.password) {
        throw new Error('Credenciales inválidas');
      }

      const token = 'mock-jwt-token-' + Date.now();
      setAuthToken(token);
      
      return {
        token,
        user: { email: credentials.email }
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      await delay(1000); // Simulate API call

      // Check if user already exists
      if (mockUsers.has(userData.email)) {
        throw new Error('El usuario ya existe');
      }

      // Store user
      mockUsers.set(userData.email, {
        email: userData.email,
        password: userData.password
      });

      const token = 'mock-jwt-token-' + Date.now();
      setAuthToken(token);

      return {
        token,
        user: { email: userData.email }
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    await delay(500); // Simulate API call
    setAuthToken(null);
    return null;
  }
);

// Initial state
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout cases
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;
