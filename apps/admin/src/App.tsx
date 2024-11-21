import { ThemeProvider } from "@repo/ui/contexts";
import "./App.css";
import Router from "./Router";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./data/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <ThemeProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </ReduxProvider>
    </ThemeProvider>
  );
}
