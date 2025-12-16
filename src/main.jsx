import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './global.css';
import { SearchProvider } from "./context/SearchContext";


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="dark"
        style={{ textAlign: "center" }}
      />
      <App />
    </SearchProvider>
  </StrictMode>,
)
