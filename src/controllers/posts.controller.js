import viewsPosts from "../views/posts.html";

const getPosts = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts")
	return await response.json()
}

export default () => {
	const divElement = document.createElement('div');
	divElement.innerHTML = viewsPosts;

	const	contentPosts = divElement.querySelector("#container-posts"),
		loaderPost = divElement.querySelector("#loader-post")
	const postTemplate = (post) => {
		let template = `<div class="card w-90 mb-2">
		  <div class="card-body">
		    <h5 class="card-title">${post.title}</h5>
		    <p class="card-text">${post.body}</p>
		    <a href="#" class="btn btn-primary">Button</a>
		  </div>
		</div>`
		return template
	}

	getPosts()
		.then(posts => {
			posts.forEach(post => {
				contentPosts.innerHTML += postTemplate(post);
			})
			loaderPost.style.display="none";
		})

	return divElement;
}