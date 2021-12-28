import "./estilos.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import {routes} from "./router/index.routes.js"
window.location.hash = "#/"
const init = () => {
	routes(window.location.hash)
	window.addEventListener("hashchange", () => {
		routes(window.location.hash)
	})
}

window.addEventListener("load", init)