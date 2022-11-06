import { Box } from "native-base";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {


  return (
    <>
      <Header />
      <Box bg={"white"} minHeight="100vh" alignItems="center">
        <Form />
      </Box>
    </>
  );
}

export default App;
