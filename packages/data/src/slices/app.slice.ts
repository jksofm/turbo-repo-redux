import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  installedExtension?: boolean;
  versionExtension?: string;
}

const initialState: AppState = {};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInstalledExtension: (state, { payload }: PayloadAction<boolean>) => {
      state.installedExtension = payload;
    },
    setVersionExtension: (state, { payload }: PayloadAction<string>) => {
      state.versionExtension = payload;
    },
  },
});
