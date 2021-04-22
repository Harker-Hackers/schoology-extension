fetch('https://resources.harker.org/?wpdmpro=middle-school-lunch-menu').then(r => r.text()).then(result => {
    start = result.indexOf("btn-sm' href=") + 14
    end = result.indexOf(">Download</a>&nbsp;") - 19
        
    pdf_link = result.slice(start, end)
    document.getElementById("main-content-wrapper").innerHTML = `<center>
        <iframe src="${pdf_link}" height=700 width=100%></iframe>
        </center>`
    })