var consLogElems=function(x){         //фФункция для вывода в консоль , принимает массив итоговый от задания
  for (var j = 0 ; j<x.length ; j++){  
  console.log(x[j]);
}
};

//Задание 1 ---------------------------------------------------------------------------------------
var arrCopy1 = arrLab7.concat();
var arrNew = [];
    arrCopy1.forEach( function (x,i,arr) {
      if (arrCopy1[i].indexOf("servitute")!=-1) {
            var str = arrCopy1[i] ;
            str = "<span style =\"font-soze:24px\">" + str[0] + "</span>"+str.slice(1);
            arrNew.push(str);
      }
    });
  console.log(arrNew.join());

// //ЗАДАНИЕ 2---------------------------------------------------------------------------------------
var arrCopy2 = arrLab7.concat();
var arr2= [], n = 8;

arrCopy2.forEach( function (x,i,arr) {
    var a = arr[i].match(/\.(\s|$)/g);
      if (a!== null ) {
        if(a.length === n){
        var b=arr[i].replace(/(^|\.\s)([A-Z])/g ,"$1<span style =\"font-soze:24px\">$2</span>");
        arr2.push(b);
      }
      }
});
console.log(arr2[0]);
//Задание 3----------------------------------------------------------------------------------------------------------------------
var arrCopy3 = arrLab7.concat();
 var arrNew3 = [] , 
    value=12;
  arrCopy3.forEach(function( x , i , arr ) {
    if (arr[i].indexOf("transform" && "matrix")!= -1) {
     var newValue = arr[i].replace(/\d+/g, function(match){return +match + value});
     arrNew3.push(newValue);
      };
    });

consLogElems(arrNew3);
       
// //Задача 4----------------------------------------------------------------------------------------------------------------
var arrCopy4 = arrLab7.concat();
var arrNew4 = [],
  styleAtribut="style";
arrCopy4.forEach(function( x , i , arr ) {

  if(arr[i].indexOf("style")!=-1) {
    //console.log("ДО : "+arr[i]);
      var match=arr[i].match(/\bweight\b/);
      match= match!==null?
        arr[i].replace(/.font\-weight.+(?='|;)/ , ";font-weight:700;" ).toLowerCase() :
          arr[i].replace(/('[^']*)'/ , "$1;font-weight:700;'" ).toLowerCase();     
        // console.log(match);
         arrNew4.push(match);  
  }

});
consLogElems(arrNew4);

//Задание 5 ---------------------------------------------------------------------------------------------------
var clr = "#ABCDEF" ;
function fromHexToRGB(color){
  var a=color.slice(1);
  var color1=a.match(/\w{2}/g);
  color1.forEach(function(x , i , arr){
    arr[i]=parseInt(arr[i] , 16 );  
  });
  return "RGB ("+color1.join(",")+");";
};
console.log(fromHexToRGB(clr));