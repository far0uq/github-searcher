import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store/userStore.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* ConfigProvider for Ant Design Components */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "black",
            colorText: "grey",
            fontSize: 20,
          },
          components: {
            Switch: {
              handleBg: "white",
              handleShadow: "0 0 2px 0 rgba(0, 0, 0, 1)",
              handleSize: 30,
              innerMaxMargin: 35,
              trackHeight: 35,
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
