function say(){
	var x = Math.floor(Math.random() * 10);
	console.log(x)
var number=document.getElementById("number").value;
console.log(number);
if(number==x){
	
	
	document
	.getElementById("container")
	.innerHTML="<h2>YOU WON</h2>";
	document.body.style.background= "url('https://www.setaswall.com/wp-content/uploads/2017/06/Landscapes-Night-Luna-1920-x-1200.jpg')";
	document.body.style.color="black";
	

	
}else{
	document
	.getElementById("container")
	.innerHTML="<h2>YOU LOSE</h2>";
	document.body.style.background= "url('https://i1.wp.com/evomics.org/wp-content/uploads/2014/01/autumn-landscape-15638-1920x1200.jpg')";
	document.body.style.color="black";
	
}

}
