const nume=document.getElementById('count');
let num=0;
function inc(){
    num+=1;
    document.getElementById('count').textContent=num
}
function dec(){
    num-=1;
    document.getElementById('count').textContent=num
}
function Reset(){
    num=0;
    document.getElementById('count').textContent=num
}
// function addInput(){
//     let i =Number(document.getElementById("input").value);
//     num+=i;
//     document.getElementById('count').textContent=num;
// }
