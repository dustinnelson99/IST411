async function getBaconipsum() {
    var apiString = "https://baconipsum.com/api/";
    var theNewParagraphs = document.getElementById("newParagraphs").value;
    apiString = apiString + "?type=meat-and-filler&paras=" + theNewParagraphs;
    alert(apiString);

    var response = await fetch(apiString);

    document.getElementById("myRawData").innerHTML = "";
    document.getElementById("myformattedData").innerHTML = "";

    var jsonData = await response.json();

    document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);

    for (var para in jsonData) {
        document.getElementById("myformattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
    
    }
    return true;
}