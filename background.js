chrome.runtime.onMessage.addListener(function (data, sender, onSuccess) {
    if (data.type !== "url") {
        return;
    }
    console.log("get");
    var url = data.url;
    if (data.cors == false) {
        var mode = "no-cors";
    } else {
        var mode = "cors";
    }
    fetch(url, { method: "get", mode: mode })
        .then((response) => response.text())
        .then((responseText) => onSuccess(responseText));

    return true; // Will respond asynchronously.
});
chrome.runtime.onMessage.addListener(function (data, sender, onSuccess) {
    if (data.type !== "urlPost") {
        return;
    }
    console.log("post");
    var url = data.url;
    if (data.formData !== undefined) {
        var formData = new FormData();
        var pData = data.formData;
        for (i in pData) {
            formData.append(i, pData[i]);
        }
        if ((data.cors = false)) {
            console.log(formData);
            fetch(url, { method: "POST", body: formData, mode: "no-cors" })
                .then((response) => response.text())
                .then((responseText) => onSuccess(responseText));
        } else {
            console.log(formData);
            fetch(url, { method: "POST", body: formData })
                .then((response) => response.text())
                .then((responseText) => onSuccess(responseText));
        }
        return true; // Will respond asynchronously.
    } else if (data.rawData !== undefined) {
        var pData = data.rawData;
        if ((data.cors = false)) {
            fetch(url, {
                method: "POST",
                body: new URLSearchParams(pData),
                mode: "no-cors",
            }).then((response) => onSuccess(response));
        } else {
            fetch(url, {
                method: "POST",
                body: new URLSearchParams(pData),
            }).then((response) => onSuccess(response));
        }
        return true; // Will respond asynchronously.
    }
});
