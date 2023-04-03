import { Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Public from './components/Public'

function App() {
  return (
    <Routes>
      {/* this element is the parent route of everything else*/}
      <Route path="/" element={<Layouts />}>
        <Route index element={<Public />} />
        {/* public links to a login component, 11:18 video 5 */}
      </Route>
    </Routes>
  );
}

export default App;
