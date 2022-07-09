
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import OldMeetings from './pages/OldMeetings';
import AddMeetings from './pages/AddMeetings';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <div className="App">
      


<Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMeetings />} />
        <Route path="/old" element={<OldMeetings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      
    </div>
  );
}

export default App;
