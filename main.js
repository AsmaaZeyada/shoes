let menu = document.querySelector(".menu-icon");
let ulNav = document.querySelector(".ul-nav");
let header = document.querySelector("header");
let headerHeight = header.getBoundingClientRect().height;
let homeHeight = document.querySelector("#home").getBoundingClientRect().height;
let up = document.querySelector(".up");

menu.addEventListener("click", function() {
	if(ulNav.classList.contains("open-menu")) {
		ulNav.classList.remove("open-menu")
	} else {
		ulNav.classList.add("open-menu")
	}
})

ulNav.addEventListener("click", function() {
	ulNav.classList.remove("open-menu")
	
})

document.addEventListener("scroll", () => {
	if (window.pageYOffset + 50 > homeHeight) {
		up.classList.add("visible");
		header.classList.add("fixed")
	} else {
		up.classList.remove("visible");
		header.classList.remove("fixed")
	}
})