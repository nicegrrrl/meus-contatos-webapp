import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClientProvider } from "./providers/clientContext.jsx";
import { ToastContainer } from "react-toastify";
import { ContactProvider } from "./providers/contactContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ClientProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </ClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
