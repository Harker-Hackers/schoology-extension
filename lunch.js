document.title = "Lunch";
chrome.runtime.sendMessage(
    {
        type: "url",
        url: "https://resources.harker.org/?wpdmpro=middle-school-lunch-menu'",
    },
    (result) => {
        start = result.indexOf("btn-sm' href=") + 14;
        end = result.indexOf(">Download</a>&nbsp;") - 19;

        pdf_link = result.slice(start, end);
        console.log(pdf_link);

        document.getElementById("main-content-wrapper").innerHTML = `
    <br>
    <center>
        <iframe src="${pdf_link}" height=700 width=100% style="border: 1px solid black"></iframe>
    </center>
    `;
    }
);
