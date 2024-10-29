import './App.css';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import Find from './Screens/Find';
import Create from './Screens/Create';
import Faq from './Screens/Faq';
import Consult from './Screens/Consult';
import About from './Screens/About';
import DashboardHomepage from './Dashboard/DashboardScreen/DashboardHomepage';
import Payment from './Screens/Payment';
import DoctorHomepage from './DoctorDashboard/DoctorScreen/DoctorHomepage';
import UserHomepage from './UserDashboard/UserScreen/UserHomepage';
import Patients from './Dashboard/DashboardScreen/Patients';
import Appointments from './Dashboard/DashboardScreen/Appointments';
import Settings from './DoctorDashboard/DoctorScreen/Settings';
import Doctors from './Dashboard/DashboardScreen/Doctors';
import Hospitals from './Dashboard/DashboardScreen/Hospitals';
import UnapprovedH from './Dashboard/DashboardScreen/UnapprovedH';
import UnapprovedD from './Dashboard/DashboardScreen/UnapprovedD';
import Earning from './Dashboard/DashboardScreen/Earning';
import DoctorEarning from './DoctorDashboard/DoctorScreen/DoctorEarning';
import DoctorsAppointment from './DoctorDashboard/DoctorScreen/DoctorsAppointment';
import DoctorsPatient from './DoctorDashboard/DoctorScreen/DoctorsPatient';
import UsersAppointment from './UserDashboard/UserScreen/UsersAppointment';
import UserSettings from './UserDashboard/UserScreen/UserSettings';
import UserRecord from './UserDashboard/UserScreen/UserRecord';

function App() {
  return (
    <div>
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/find' element={<Find/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/faq' element={<Faq/>} />
            <Route path='/consult' element={<Consult/>} />
            <Route path='/payment' element={<Payment/>} />


            <Route path='/admindashboard' element={<DashboardHomepage/>} />
            <Route path='/patients' element={<Patients/>} />
            <Route path='/appointments' element={<Appointments/>} />
            <Route path='/doctors' element={<Doctors/>} />
            <Route path='/undoctors' element={<UnapprovedD/>} />
            <Route path='/hospitals' element={<Hospitals/>} />
            <Route path='/unhospitals' element={<UnapprovedH/>} />
            <Route path='/earnings' element={<Earning/>} />


            <Route path='/doctordashboard' element={<DoctorHomepage/>} />
            <Route path='/doctorsearning' element={<DoctorEarning/>} />
            <Route path='/doctorsappointment' element={<DoctorsAppointment/>} />
            <Route path='/doctorspatient' element={<DoctorsPatient/>} />
            <Route path='/settings' element={<Settings/>} />


            <Route path='/userdashboard' element={<UserHomepage/>} />
            <Route path='/userappointment' element={<UsersAppointment/>} />
            <Route path='/userecord' element={<UserRecord/>} />
            <Route path='/usersetting' element={<UserSettings/>} />



            
          </Routes>
    </div>
  );
}

export default App;
