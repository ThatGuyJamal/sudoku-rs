let gh = require("gh-pages");

gh.publish(
	"doc",
	{
		branch: "docs",
		repo: "https://github.com/ThatGuyJamal/sudoku-rs.git",
	},
	function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Deployed!");
		}
	}
);