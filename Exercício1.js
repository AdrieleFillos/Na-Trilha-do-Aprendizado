function convertTemp(direction)
{
 
var f = document.convert.ftemp, c = document.convert.ctemp, k = document.convert.ktemp;


if (direction == "fpc") 
{
    c.value = Math.round((f.value - 32) * (5/9));
	k.value = Math.round((parseInt(c.value) + 459.67) * (5/9));
} 
else if (direction == "kpf") 
 {
	f.value = Math.round((parseInt(c.value) * (9/5)) -  459.67);
	c.value = Math.round((f.value - 32) * (5/9));
	
 }
else
 {
	f.value = Math.round((parseInt(c.value) * (9/5)) + 32);
	k.value = Math.round((parseInt(c.value) + 273));
 }
}

function clearAll()
{
document.convert.ftemp.value="";
document.convert.ctemp.value="";
document.convert.ktemp.value="";
}