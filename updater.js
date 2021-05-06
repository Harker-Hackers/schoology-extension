//manifest
var manifest = chrome.runtime.getManifest();
var curr_version=manifest.version;

//function to be called when getting a new version
function updateVersion(latest_version,new_features){
	console.log(latest_version,new_features);
}

//getting version
chrome.runtime.sendMessage(
	{
		type: "url",
		url: "https://api.github.com/repos/Harker-Hackers/schoology-extension/releases",
	}, data => {
		var latest_version=JSON.parse(data)[0].name
		if (latest_version==curr_version){
			var new_features=JSON.parse(data)[0].body;
			updateVersion(latest_version,new_features);
		}
	}
)

