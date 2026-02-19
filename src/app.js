import page from "./lib/page.js";
import "./config/firebaseInit.js"
import layoutView from "./views/layoutView.js";
import catalogView from "./views/catalogView.js";
import homeview from "./views/homeview.js";
import loginView from "./views/loginView.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

//Set middleWare function
page(authMiddleware);
page(layoutView);

//Set up routes
page('/', homeview);
page('/catalog', catalogView);
page('/login', loginView);
//Start routing
page();