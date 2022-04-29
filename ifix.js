function ifix() {
    var userAgent = window.navigator.userAgent;

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        searchbox1 = document.getElementById("searchbox1");
        searchbox1.style.marginTop = "-6.25%";
        searchbox1.style.marginLeft = "6.15%";
        searchbox2 = document.getElementById("searchbox2");
        searchbox2.style.marginLeft = "17.5%";
    }
    else {
        console.log('false');
    }
}