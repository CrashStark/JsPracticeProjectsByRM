var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereun%2Cdogecoin&vs_currencies=USD",
  method: "GET",
  headers: {},
};
let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");
$.ajax(settings).done(function (response) {
  console.log(response);
  btc.innerHTML = response.bitcoin.usd;
//   eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});
