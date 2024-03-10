import { AlertError401, AlertMessage } from "../../shared/Alerts";

const ErrorHandling = (errCode?: any) => {
  const code = errCode?.response?.data?.code;
  if (code == 401) {
    console.log("timeout");
    AlertError401();
  } else if (errCode.code === "ERR_NETWORK") {
    AlertMessage("Error", "Connection Failed", "Try Again", "error");
  }

  return null;
};

export default ErrorHandling;
