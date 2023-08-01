const GEOCODINGAPIKEY = "bb97736519c9fc5db2374f27ed914c13";
const ENDPOINT = 'http://api.openweathermap.org/geo/1.0/direct?';

const obtainGeoCode = async (city) => {
  try {
    const response = await fetch(`${ENDPOINT}q=${city}&appid=${GEOCODINGAPIKEY}`);
    const data = await response.json();
    console.log(data[0].country, data[0].lat, data[0].lon);
    return data;
  }
  catch (error) {
    throw Error(error);
  }
}

export default obtainGeoCode;

// Path: src/redux/items/obtainGeoCode.js