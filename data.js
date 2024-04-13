const API = `https://bugs.verfasor.com/api`;

const myFetch = fetch(API);
const myData = [];
myFetch.then((response) => {
  response.json().then((json) => {
    console.log(json.length);
    for (let i = 0; i < 10; i++) {
      myData[i] = json[i];
    }
    console.log(myData);
  });
});
