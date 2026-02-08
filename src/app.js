import page from "./lib/page.js";
import layoutView from "./views/layoutView.js";
import catalogView from "./views/catalogView.js";
import homeview from "./views/homeview.js";

//Set middleWare function
page(layoutView);

//Set up routes
page('/', homeview);
page('/catalog', catalogView);

//Start routing
page();