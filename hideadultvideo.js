/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";
var hdv1 = document.createElement("div");
hdv1.style.width="100%"; 
hdv1.style.height="100%";
hdv1.style.position="fixed"
hdv1.style.top="0";
hdv1.style.left="0";
hdv1.style.zIndex="999999999";
hdv1.style.display="block";
hdv1.style.backgroundColor="blue";
var text2=document.createElement("p");
text2.style.color="yellow";
text2.style.fontSize="24";
text2.style.fontWeight="bold" 
text2.textContent="Error 403: Forbidden for you, baby!";
text2.style.top="45%" 
text2.style.left="45%" 
text2.style.position="fixed" 
hdv1.append(text2);
document.body.append(hdv1);
