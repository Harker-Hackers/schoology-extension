fetch('https://resources.harker.org/?wpdmpro=middle-school-lunch-menu').then(r => r.text()).then(result => {
    start = result.indexOf("btn-sm' href=") + 14
    end = result.indexOf(">Download</a>&nbsp;") - 19
        
    pdf_link = result.slice(start, end)
    console.log(pdf_link)

    document.getElementById("main-content-wrapper").innerHTML = `<center>
        <iframe src="${pdf_link}" type="application/pdf"</iframe>
        </center>`
})