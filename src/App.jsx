import { Box } from "native-base";
import { Route, Routes } from 'react-router-dom';
import Data from "./components/Data";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {


  return (
    <>
      <Header />
      <Box bg={"white"} minHeight="100vh" alignItems="center">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/data" element={<Data />} />
          </Routes>
      </Box>
    </>
  );
}

export default App;
