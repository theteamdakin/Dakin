function gofind(newterm) {
    keyword = newterm;
    killsearchbox1();
    killsearchbox2();
    killquickinfo();
    window.location = "#find=" + keyword + "&type=web"
    searchin2.value = newterm;
    homeui1.style.display = "none";
    homeui2.style.display = "grid";
    tabssecweb.style.display = "grid";
    tabssecimg.style.display = "none";
    tabssecvid.style.display = "none";
    tabssecnews.style.display = "none";
    allresults.style.display = "grid";
    copyrightbox.style.display = "grid";
    webchk();
    quickinfochk();
}

function gofindimg() {
    tabssecweb.style.display = "none";
    tabssecimg.style.display = "grid";
    tabssecvid.style.display = "none";
    tabssecnews.style.display = "none";
    killquickinfo();
    window.location = "#find=" + keyword + "&type=img"
    imgchk();
}

function gofindvid() {
    tabssecweb.style.display = "none";
    tabssecimg.style.display = "none";
    tabssecvid.style.display = "grid";
    tabssecnews.style.display = "none";
    killquickinfo();
    window.location = "#find=" + keyword + "&type=vid" 
    vidchk();
}

function gofindnews() {
    tabssecweb.style.display = "none";
    tabssecimg.style.display = "none";
    tabssecvid.style.display = "none";
    tabssecnews.style.display = "grid";
    killquickinfo();
    window.location = "#find=" + keyword + "&type=news"
    newschk(); 
}

function showadvance() {
    homeui1.style.display = "none";
    advancescr.style.display = "grid";
    window.location = "#advance"
}

function showabout() {
    homeui1.style.display = "none";
    aboutscr.style.display = "grid";
    window.location = "#about"
}

function showprivacy() {
    homeui1.style.display = "none";
    privacyscr.style.display = "grid";
    window.location = "#privacy"
}

function showlang() {
    homeui1.style.display = "none";
    langscr.style.display = "grid";
    window.location = "#language"
}


function gohome() {
    advancescr.style.display = "none";
    aboutscr.style.display = "none";
    privacyscr.style.display = "none";
    langscr.style.display = "none";
    homeui1.style.display = "grid";
    window.location = "#"
}