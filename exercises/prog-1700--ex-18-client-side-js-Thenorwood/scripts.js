"use strict";

if(localStorage.ns == null)
{
    var s_h = new XMLHttpRequest();//making a variable which is a XHR object for requesting data from server

    s_h.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            localStorage.ns = this.responseText;
            someFunction();
        }
    };
    s_h.open("GET", "n.json", true);
    s_h.send();
}
else
{
    someFunction();
}

function someFunction()
{
    var o_n = JSON.parse(localStorage.ns);
    var t = document.getElementById('dis');

    var n_h = "";
    n_h += "<h4>Notes</h4>";
    n_h += "<table>";
    n_h += "<thead>";
    n_h += "<tr>";
    n_h += "<th>Date & Time</th>";
    n_h += "<th>Note</th>";
    n_h += "</tr>";
    n_h += "</thead>";
    n_h += "<tbody>";


    for(var i = 0; i < o_n.length; i++)
    {
        var r = o_n[i];



        n_h += "<tr>";
        n_h += `<td>${r["T"]}</td>`;
        n_h += `<td>${r["N"]}</td>`;
        n_h += "</tr>";
    }

    n_h += "</tr>";
    n_h += "</tbody>";
    n_h += "</table>";
    
    t.innerHTML = n_h;  // updating the html of the innerHTML of "t" (document.getElementByID('dis'))
    
}
//somefunction2 is parsing the content from the n. json file as we can see getdate, getHours... which can be seen in the table
function someFunction2()
{
    var c_n = JSON.parse(localStorage.ns);//stores the string as a value in an array
    var n_n = document.getElementById('n').value;

    var d = new Date();
    var d_f = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    
    var n_e = {//putting date/time stamp and use rinput into a variable
        "T": d_f,
        "N": n_n
    };

    c_n.push(n_e);//add ther new stam,p and userinput to c_n asa string and assign the value to localStorage
    localStorage.ns = JSON.stringify(c_n);//turns value back to string

    someFunction();
}


document.getElementById("lbutton").addEventListener("click", someFunction2);


