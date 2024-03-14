import { toast } from "react-toastify";

/**
 *  create toast aleart
 */
const createToast = (msg, type = "error") => {
  toast[type](msg);
};

// export create toaster
export default createToast;
