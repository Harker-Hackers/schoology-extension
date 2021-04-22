// For Chrome we have to use "extraHeaders" to get all headers
let extraInfoSpec = ["responseHeaders", "blocking"];
if (
    chrome.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty("EXTRA_HEADERS")
) {
}

// Register receiver for reponse headers
chrome.webRequest.onHeadersReceived.addListener(
    (data) => {
        console.log(data);
        var url = data.url;
        var cont = false;
        var cont2 = false;
        for (var i = 0; i < data.responseHeaders.length; i++) {
            var rH = data.responseHeaders[i];
            if (rH.name.toLowerCase() == "content-disposition") {
                cont = i + 1;
            }
            if (
                rH.name.toLowerCase() == "content-type" &&
                rH.value == "application/pdf"
            ) {
                cont2 = i + 1;
            }
        }
		/*(url.match(`https:\/\/schoology.harker.org\/attachment\/(.+)\/source\/(.+)`)!=null) &&*/
        if (cont && cont2) {
            cont = cont - 1;
            /*data.responseHeaders[cont].value=data.responseHeaders[cont].value.replace("text/html","application/pdf")
			console.log(data.responseHeaders[cont].value)*/
            data.responseHeaders[cont].value = data.responseHeaders[
                cont
            ].value.replace("attachment", "inline");
            console.log(data);
            return { responseHeaders: data.responseHeaders };
        }
    },
    {
        types: ["main_frame", "sub_frame", "other"],
        urls: ['*://files-cdn.schoology.com/*', '*://resources.harker.org/download/*']
    },
    ["responseHeaders", "blocking", "extraHeaders"]
);
