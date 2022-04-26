function bootweb() {
    fetch('database/web.inf')
        .then()
        .then(response => response.text())
        .then(function (data) {
            webtmp = data.split("\n")
            let firstrow = ["URL", "Previw", "Title", "Source", "SourceURL", "Tag"]
            web.push(firstrow)
            for (i = 1; i < webtmp.length; i++) {
                url = webtmp[i].replace("url=", "");
                url = url.replace('\r', '')
                i += 1;
                preview = webtmp[i].replace("preview=", "");
                preview = preview.replace('\r', '')
                i += 1;
                title = webtmp[i].replace("title=", "");
                title = title.replace('\r', '')
                i += 1;
                source = webtmp[i].replace("source=", "");
                source = source.replace('\r', '')
                i += 1;
                sourceurl = webtmp[i].replace("sourceurl=", "");
                sourceurl = sourceurl.replace('\r', '')
                i += 1;
                tag = webtmp[i].replace("tag=", "");
                tag = tag.replace('\r', '')
                i += 1;
                let newrow = [url, preview, title, source, sourceurl, tag];
                web.push(newrow);
            }
        });
}

function bootimg() {
    fetch('database/img.inf')
        .then()
        .then(response => response.text())
        .then(function (data) {
            imgtmp = data.split("\n")
            let firstrow = ["URL", "Previw", "Title", "Source", "SourceURL", "Tag"]
            img.push(firstrow)
            for (i = 1; i < imgtmp.length; i++) {
                url = imgtmp[i].replace("url=", "");
                url = url.replace('\r', '')
                i += 1;
                preview = imgtmp[i].replace("preview=", "");
                preview = preview.replace('\r', '')
                i += 1;
                title = imgtmp[i].replace("title=", "");
                title = title.replace('\r', '')
                i += 1;
                source = imgtmp[i].replace("source=", "");
                source = source.replace('\r', '')
                i += 1;
                sourceurl = imgtmp[i].replace("sourceurl=", "");
                sourceurl = sourceurl.replace('\r', '')
                i += 1;
                tag = imgtmp[i].replace("tag=", "");
                tag = tag.replace('\r', '')
                i += 1;
                let newrow = [url, preview, title, source, sourceurl, tag];
                img.push(newrow);
            }
        });
}

function bootvid() {
    fetch('database/vid.inf')
        .then()
        .then(response => response.text())
        .then(function (data) {
            vidtmp = data.split("\n")
            let firstrow = ["URL", "Previw", "Title", "Source", "SourceURL", "Tag"]
            vid.push(firstrow)
            for (i = 1; i < vidtmp.length; i++) {
                url = vidtmp[i].replace("url=", "");
                url = url.replace('\r', '')
                i += 1;
                preview = vidtmp[i].replace("preview=", "");
                preview = preview.replace('\r', '')
                i += 1;
                title = vidtmp[i].replace("title=", "");
                title = title.replace('\r', '')
                i += 1;
                source = vidtmp[i].replace("source=", "");
                source = source.replace('\r', '')
                i += 1;
                sourceurl = vidtmp[i].replace("sourceurl=", "");
                sourceurl = sourceurl.replace('\r', '')
                i += 1;
                tag = vidtmp[i].replace("tag=", "");
                tag = tag.replace('\r', '')
                i += 1;
                let newrow = [url, preview, title, source, sourceurl, tag];
                vid.push(newrow);
            }
        });
}

function bootnews() {
    fetch('database/news.inf')
        .then()
        .then(response => response.text())
        .then(function (data) {
            newstmp = data.split("\n")
            let firstrow = ["URL", "Previw", "Title", "Source", "SourceURL", "Tag"]
            news.push(firstrow)
            for (i = 1; i < newstmp.length; i++) {
                url = newstmp[i].replace("url=", "");
                url = url.replace('\r', '')
                i += 1;
                preview = newstmp[i].replace("preview=", "");
                preview = preview.replace('\r', '')
                i += 1;
                title = newstmp[i].replace("title=", "");
                title = title.replace('\r', '')
                i += 1;
                source = newstmp[i].replace("source=", "");
                source = source.replace('\r', '')
                i += 1;
                sourceurl = newstmp[i].replace("sourceurl=", "");
                sourceurl = sourceurl.replace('\r', '')
                i += 1;
                tag = newstmp[i].replace("tag=", "");
                tag = tag.replace('\r', '')
                i += 1;
                let newrow = [url, preview, title, source, sourceurl, tag];
                news.push(newrow);
            }
        });
}