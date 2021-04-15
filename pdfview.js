inside_span = document.getElementsByClassName("attachments-file-name")[0].innerHTML

start = inside_span.indexOf("<a href=\"") + 9
end = inside_span.indexOf(">") - 28
link = inside_span.slice(start, end)
console.log(inside_span.slice(start, end))

document.getElementsByClassName("docviewer-iframe")[0].setAttribute("src", link)