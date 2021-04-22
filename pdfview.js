try {
    // Get PDF link
    inside_span = document.getElementsByClassName("attachments-file-name")[0]
        .innerHTML;

    start = inside_span.indexOf('<a href="') + 9;
    end = inside_span.indexOf(">") - 28;
    link = inside_span.slice(start, end);

    if (link.slice(-4) != ".pdf") {
        throw Error;
    }

    // Change iframe
    document
        .getElementsByClassName("docviewer-iframe")[0]
        .setAttribute("src", link);

    // Change "view" button
    view_button = document
        .getElementsByClassName("view-file-popup ")[0]
        .setAttribute("href", link);
} catch (err) {}
