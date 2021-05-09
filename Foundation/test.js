async function getData(){
  var apiString= "https://v2.jokeapi.dev/joke/Any";

  ///random?minLength=100&maxLength=140
  var inputValue = document.getElementById("para").value;
  apiString= apiString +"?type="+ inputValue;
  alert(apiString);

  var response = await fetch(apiString);

  document.getElementById("quote").innerHTML = "";

  var jsonData = await response.json();

  document.getElementById("quote").innerHTML = JSON.stringify(jsonData);
  return true;
}