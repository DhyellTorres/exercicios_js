{
  function trafficLight(color) {
    switch (color) {
      case 'red':
        document.getElementById('img_traffic_light').src = '/img/red_light.png';
        break;
      case 'yellow':
        document.getElementById('img_traffic_light').src = '/img/yellow_light.png';
        break;
      case 'green':
        document.getElementById('img_traffic_light').src = '/img/green_light.png';
        break;
      default:
        document.getElementById('img_traffic_light').src = '/img/all_off_light.png';
        break;
    }
  }

  function toFahrenheit() {
    document.getElementById('inputFahrenheit').value = (document.getElementById('inputCelcius').value * 9 / 5) + 32;
  }
  function toCelcius() {
    document.getElementById('inputCelcius').value = (document.getElementById('inputFahrenheit').value - 32) * 5 / 9;
  }

  function imc() {
    document.getElementById('inputIMC').value = (document.getElementById('inputPeso').value / (document.getElementById('inputAltura').value * document.getElementById('inputAltura').value));
  }

  function tabelaCarros(carros) {
    var html = '';
    html += `
    <tr><td>teste</td></tr>
    
    
    `;
    document.getElementById('tableCars').innerHTML = html;
  }
}