let gh = require("gh-pages");

gh.publish(
	"doc",
	{
		branch: "main",
		repo: "https://example.com/other/repo.git",
	},
	function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log("Deployed!");
		}
	}
);