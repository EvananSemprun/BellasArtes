import Login from './pages/Login';
import Layout from './components/Layout'; 
import HomeStudent from './pages/Student/HomeStudent';
import Confistudent from "./pages/Student/Confistudent";
import ThemeStudent from './pages/Student/ThemeStudent';
import Examenstudent from "./pages/Student/Examenstudent";
import MateriaStudent from './pages/Student/MateriaStudent';
import Homeworkstudent from "./pages/Student/Homeworkstudent";
import Materialnotestudent from "./pages/Student/Materialnotestudent";
import Pendingactivitiesstudent from "./pages/Student/Pendingactivitiesstudent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/HomeStudent" element={<HomeStudent />} />
          <Route path="/MateriaStudent" element={<MateriaStudent />} />
          <Route path="/ThemeStudent" element={<ThemeStudent />} />
          <Route path="/Homeworkstudent" element={<Homeworkstudent />} />
          <Route path="/Examenstudent" element={<Examenstudent />} />
          <Route path="/Materialnotestudent" element={<Materialnotestudent />} />
          <Route path="/Pendingactivitiesstudent" element={<Pendingactivitiesstudent />} />
          <Route path="/Confistudent" element={<Confistudent />} />
          <Route path="/" element={<HomeStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
