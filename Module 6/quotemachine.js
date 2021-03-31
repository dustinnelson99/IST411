async function getData(){
    var apiString= "https://api.quotable.io/random";

    ///random?minLength=100&maxLength=140
    var inputValue = document.getElementById("para").value;
    apiString= apiString + "?minLength=" + String(inputValue-25) + "&maxLength=" + String(inputValue);
    alert(apiString);

    var response = await fetch(apiString);

    document.getElementById("quote").innerHTML = "";
    document.getElementById("author").innerHTML = "";

    var jsonData = await response.json();

    document.getElementById("quote").innerHTML = JSON.stringify(jsonData.content);
    document.getElementById("author").innerHTML = JSON.stringify(jsonData.author);
    return true;
}