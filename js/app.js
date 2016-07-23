console.log("heller");
window.onload = function(){

var newFrenz = ["GJetson", "Goku","ban-bam", "Ichiro","MrSlate","Picallo"];

for( var i = 0; i < newFrenz.length; i++){

console.log(newFrenz[i]);



var addNewFrenz=document.createElement("li");
addNewFrenz.className="newFrenz";
addNewFrenz.innerHTML=newFrenz[i];
list.appendChild(addNewFrenz);

}
};
