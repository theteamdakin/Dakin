function trendsboot() {
    fetch('database/trends.inf')
        .then()
        .then(response => response.text())
        .then(function (data) {
            trendstmp = data.split("\n")
            for (i = 1; i < trendstmp.length; i++) {
                trendterm = trendstmp[i].replace("trend=", "")
                trendterm = trendterm.replace("\r", "")
                trends.push(trendterm)
                i += 1;
            }
        });
}

function termsboot() {
    fetch('database/terms.inf')
        .then()
        .then(response => response.text())
        .then(function (data) {
            termstext = data.replace("\r")
            termstmp = termstext.split("\n")
            for (i = 1; i < termstmp.length; i++) {
                termphrase = termstmp[i].replace("term=", "")
                termphrase = termphrase.replace("\r", "")
                terms.push(termphrase)
                i += 1;
            }
        });
}

function showtrends1() {
    sb1h = 0;
    searchbox1.style.height = sb1h = "px";
    searchbox1main.innerHTML = "";
    for (i = 0; i < trends.length; i++) {
        searchbox1main.innerHTML += '<h class="fakeurl" onclick="gofind(' + "'" + trends[i] + "'" + ')' + '">' + trends[i] + '</h>'
        sb1h += 32;
        searchbox1.style.height = sb1h = "px";
    }
    sb1h += 32;
    searchbox1.style.height = sb1h = "px";
}

function showterms1() {
    searchbox1main.innerHTML = "";
    sb1h = 0;
    searchbox1.style.height = sb1h = "px";
    searchbox1main.innerHTML = "";
    for (i = 0; i < terms.length; i++) {
        if (terms[i].includes(searchin1.value)) {
            searchbox1main.innerHTML += '<h class="fakeurl" onclick="gofind(' + "'" + terms[i] + "'" + ')' + '">' + terms[i] + '</h>'
            sb1h += 32;
            searchbox1.style.height = sb1h = "px";
        }
        if (searchin1.value == '') {
            searchbox1main.innerHTML = "";
            sb1h = 0;
            searchbox1.style.height = sb1h = "px";
        }
    }
}

function showtrends2() {
    sb2h = 0;
    searchbox2.style.height = sb2h = "px";
    searchbox2main.innerHTML = "";
    for (i = 0; i < trends.length; i++) {
        searchbox2main.innerHTML += '<h class="fakeurl" onclick="gofind(' + "'" + trends[i] + "'" + ')' + '">' + trends[i] + '</h>'
        sb2h += 32;
        searchbox2.style.height = sb2h = "px";
    }
    sb2h += 32;
    searchbox2.style.height = sb2h = "px";
}

function showterms2() {
    searchbox2main.innerHTML = "";
    sb2h = 0;
    searchbox2.style.height = sb1h = "px";
    searchbox2main.innerHTML = "";
    for (i = 0; i < terms.length; i++) {
        if (terms[i].includes(searchin2.value)) {
            searchbox2main.innerHTML += '<h class="fakeurl" onclick="gofind(' + "'" + terms[i] + "'" + ')' + '">' + terms[i] + '</h>'
            sb2h += 32;
            searchbox2.style.height = sb2h = "px";
        }
        if (searchin2.value == '') {
            searchbox2main.innerHTML = "";
            sb2h = 0;
            searchbox2.style.height = sb2h = "px";
        }
    }
}