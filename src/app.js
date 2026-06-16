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
import detailsView from "./views/detailsView.js";
import informationView from "./views/informationView.js";
import rentedBikesView from "./views/rentedBikesView.js";
import contactView from "./views/contactView.js";

//Set middleWare function
page(authMiddleware);
page(layoutView);

//Set up routes
page('/', homeview);
page('/catalog', catalogView);
page('/catalog/:bikeId/details', detailsView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/catalog/addbike', createView);
page('/information', informationView);
page('/catalog/myrentals', rentedBikesView);
page('/contact', contactView);

//Start routing
page();