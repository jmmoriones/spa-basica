import viewsHome from "../views/home.html";
export default () => {
	const divElement = document.createElement('div');
	divElement.innerHTML = viewsHome;

	const btnClickHome = divElement.querySelector("#btnClickHome")
	btnClickHome.addEventListener("click", () => alert("Click Meeeee!!!"))

	return divElement;
}