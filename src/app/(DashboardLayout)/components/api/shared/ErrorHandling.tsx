import { AlertError401, AlertMessage } from "../../shared/Alerts";

const ErrorHandling = (errCode?: any) => {
  const code = errCode?.response?.data?.code;
  if (code == 401) {
    localStorage.setItem("Session", "end");
    window.location.href = "/ui-components/auth/login";
  } else if (errCode.code === "ERR_NETWORK") {
    AlertMessage("Error", "Connection Failed", "Try Again", "error");
  }

  return null;
};

export default ErrorHandling;
