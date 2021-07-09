function sum(n1, n2){

    document.getElementById("result").innerHTML = "";
    var node = document.createElement("h3");                 // Create a <li> node
    var textnode = document.createTextNode(`${n1} + ${n2} = ${n1 + n2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("result").appendChild(node); 
    
}
function modulus(n1, n2){

    document.getElementById("result").innerHTML = "";
    var node = document.createElement("h3");                 // Create a <li> node
    var textnode = document.createTextNode(`${n1} % ${n2} = ${n1 % n2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("result").appendChild(node); 
    
}
function devide(n1, n2){

    document.getElementById("result").innerHTML = "";
    var node = document.createElement("h3");                 // Create a <li> node
    var textnode = document.createTextNode(`${n1} / ${n2} = ${n1 / n2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("result").appendChild(node); 
    
}
function multiplication(n1, n2){

    document.getElementById("result").innerHTML = "";
    var node = document.createElement("h3");                 // Create a <li> node
    var textnode = document.createTextNode(`${n1} × ${n2} = ${n1 * n2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("result").appendChild(node); 
    
}

function subtract(n1, n2){

    document.getElementById("result").innerHTML = "";
    var node = document.createElement("h3");                 // Create a <li> node
    var textnode = document.createTextNode(`${n1} - ${n2} = ${n1 - n2}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("result").appendChild(node); 
    
}



function myFunction() {
    document.getElementById("myForm").reset();
  }