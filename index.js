let count=0;
let countPeople=document.getElementById("incrementID");
function incrementByOne(){
    countPeople.innerText=++count;
}
function save(){
    let previousEntry=document.getElementById("previousEntries");
    previousEntry.textContent+=count+" - ";
    count=0
    countPeople.innerText=0;
}