const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const axios = require('axios');
const cors = require('@koa/cors');
 



router.get('/coin',  async ctx => {

    let item = (ctx.request.query.search).toUpperCase();

   await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
        headers:{'X-CMC_PRO_API_KEY':'1d02886e-3d7b-454b-8aee-bbb2cd02992a'}
    })
    .then(arr=>{
        arr= arr.data.data;
      
        for(let i=0;i<arr.length;i++){

            if(arr[i].symbol==item){

              ctx.body= {
                    status:'success',
                    id:arr[i].id,
                    symbol:arr[i].symbol
                };

              return ctx.status=200;
  
            }      
        }

              
                 ctx.body={
                      status:'error'
                };

                return ctx.status=404;
    })
});


app.use(cors());
app.use(router.allowedMethods());
app.use(router.routes());



app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('app working on port 3000')
    }
});