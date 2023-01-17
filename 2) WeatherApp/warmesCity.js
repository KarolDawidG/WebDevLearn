const fetch = require('node-fetch');

const processWeatherData = async data => {
   const sorted = data.sort((a, b) => {
    return a.temperatura - b.temperatura;
   });

    const lengthSorted = sorted.length;

    for (let i=0; i<lengthSorted; i++) {
        console.log(`Nr ${i+1}: ${sorted[i].stacja} = ${sorted[i].temperatura} st. C`);
    }

};

const findWarmesCity = async () => {
    try {

        const response = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const data = await response.json();
        await processWeatherData(data);

    } catch(error) {
        console.log('Error has occured!!', error);
    }

}

findWarmesCity();



