var calc = {
lastResult: null,

operate: function operate(operation, arg1, arg2) {

 if(arg2){
	return	(this.lastResult= this[operation](arg1,arg2));
  } else {
	return	(this.lastResult= this[operation](arg1, this.lastResult));
 }	

},

add: function (arg1, arg2) {
	return arg1 + arg2;
},

substract: function (arg1, arg2) {
	return arg1 - arg2;
},

divide: function (arg1, arg2) {
	return arg1 / arg2;
},

multiply: function (arg1, arg2) {
	return arg1 * arg2;
},
};

console.log(calc.operate('add', 5, 5));
