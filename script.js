//your JS code here. If required.
const button=document.getElementById("enterBtn");
const para=document.getElementById("status");
const newpara= document.createElement("h1");
newpara.id="status";
newpara.innerText="Entered Metaverse";
function changeP(){
	
	document.body.insertBefore(newpara, para);
	para.remove();
}
button.addEventListener("click", changeP);