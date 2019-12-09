const header_navbar = document.getElementById('header-navbar');
const navbar_items = document.getElementById('navbar-items')

// hamburger menüyü açıp kapatıyoruz
function openNav() {
	if(header_navbar.style.display === "block") {
		header_navbar.style.display = "none";
	} else {
		header_navbar.style.display = "block";
	}
}
