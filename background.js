chrome.runtime.onMessage.addListener(
    function(data, sender, onSuccess) {
		if (data.type!=="url"){return};
		console.log("get");
		var url = data.url;
        fetch(url, {mehod:"get"})
            .then(response => response.text())
            .then(responseText => onSuccess(responseText))
        
        return true;  // Will respond asynchronously.
    }
);
chrome.runtime.onMessage.addListener(
    function(data, sender, onSuccess) {
		if (data.type!=="urlPost"){return};
		console.log("post");
		var url = data.url;
		var formData = new FormData();
		var pData=data.postData;
		for (i in pData){
			formData.append(i, pData[i]);
		};
		console.log(formData);
        fetch(url, {method:"POST", body:formData})
            .then(response => response.text())
            .then(responseText => onSuccess(responseText))
        
        return true;  // Will respond asynchronously.
    }
);