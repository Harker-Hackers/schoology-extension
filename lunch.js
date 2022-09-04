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

        document.getElementById("wrapper").innerHTML = `
    <br>
    <center>
        <iframe src="${"https://resources.harker.org/download/middle-school-lunch-menu/?wpdmdl=130"}" height=700 width=80% style="border: 1px solid black"></iframe>
    </center>
    `;
    }
);
