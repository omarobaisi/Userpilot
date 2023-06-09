import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserListing from './routes/user-listing.route';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserListing />} />
        <Route path='/user/:id' element={<UserListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;