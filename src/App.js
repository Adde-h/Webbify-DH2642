import logo from "./logo.svg";
import "../src/styles/App.css";
import "../src/styles/home.css";
import SidebarView from "../src/views/SidebarView.js";
import NavbarView from "./views/NavbarView";

function App() {
	const artists = [
		"Drake",
		"Dree Low",
		"Rihanna",
		"Justin Bieber",
		"Katy Perry",
		"Lady Gaga",
	];

	const playlists = [
		"My Music Mix",
		"Summer Playlist",
		"Winter Mix 2021",
		"Sad Songs",
	];

	const albums = ["Donda", "Sour", "After Hours", "Flawless"];

	return (

		<div className="container">
    	<div class="navbar">
        <NavbarView/>
      </div>
			<div class="content">
				<SidebarView artists={artists} playlists={playlists} albums={albums} />
			</div>
		</div>
	);
}

export default App;
