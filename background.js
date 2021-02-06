chrome.runtime.onMessage.addListener(
    function(data, sender, onSuccess) {
		if (data.type!=="url"){return};
		var url = data.url;
        fetch(url)
            .then(response => response.text())
            .then(responseText => onSuccess(responseText))
        
        return true;  // Will respond asynchronously.
    }
);
chrome.runtime.onMessage.addListener(
    function(data, sender, onSuccess) {
		if (data.type!=="urlPost"){return};
		var url = data.url;
        fetch(url, {method:"post", body:JSON.stringify(data.postData)})
            .then(response => response.text())
            .then(responseText => onSuccess(responseText))
        
        return true;  // Will respond asynchronously.
    }
);