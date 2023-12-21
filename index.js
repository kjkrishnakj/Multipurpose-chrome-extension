const getJokes = async () => {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      const myJoke = document.querySelector("#myjoke");
      myJoke.innerHTML = data.value;
    } catch (e) {
      console.error("Error fetching Chuck Norris joke:", e);
    }
  };
  
  const getWeather = async () => {
    try {
      const res1 = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=956ea0dd1b8979c792d10bd56f0dc117");
      const data1 = await res1.json();
      const myWeather = document.querySelector("#myweather");
      myWeather.innerHTML = (data1.weather[0].description);
    } catch (e) {
      console.error("Error fetching weather data:", e);
    }
  };
  
  const getNews = async () => {
    try {

        
        const res2 = await fetch("https://newsdata.io/api/1/news?apikey=pub_35161e74bff05fe662daa35599198a31d1a79&q=cryptocurrency");
        if (data.results && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
      
            const randomNews = data.results[randomIndex];
      
            console.log("Random News:", randomNews);
      
            const myNews = document.querySelector("#mynews");
            myNews.innerHTML = `Random News: ${randomNews.title}`;
         } 
    }catch (e) {
      console.error("Error fetching news data:", e);
    }
  };
  
  

document.getElementById("myjoke").addEventListener("click", function() {
  getJokes();
  
});
  document.getElementById("myweather").addEventListener("click", function() {
    getWeather();
  });
  document.getElementById("mynews").addEventListener("click", function() {
    getNews();
  });