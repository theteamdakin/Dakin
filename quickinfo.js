function bootquickinfo() {
    fetch('database/quickinfo.inf')
        .then()
        .then(response => response.text())
        .then(function (data) {
            qitmp = data.split("\n")
            let firstrow = ["URL", "Tag"]
            quickinfo.push(firstrow)
            for (i = 1; i < qitmp.length; i++) {
                url = qitmp[i].replace("url=", "");
                url = url.replace('\r', '')
                i += 1;
                tag = qitmp[i].replace("tag=", "");
                tag = tag.replace('\r', '')
                i += 1;
                let newrow = [url, tag];
                quickinfo.push(newrow);
            }
        });
}

function quickinfochk() {
    for (i = 1; i < quickinfo.length; i++) {
        if (quickinfo[i][1] == keyword) {
            quickinfowin.style.display = "grid";
            url = quickinfo[i][0];
            quickinfobox.innerHTML += '<iframe src="' + url + '" scrolling="no" style="width: 100%; height: 186px; border: none; overflow: none;"></iframe>';
        }
    }
};

function killquickinfo() {
    quickinfowin.style.display = "none";
    quickinfobox.innerHTML = '';
}