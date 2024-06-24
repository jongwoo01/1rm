import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './ContentsBox.css';
import Homepage from "./pages/HomePage";
import WorkOutPage from "./pages/WorkOutPage";
import RoutinePage from "./pages/RoutinePage";
import RecordPage from "./pages/RecordPage";

function ContentsBox() {
  return (
    <div className='contents-box'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/workout" element={<WorkOutPage />} />
        <Route path="/routine" element={<RoutinePage />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
    </div>
  );
}

export default ContentsBox;
