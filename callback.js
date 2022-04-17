//callback 
function myFunction(anh){
    anh(230520);
  }
  function second(value){
    console.log(value);
  }
myFunction(second);
  
//callback hell
A(function(a){  
    B(a, function(b){
        C(b, function(c){ 
            D(c, function(d){ 
                E(d, function(e){ 

                });
            });
        });
    });
});
//foreach
Array.prototype.forEach = function(callback) {
    for (var index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this);
        }
    }
};
var course = ['Pham','Tuan','Anh']
course.forEach(function(course, index, arry) {
    console.log(course, index, arry);
});
