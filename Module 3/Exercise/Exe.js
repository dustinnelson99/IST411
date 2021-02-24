function validate(){
    var word= document.forms["form"]["word"].value;
    var number= document.forms["form"]["number"].value;
    if (word==""){
        alert("Please enter a word");
        return false;
    }
    else if ((word !=1) && (number !=2)){
        alert("Please enter a 1 or a 2 for the list.");
        document.forms["form"]["number"].value = "";
        return false;
    }
    else {
        if(number==1){
            var tableRef = document.getElementById("List1");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = word;}
            else{
                var tableRef = document.getElementById("List2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = word;}
            document.forms["form"]["word"].value = "";
            document.forms["form"]["number"].value = "";
            return true;
            }
        }
        function clearlist1(){
            var tableRef = document.getElementById("List1");
            tableRef.innerHTML = " ";
        }
        function clearlist2(){
            var tableRef = document.getElementById("List2");
            tableRef.innerHTML = " ";
        }