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

    //delete header and body if exists
    let table = document.getElementById('tableCars');
    let header1 = table.getElementsByTagName('thead')[0];
    let body1 = table.getElementsByTagName('tbody')[0];
    if ((header1 != null) && (body1 != null)) {
      table.removeChild(header1);
      table.removeChild(body1);
    }

    //create table header
    let header = table.createTHead();
    let row = header.insertRow();
    let headerBrand = row.insertCell();
    let headerModel = row.insertCell();
    let headerPlate = row.insertCell();
    let headerPrice = row.insertCell();
    headerBrand.innerHTML = 'Marca';
    headerModel.innerHTML = 'Modelo';
    headerPlate.innerHTML = 'Placa do Carro';
    headerPrice.innerHTML = 'Preço';

    //create table body
    let body = table.createTBody();
    for (const element of carros) {
      let row2 = body.insertRow();
      let name = row2.insertCell();
      let model = row2.insertCell();
      let plate = row2.insertCell();
      let price = row2.insertCell();
      name.innerHTML = element.marca;
      model.innerHTML = element.modelo;
      plate.innerHTML = element.emplacamentos;
      price.innerHTML = element.preco;
    }
  }

  function tabelaCarrosMaisEmplacados(carros) {

    //delete header and body if exists
    let table = document.getElementById('tableCars');
    let header1 = table.getElementsByTagName('thead')[0];
    let body1 = table.getElementsByTagName('tbody')[0];
    if ((header1 != null) && (body1 != null)) {
      table.removeChild(header1);
      table.removeChild(body1);
    }

    //create table header
    let header = table.createTHead();
    let row = header.insertRow();
    let headerBrand = row.insertCell();
    let headerModel = row.insertCell();
    let headerPlate = row.insertCell();
    let headerPrice = row.insertCell();
    headerBrand.innerHTML = 'Marca';
    headerModel.innerHTML = 'Modelo';
    headerPlate.innerHTML = 'Placa do Carro';
    headerPrice.innerHTML = 'Preço';

    //create table body with cars on array ordered by plate
    let body = table.createTBody();
    let orderedCarros = carros.sort(function (a, b) {
      if (a.emplacamentos > b.emplacamentos) {
        return -1;
      };
    });
    for (const element of orderedCarros) {
      let row2 = body.insertRow();
      let name = row2.insertCell();
      let model = row2.insertCell();
      let plate = row2.insertCell();
      let price = row2.insertCell();
      name.innerHTML = element.marca;
      model.innerHTML = element.modelo;
      plate.innerHTML = element.emplacamentos;
      price.innerHTML = element.preco;
    }
  }

  function tabelaCarrosIpva(carros) {

    //delete header and body if exists
    let table = document.getElementById('tableCars');
    let header1 = table.getElementsByTagName('thead')[0];
    let body1 = table.getElementsByTagName('tbody')[0];
    if ((header1 != null) && (body1 != null)) {
      table.removeChild(header1);
      table.removeChild(body1);
    }

    //create table header with ipva cell
    let header = table.createTHead();
    let row = header.insertRow();
    let headerBrand = row.insertCell();
    let headerModel = row.insertCell();
    let headerPlate = row.insertCell();
    let headerPrice = row.insertCell();
    let headerIpva = row.insertCell();
    headerBrand.innerHTML = 'Marca';
    headerModel.innerHTML = 'Modelo';
    headerPlate.innerHTML = 'Placa do Carro';
    headerPrice.innerHTML = 'Preço';
    headerIpva.innerHTML = 'IPVA';

    //create table body with cars on array
    let body = table.createTBody();
    for (const element of carros) {
      let row2 = body.insertRow();
      let name = row2.insertCell();
      let model = row2.insertCell();
      let plate = row2.insertCell();
      let price = row2.insertCell();
      let ipva = row2.insertCell();
      name.innerHTML = element.marca;
      model.innerHTML = element.modelo;
      plate.innerHTML = element.emplacamentos;
      price.innerHTML = element.preco;

      let ipvaValue = element.preco * 0.02;

      ipva.innerHTML = ipvaValue.toFixed(2);
    }
  }
}