let table = "<table border='1' width='50%'>";
let tr = 1;
while(tr<=100) {
    let td = 1;
    table+="<tr>";
    while(td<=10){
        let x = tr * td;
        table+="<td>"+ x + "</td>";
        td++;
    }
    table+="</tr>";
    tr++;
}
table+="</table>";

document.write(table);
