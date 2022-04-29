function nothing() {
    allresultsbox.innerHTML = "";
    allresultsbox.innerHTML += '<img src="nothing.png"><h1 id="noresulttext">No Results Found</h1>';
}

function webchk() {
    hasresults = 0;
    allresultsbox.innerHTML = "";
    allresultsbox.innerHTML += '<img src="loading.png"><h1>Finding</h1>';
    setTimeout(() => {
        for (i = 0; i < web.length; i++) {
            if (web[i][5].includes(keyword)) {
                hasresults = 1;
            }
        }
        if (hasresults == 1) {
            allresultsbox.innerHTML = "";
            showallweb();
        }
        else {
            nothing();
        }
    }, 2000);
}

function imgchk() {
    hasresults = 0;
    allresultsbox.innerHTML = "";
    allresultsbox.innerHTML += '<img src="loading.gif">';
    for (i = 0; i < img.length; i++) {
        if (img[i][5].includes(keyword)) {
            hasresults = 1;
        }
    }
    if (hasresults == 1) {
        allresultsbox.innerHTML = "";
        showallimg();
    }
    else {
        nothing();
    }
}

function vidchk() {
    hasresults = 0;
    allresultsbox.innerHTML = "";
    allresultsbox.innerHTML += '<img src="loading.gif">';
    for (i = 0; i < vid.length; i++) {
        if (vid[i][5].includes(keyword)) {
            hasresults = 1;
        }
    }
    if (hasresults == 1) {
        allresultsbox.innerHTML = "";
        showallvid();
    }
    else {
        nothing();
    } 
}

function newschk() {
    hasresults = 0;
    allresultsbox.innerHTML = "";
    allresultsbox.innerHTML += '<img src="loading.gif">';
    for (i = 0; i < news.length; i++) {
        if (news[i][5].includes(keyword)) {
            hasresults = 1;
        }
    }
    if (hasresults == 1) {
        allresultsbox.innerHTML = "";
        showallnews();
    }
    else {
        nothing();
    }
}

function showallweb() {
    rbox = 0
    allresults.style.height = rbox + "px";
    for (i = 1; i < web.length; i++) {
        if (web[i][5].includes(keyword)) {
            url = web[i][0]
            preview = web[i][1]
            title = web[i][2]
            source = web[i][3]
            sourceurl = web[i][4]
            if (title.length > 15) {
                title = title.substring(0, 15);
                title = title + "...";
            }
            allresultsbox.innerHTML += '<div class="grid-result"><div class="grid-item"><a href="' + url + '"><img src="' + preview + '" width="180px" height="120px"></a><br><a href="' + url + '">' + title + '</a><br><a href="' + sourceurl + '">' + source + '</a>' + '</div></div>'
            rbox += 240;
            allresults.style.height = rbox + "px";
        }
    }
}

function showallimg() {
    rbox = 0
    allresults.style.height = rbox + "px";
    for (i = 1; i < img.length; i++) {
        if (img[i][5].includes(keyword)) {
            url = img[i][0]
            preview = img[i][1]
            title = img[i][2]
            source = img[i][3]
            sourceurl = img[i][4]
            if (title.length > 15) {
                title = title.substring(0, 15);
                title = title + "...";
            }
            allresultsbox.innerHTML += '<div class="grid-result"><div class="grid-item"><a href="' + preview + '"><img src="' + preview + '" width="180px" height="120px"></a><br><a href="' + url + '">' + title + '</a><br><a href="' + sourceurl + '">' + source + '</a>' + '</div></div>'
            rbox += 240;
            allresults.style.height = rbox + "px";
        }
    }
}

function showallvid() {
    for (i = 1; i < vid.length; i++) {
        if (vid[i][5].includes(keyword)) {
            url = vid[i][0]
            preview = vid[i][1]
            title = vid[i][2]
            source = vid[i][3]
            sourceurl = vid[i][4]
            if (title.length > 15) {
                title = title.substring(0, 15);
                title = title + "...";
            }
            allresultsbox.innerHTML += '<div class="grid-result"><div class="grid-item"><iframe src="' + preview + '" width="180px" height="120px"></iframe><br><a href="' + url + '">' + title + '</a><br><a href="' + sourceurl + '">' + source + '</a>' + '</div></div>'
            rbox += 240
            allresults.style.height = rbox + "px";
        }
    }
}

function showallnews() {
    for (i = 1; i < mews.length; i++) {
        if (news[i][5].includes(keyword)) {
            url = news[i][0]
            preview = news[i][1]
            title = news[i][2]
            source = news[i][3]
            sourceurl = news[i][4]
            if (title.length > 15) {
                title = title.substring(0, 15);
                title = title + "...";
            }
            allresultsbox.innerHTML += '<div class="grid-result"><div class="grid-item"><a href="' + url + '"><img src="' + preview + '" width="180px" height="120px"></a><br><a href="' + url + '">' + title + '</a><br><a href="' + sourceurl + '">' + source + '</a>' + '</div></div>'
            rbox += 240
            allresults.style.height = rbox + "px";
        }
    }
}