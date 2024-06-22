//your JS code here. If required.
let currentt=document.getElementById("timer");
let currentD=new Date();
setInterval(
	function(){
		currentD=new Date();
		currentt.innerHTML=currentD.toLocaleString();
	},1000
)
