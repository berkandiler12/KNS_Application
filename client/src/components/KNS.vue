<template>
  <div class="KNS">
    <div class="row">
      <div class="col-md-4 col-lg-4"></div>
      <div class="col-4 col-md-4 col-lg-4 col-sm-12 col-xs-12">
        <h3>CRYPTO MARKET</h3>
        <br />
        <div class="row">
          <input
            class="form-control form-control-sm mr-3 w-75 left"
            type="text"
            v-model="queryString"
            @keyup.enter="getData"
            placeholder="Search"
            aria-label="Search"
          />
          <i><font-awesome-icon icon="search" ari></font-awesome-icon></i>
        </div>
        <br />
        <h6>COIN ID:{{ coin.id }}</h6>
        <h6>COIN SYMBOL:{{ coin.symbol }}</h6>
      </div>
      <div class="col-4 col-md-4 col-lg-4"></div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "KNS",
  props: {
    msg: String
  },
  data() {
    return {
      queryString: null,
      coin: {}
    };
  },
  methods: {
    async getData() {
      await Axios.get(
        "http://localhost:3000/coin?search=" + this.queryString
      ).then(response => {
        this.coin = response.data;
      });
    }
  }
};
</script>

<style scoped>
.inline-elements {
  display: inline-block;
}

input {
  margin-left: 30px;
  vertical-align: middle;
}

i {
  font-size: 20px;
  height: 20px;
  vertical-align: middle;
}
h3,
h6 {
  padding-right: 30px;
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
.active-cyan-2 input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #4dd0e1;
  box-shadow: 0 1px 0 0 #4dd0e1;
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

body {
  background: #f2f2f2;
  font-family: "Open Sans", sans-serif;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wrapper {
  text-align: center;
  border: 2px;
  font-size: 0;
}

.wrapper > div {
  display: inline-block;
  text-align: left;
  vertical-align: top;
  border: 2px solid red;
  font-size: 16px;
}
</style>
