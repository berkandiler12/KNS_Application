<template>
  <div class="KNS container">
    <div class="row">
  <div class="col-md-4 col-lg-4"></div>
  <div class="col-md-4 col-lg-4">
    <h3>CRYPTO MARKET</h3>
    <br>
    <div class="row">
  <input class="form-control form-control-sm mr-3 w-75" type="text" v-model="queryString" @keyup.enter="getData"  placeholder="Search"
    aria-label="Search"><i><font-awesome-icon icon="search" ari></font-awesome-icon></i>
    </div>
    <br>
  <div>COIN ID:{{coin.id}}</div>
  <div>COIN SYMBOL:{{coin.symbol}}</div>
  </div>
  <div class="col-md-4 col-lg-4"></div>

</div>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'KNS',
  props: {
    msg: String
  },
  data(){
    return {
      queryString:null,
      coin:{}
    }
  },
  methods:{
   async getData(){
     await Axios.get('http://localhost:3000/coin?search='+this.queryString)
         .then(response =>{
            
            console.log(response.data);

            this.coin=response.data
         })
    }
  }



}
</script>




<style scoped>
input{
  margin-left:50px;
  vertical-align: middle;
}

i {
    margin-left: 0px;
    font-size: 20px;
    height: 20px;
    vertical-align: middle;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active-cyan-2 input[type=text]:focus:not([readonly]) {
border-bottom: 1px solid #4dd0e1;
box-shadow: 0 1px 0 0 #4dd0e1;
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

body{
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
