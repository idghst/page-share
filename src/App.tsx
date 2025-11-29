import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import LayoutPage from './pages/LayoutPage';
import PagolfHeader from './pages/pagolf/Header';
import PagolfFooterButton from './pages/pagolf/FooterButton';

/* Styles */
import './App.css';

/* App */
function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>

          {/* Root Route */}
          {/* <Route path="/" element={<RootPage />} /> */}

          {/*  */}
          <Route path="/pagolf" element={<LayoutPage />}>
            <Route path="header" element={<PagolfHeader />} />
            <Route path="footer-button" element={<PagolfFooterButton fontSize="medium" onNextClick={() => { }} />} />
          </Route>

          {/* Default Redirect */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
