import Signin from "./pages/Signin";
import Appointments from "./pages/Appointments";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Appointments />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};
export default App;
