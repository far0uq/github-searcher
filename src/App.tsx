import { ConfigProvider, theme } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import SearcherForm from "./pages/SearcherForm";
import ResultContainer from "./components/containers/ResultContainer";

function App() {
  const darkModeIsOn = useSelector((state: RootState) => state.darkmode.isOn);
  return (
    <>
      {/* ConfigProvider for Ant Design Components */}
      <ConfigProvider
        theme={{
          algorithm: darkModeIsOn
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
          token: {
            colorPrimary: "rgb((45,186,78)",
            fontSize: 15,
            fontFamily: "Montserrat",
            borderRadius: 2,
            paddingMD: 10,
          },
          components: {
            Switch: {
              handleBg: darkModeIsOn ? "white" : "black",
              handleSize: 29.9,
              innerMaxMargin: 40,
              trackHeight: 35,
            },
          },
        }}
      >
        <SearcherForm />
        <ResultContainer />
      </ConfigProvider>
    </>
  );
}

export default App;
