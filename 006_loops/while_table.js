let table = "<table border='1' width='50%'><tr>";
let j = 1;
while(j<=10){
    table+="<td>" + j + "</td>";
    j++;
}
table+="</tr><tr>";
j = 1;
while (j<=10) {
    table+="<td>" + j*j +"</td>";
    j++;
}
table+="</tr></table>";
document.write(table);