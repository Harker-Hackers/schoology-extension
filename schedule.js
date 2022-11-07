document.title = "Schedule";

const url = "https://msbell.harker.xyz";

document.getElementById("wrapper").outerHTML = 
`
    <iframe src="${url}"  class="site-navigation-resize" style="margin=0px; width: 100%; "></iframe>
`;

const footer = document.getElementById('site-navigation-footer');

footer.style.position = 'fixed';
footer.style.left = '0px';
footer.style.right = '0px';
footer.style.bottom = '0px';