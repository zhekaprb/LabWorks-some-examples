var MyFuncConstr = (function () {
//Privat propertys--------------------------
var a = "even", //вариант 1 
    b = 11,
    c=  [1,33],
    d = ["blue", "brown", "cyan"];

//Privat methods--------------------------
     function sumElem(arr) {//считает количесвто чет нечет
        var a1 =(a=="even" ? 0 : 1);  //если четное то остаток ноль если не четное остаток 1   
        var sumEven=0;        
        return arr.filter(function(x,i,arr){ 
            return arr[i]%2===a1 && arr[i]!==0;
        }).length;   
    };
    function sumMultiplicity (arr) {//считает сумму индексов кратных b
        var sumIndx=0;
        arr.forEach(function(element,i,arr) {
          (element%b===0 && element!==0 )?sumIndx+=i :sumIndx;  
        });
     return sumIndx ;
};
    function sumElemValue(arr) {//счиатет в диапозоне
    var sumElVal=0;
      arr.forEach(function(e,i,arr){
          if(arr[i]>=c[0] && arr[i]<=c[1]){sumElVal+=e}; 
      });
      return sumElVal ;
};

    function sumIndxElem (arr) {// для цветов 
    var summ=0,len = arr.length;
    for (var i = 0; i <len; i++) {
        switch ( arr[i] ) {
            case d[0]:
            case d[1]:
            case d[2]:
                summ+=i;
            break;
        };
    };
     return summ;   
    };

//FUNCTION-Constructor--------------------------------------------------------------------------
     function Constr(array){ // передаем arrNew и он = array;    
        this.argument = array.concat();
        this.typeSTRorARR = this.toObject();
        if(this.typeSTRorARR) {
            this["сумма even"] = sumElem(this.argument);
            this["сумма индексов кратных "+b] = sumMultiplicity(this.argument);
            this["Cумма значение от "+c[0]+" до " +c[1]]= sumElemValue(this.argument);
            this["Cумма индексов цветов"] = sumIndxElem(this.argument);
                } else return (console.log("Неверный тип данных элементво массива"));
        };
//PROTOTYPE of FUNCTION Constructor-------------------------------------------------------------------------------------------
        Constr.prototype.toObject = function(){
            as = this.argument.some(function(i,x,arr){ return (typeof arr[x] !== 
                "string" && typeof arr[x] !=="number")});//проверка есть ли элем. не типа число и не типа строки
        return !as; //т.к. я хочу создать свойсвто которе значит true что массив и чисел или строк;
     };
     

return Constr;
}());

var a = new MyFuncConstr (arrLab4str);
console.log(a);
var b = new MyFuncConstr (arrLab4numb);
console.log(b);
var arr11=[1,33,2,3,4,5,11,22,false];
var c = new MyFuncConstr (arr11); // создаст объект с 2мя свояствами что массив не из строк и цисел и сам массив, и выведет что неверный тип данных



