function student() {/* <- не удалять */
//Вариант 5 
//1-----------------------------------------------
var caption = document.querySelectorAll("#head")[0];
var fSize = 72;
var arr =caption.innerHTML = caption.innerHTML.split("").map(function(x,i,arr){
	arr[i]="<span style=\"font-size:"+fSize+"px\">"+arr[i]+"</span>";
	fSize-=3;
	return arr[i];
}).join("");
// console.log(typeof arr);
//функция для задания помеченного красным текстом
(function gradientColor(color1,color2,color3){
	caption.style.cssText="background:linear-gradient(90deg,"+color1+","+color2+","+color3+");"+
	"-webkit-background-clip: text; -webkit-text-fill-color: transparent;text-shadow:none;"	
}( "#7878FF" , "#C8C8AF" , "#FFFF5F"));

//2 3 4-----------------------------------------------

var containerWidth = parseInt(window.getComputedStyle(document.querySelectorAll("#all")[0]).width);
// console.log(containerWidth);
var col1 = document.querySelectorAll("#col1")[0];
	col1.style.cssText="width:"+(containerWidth-14)+"px;float:left;margin:0 5px;";

var col2_col3_width = containerWidth/2;
var col2_col3Array = document.querySelectorAll("#col2 , #col3");
	col2_col3Array.forEach(function(element,i,arr) {
		arr[i].style = "width:"+containerWidth/2+"px;";
	});
//5-------------------------------------------------
var td = document.querySelectorAll("td");
var len = td.length;

for (var i = 7; i <len; i+=10){
	for (var j =0; j<=8;j+=2) {
		if(j!==4){
			td[i+j].style.cssText="background-color:black;";
		}
	}
};

//7-----------------------------------------------
var fontFam=(document.querySelectorAll("#foot p")[1]).style.fontFamily="sans";

// //8------------------------------------------------
var tresfRotat = document.querySelectorAll("#foot_img>img");
tresfRotat.forEach(function(x,i,arr){
	arr[i].style.cssText="transform:rotate("+ parseInt( 20 - (Math.random()*40))+"deg);";
});

// var a = document.querySelectorAll("#foot_img img");

// a.forEach(function (x, i, arr) {
// 	x.alt = "oops url: " + x.src.split("/").pop();

// });

// var a = document.querySelectorAll("#foot_img img");
// console.log(typeof a, a);
// console.log(Array.prototype);
// var d = Array.prototype.concat.apply([],a).reverse();
// console.log(typeof d,d);
// foot= document.querySelectorAll("#foot_img")[0];
// foot.innerHTML="";
// d.forEach(function(x,i,arr){
// 	foot.appendChild(x)
// });






//9------------------------------------------------

var content =(document.querySelectorAll("#col2 p")[1]);
var newContent = content.textContent.replace(/a/g,"<span style=\"color:red;\">A</span>");
content.lastChild.textContent = "";
var newElem=document.createElement("span");
content.appendChild(newElem).innerHTML=newContent;

};/* <- не удалять */
