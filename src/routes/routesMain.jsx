import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/loginPage";
import { RegisterPage } from "../pages/RegisterPage/registerPage";
import { ErrorPage } from "../pages/ErrorPage.jsx/errorPage";
import { DashboardPage } from "../pages/DashboardPage/dashboardPage";
import { PublicRoutes } from "./publicRoutes";
import { PrivateRoutes } from "./privateRoutes";
import { CreateContactPage } from "../pages/CreateContactPage/createContactPage";
import { ListContactsPage } from "../pages/ListContactsPage/listContactsPage";
import { UpdateContactPage } from "../pages/UpdateContactPage/updateContactPage";
import { ReportPage } from "../pages/ReportPage/reportPage";
import { AccountPage } from "../pages/AccountPage/accountPage";
import { DeleteAccountPage } from "../pages/DeleteAccountPage/deleteAccountPage";
import { UpdateAccountPage } from "../pages/UpdateAccountPage/updateAccountPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-contact" element={<CreateContactPage />} />
        <Route path="/contacts" element={<ListContactsPage />} />
        <Route path="/update-contact" element={<UpdateContactPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/update-account" element={<UpdateAccountPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
