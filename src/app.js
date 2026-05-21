import page from "./lib/page.js";
import "./config/firebaseInit.js"
import layoutView from "./views/layoutView.js";
import catalogView from "./views/catalogView.js";
import homeview from "./views/homeview.js";
import loginView from "./views/loginView.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import logoutView from "./views/logoutView.js";
import registerView from "./views/registerView.js";
import createView from "./views/createView.js";

//Set middleWare function
page(authMiddleware);
page(layoutView);

//Set up routes
page('/', homeview);
page('/catalog', catalogView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/catalog/addbike', createView);

//Start routing
page();