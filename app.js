const symbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'LTCUSDT', 'XRPUSDT', 'ADAUSDT', 'DOTUSDT', 'LINKUSDT', 'BCHUSDT', 'XLMUSDT', 'DOGEUSDT', 'ETCUSDT'];

const baseUrl = 'https://api.binance.com/api/v3';

const tabla1Symbols = symbols.slice(0, Math.ceil(symbols.length * 0.1));
const tabla2Symbols = symbols.slice(Math.ceil(symbols.length * 0.1));

tabla1Symbols.forEach(symbol => {
  const url = `${baseUrl}/ticker/price?symbol=${symbol}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      mostrarData(data, 'PRINCIPAL');
    })
    .catch(error => {
      console.error(error);
    });
});

tabla2Symbols.forEach(symbol => {
  const url = `${baseUrl}/ticker/price?symbol=${symbol}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      mostrarData(data, 'SECUNDARIA');
    })
    .catch(error => {
      console.error(error);
    });
});

const mostrarData = (data, tablaId) => {
  const table = document.getElementById(tablaId);
  const tbody = table.querySelector('tbody');
  const row = document.createElement('tr');
  
  const symbolCell = document.createElement('td');
  symbolCell.textContent = data.symbol;
  
  const priceCell = document.createElement('td');
  priceCell.textContent = data.price;
  
  row.appendChild(symbolCell);
  row.appendChild(priceCell);
  tbody.appendChild(row);
}
