function validate(){
    var word= document.forms["form"]["word"].value;
    var number= document.forms["form"]["number"].value;
    if (word==""){
        alert("Please enter a Palindrome");
        return false;
    }
    else if ((number != 1) && (number !=2)){
        alert("Please enter a 1 or a 2 for the algorithm to be used.");
        document.forms["form"]["number"].value = "";
        return false;
    }
    else {
        if(number==1){
            for(var i=0; word.length/2 > i; i++){
                if(word.charAt(i) != word.charAt(word.length-i-1)){
                    var tableRef = document.getElementById("myform1");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=False";
                    return;
                }
            }
                    var tableRef = document.getElementById("myform1");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=True"; 
        }
            
    else{
 
            var word2 = document.forms["form"]["word"].value;
            var opposite = word2.split("").reverse().join("");
            var pal = true;
            //Checks if reverse is the same
            if(opposite != word2){
                pal = false;
                
                var tableRef = document.getElementById("myform2");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=False";
                    return;
            }
            var tableRef = document.getElementById("myform2");
                    (tableRef.insertRow(tableRef.rows.length)).innerHTML = word + "=True";
    }
    }
    
}        
        
    
        function clearlist1(){
            var tableRef = document.getElementById("myform1");
            tableRef.innerHTML = " ";
        }
        function clearlist2(){
            var tableRef = document.getElementById("myform2");
            tableRef.innerHTML = " ";
        }


