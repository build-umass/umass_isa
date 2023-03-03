import { Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>

      </Route>
    </Routes>
  );
}

export default App;
