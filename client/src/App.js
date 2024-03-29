import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import {useSelector } from 'react-redux';
import Spinner from './components/spinner';
import ProtectedRoute from './components/ProtectedRoute';
import publicRoute from './components/publicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import NotificationPage from './pages/NotificationPage';
import Users from './pages/admin/Users';
import Doctors from './pages/admin/Doctors';
import Profile from './pages/doctor/profile';
import BookingPage from './pages/BookingPage';
import Appointments from './pages/Appointments';
import DoctorAppointments from './pages/doctor/DoctorAppointments';

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
   <>
   <BrowserRouter>
   {loading ? (
     <Spinner/>
   ): (
    <Routes>

   <Route path='/'
    element={
    <ProtectedRoute>
<HomePage/>
    </ProtectedRoute>
    }/>
    

<Route path='/apply-doctor'
 element={
 <ProtectedRoute>
<ApplyDoctor/>
 </ProtectedRoute>
 }/>

<Route path='/admin/users'
 element={
 <ProtectedRoute>
<Users/>
 </ProtectedRoute>
 }/>

<Route path='/doctor/profile/:id'
 element={
 <ProtectedRoute>
<Profile/>
 </ProtectedRoute>
 }/>

<Route path='/doctor/book-appointment/:doctorId'
 element={
 <ProtectedRoute>
<BookingPage/>
 </ProtectedRoute>
 }/>


<Route path='/admin/doctors'
 element={
 <ProtectedRoute>
<Doctors/>
 </ProtectedRoute>
 }/>


<Route path='/notification'
 element={
 <ProtectedRoute>
<NotificationPage/>
 </ProtectedRoute>
 }/>


   <Route path='login' 
   element={
    <publicRoute>
<Login/>
    </publicRoute>
   }/>

   <Route path='register' 
   element={
   <publicRoute>
<Register/>
   </publicRoute>
   }/>

      <Route path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />

       <Route path="/doctor-appointments"
              element={
                <ProtectedRoute>
                  <DoctorAppointments />
                </ProtectedRoute>
              }
            />
   </Routes>
    

   )}
   
   </BrowserRouter>
  

   </>
  );
}

export default App;
