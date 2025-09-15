// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import ClubSelection from "./ClubSelection";
import ClubDashboard from "./ClubDashboard";
import EventForm from "./EventForm";
import About from "./About";
import ReportsPage from "./ReportsPage";
import EventAnalysis from "./EventAnalysis";

import { getCurrentUser } from "./utils/auth";

// 🔒 Protected Route Wrapper
const ProtectedRoute = ({ element, roles }) => {
  const user = getCurrentUser();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public login route */}
        <Route path="/" element={<Login />} />

        {/* Admin-only */}
        <Route
          path="/clubs"
          element={<ProtectedRoute element={<ClubSelection />} roles={["admin"]} />}
        />

        {/* Club dashboard */}
        <Route
          path="/dashboard/:clubName"
          element={<ProtectedRoute element={<ClubDashboard />} roles={["admin", "club"]} />}
        />

        {/* Event form */}
        <Route
          path="/event-form/:clubName"
          element={<ProtectedRoute element={<EventForm />} roles={["admin", "club"]} />}
        />

        {/* Reports */}
        <Route
          path="/reports/:clubName"
          element={<ProtectedRoute element={<ReportsPage />} roles={["admin", "club"]} />}
        />

        {/* Event analysis (extra from your second code) */}
        <Route
          path="/analysis/:eventId"
          element={<ProtectedRoute element={<EventAnalysis />} roles={["admin", "club"]} />}
        />

        {/* About (public) */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
