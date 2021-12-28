import {pages} from "../controllers/index.js";
const rootPage = document.getElementById("root")
const routes = (route) => {
	rootPage.innerHTML = "";
	switch(route){
		case "#/": {
			return rootPage.appendChild( pages.home() )
		}
		case "#/posts": {
			return rootPage.appendChild( pages.posts() )
		}
		case "#/navigation":
			return console.log("Navigation")
		default:
			return console.log("Not found")
	}
}

export { routes }