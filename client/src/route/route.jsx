import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./publicRoute";
import { privetRoute } from "./privetRoute";
// creat router
const router = createBrowserRouter([...publicRoute, ...privetRoute]);

//
export default router;
