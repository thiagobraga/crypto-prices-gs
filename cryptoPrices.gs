function cryptoPrice(crypto, exchange) {
  
}

function priceBitcoinBTCT() {
  var url = 'https://api.bitcointrade.com.br/v2/public/BRLBTC/ticker?v=' + (+ new Date());
  var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  var data = JSON.parse(response).data;
  var price = data.last;
  return +price;
}

function priceEthereumBTCT() {
  var url = 'https://api.bitcointrade.com.br/v2/public/BRLETH/ticker?v=' + (+ new Date());
  var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  var data = JSON.parse(response).data;
  var price = data.last;
  return +price;
}

function priceBitcoinMB() {
  var url = 'https://www.mercadobitcoin.net/api/BTC/ticker?v=' + (+ new Date());
  var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  var data = JSON.parse(response).ticker;
  var price = data.last;
  return +price;
}

/*

Ideal:

=cryptoPrice()
=cryptoPrice('BTC')
=cryptoPrice('BRLBTC')
=cryptoPrice('BRLBTC'; 'Mercado Bitcoin')
=cryptoPrice('BRLETH'; 'BitcoinTrade')

*/
