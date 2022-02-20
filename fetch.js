class Fetch {
  async getCurrent(input) {
    const myKey = "a85c56f1a39e007c66326ba444142f2e";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}

