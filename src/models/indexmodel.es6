import rpA from 'request-promise';
class indexModel{
    constructor(ctx){
     this.ctx=ctx;
    }
    updateNum(){
        const options={
            uri:'http://localhost:3000/data.txt',
            methods:'GET',
        }
              
       return new Promise((resolve,reject)=>{
           rpA(options).then(function(result){
               const info=JSON.parse(result);
               if(info){
                   resolve({data:info.result});
               }else{
                reject({});
               }
               console.log(info);
           })
       }) 
    }
}
export default indexModel