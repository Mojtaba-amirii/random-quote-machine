import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuote = createAsyncThunk("quote/fetchRandom", async () => {
  const response = await axios.get(
    `https://corsproxy.io/?https://zenquotes.io/api/random?t=${new Date().getTime()}`
  );
  console.log("API Response:", response.data);
  return response.data[0];
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    text: "",
    author: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.text = action.payload.q;
        state.author = action.payload.a;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
