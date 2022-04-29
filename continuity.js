function continuity() {
    let getpath = window.location.toString();
    if (getpath.includes("#advance")) {
        showadvance();
    }
    if (getpath.includes("#about")) {
        showabout();
    }
    if (getpath.includes("#privacy")) {
        showprivacy();
    }
    if (getpath.includes("#language")) {
        showlang();
    }
    if (getpath.includes("#find=")) {
        keyword = getpath.replace("https://dakin.rf.gd/#find=", "")
        keyword = keyword.replace("&type=web", "")
        keyword = keyword.replace("&type=img", "")
        keyword = keyword.replace("&type=vid", "")
        keyword = keyword.replace("&type=news", "")
    }
    if (getpath.includes("&type=web")) {
        gofind(keyword);
    }
    if (getpath.includes("&type=img")) {
        gofind(keyword);
        gofindimg();
    }
    if (getpath.includes("&type=vid")) {
        gofind(keyword);
        gofindvid();
    }
    if (getpath.includes("&type=news")) {
        gofind(keyword);
        gofindnews();
    }
}