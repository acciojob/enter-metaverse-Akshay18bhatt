//your JS code here. If required.
const button=document.getElementById("enterBtn");
const para=document.getElementById("status");
const newpara= document.createElement("h1");
newpara.id="status";
newpara.innerText="Entered Metaverse";
function changeP(){
	para.innerText="";
	para.appendChild(newpara);
	
}
button.addEventListener("click", changeP);