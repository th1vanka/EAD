import React from "react";
import "./navigation.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TrainOutlinedIcon from "@mui/icons-material/TrainOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink } from "react-router-dom";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function Navigation() {
  return (
    <div className="container">
      <div className="logo-container">
        <label className="logo-label">RailHub</label>
        <TrainOutlinedIcon className="logo-icon" />
      </div>
      <div className="links-container">
        <NavLink to="/dashboard" className="link-container">
          <DashboardOutlinedIcon className="icons" />
          <label className="labels">Dashboard</label>
        </NavLink>
        <NavLink to="/bookings " className="link-container">
          <AirplaneTicketOutlinedIcon className="icons" />
          <label className="labels">Bookings</label>
        </NavLink>

        <NavLink to="/train-schedules " className="link-container">
          <TimerOutlinedIcon className="icons" />
          <label className="labels">Schedules</label>
        </NavLink>
        <NavLink to="/trains" className="link-container">
          <TrainOutlinedIcon className="icons" />
          <label className="labels">Trains</label>
        </NavLink>
        <NavLink to="/passengers" className="link-container">
          <GroupsIcon className="icons" />
          <label className="labels">Passengers</label>
        </NavLink>
        <NavLink to="/users" className="link-container">
          <SupervisorAccountIcon className="icons" />
          <label className="labels">Users</label>
        </NavLink>
        <NavLink to="/canceled/bookings" className="link-container">
          <CancelOutlinedIcon className="icons" />
          <label className="labels">Canceled Bookings</label>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
