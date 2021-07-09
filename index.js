const Sarasas = require('./Sarasas');

const automobiliai = new Sarasas();

automobiliai.prideti('Audi');
automobiliai.prideti('Volvo');
automobiliai.prideti('Tesla');
automobiliai.prideti('Volga');
automobiliai.prideti('Fiat');
automobiliai.prideti('Citroen');


automobiliai.redaguoti(0, 'Mazda')
automobiliai.pasalinti(3);
automobiliai.spausdinti();


// console.log(automobiliai);


