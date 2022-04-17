
let promise = new Promise( 
    function(resolve, reject) {
        let a=1;
            b=2;
        if(a !== b){
            resolve()
        }else{
            reject()
        }
    }
);
promise
    .then(function(){
        console.log('Thành công');
    })
    .catch(function(){
        console.log('Thất bại');
    })
    .finally(function(){
        console.log('Done');
    });