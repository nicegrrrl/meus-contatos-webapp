import { Navigate, Outlet } from "react-router-dom";
import { useClientContext } from "../providers/clientContext";

export const PrivateRoutes = () => {
  const { client } = useClientContext();


  return client ? <Outlet /> : <Navigate to="/" />;
};
