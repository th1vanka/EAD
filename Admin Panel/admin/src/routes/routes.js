import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import App from '../App';
import Dashboard from '../pages/dashboard';
import Passenger from '../pages/passenger';
import Trains from '../pages/trains';
import Users from '../pages/users';
import Schedules from '../pages/schedules';
import Bookings from '../pages/bookings';
import PassengerRegistration from '../pages/passenger_registration';
import UsersRegistration from '../pages/users_registration';
import TrainRegistration from '../pages/train_registration';
import ScheduleRegistration from '../pages/schedule_registration';
import BookingCreate from '../pages/booking_create';
import CanceledBooking from '../pages/canceled_booking';
import Login from '../pages/login';

function PageRoutes() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/passengers" element={<Passenger />} />
          <Route
            path="/passengers/registration"
            element={<PassengerRegistration />}
          />
          <Route path="/trains" element={<Trains />} />
          <Route path="/trains/registration" element={<TrainRegistration />} />
          <Route path="/train-schedules" element={<Schedules />} />
          <Route
            path="/train-schedules/registration"
            element={<ScheduleRegistration />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/registration" element={<UsersRegistration />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/registration" element={<BookingCreate />} />
          <Route path="/canceled/bookings" element={<CanceledBooking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default PageRoutes;