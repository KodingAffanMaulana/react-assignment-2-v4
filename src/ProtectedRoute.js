import { useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let [searchParams] = useSearchParams();
  const filter = searchParams.get("password");
  if (filter !== 'secret') { //check password di localstorage(browser) ada atau tidak
    return <Navigate to="/unauthorized" replace />; //masih ke unauthorized kalau password masih salah`
  } else {
    return children; // children dari protect
  }
};


export default ProtectedRoute;
