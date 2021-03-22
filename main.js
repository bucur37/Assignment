function showEvents() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let data = JSON.parse(xhttp.responseText);
       displayData(data)
      }
};
xhttp.open("GET", "./events.json", true);
xhttp.send();
}

function displayData(dis) {
  let datashow = `
  <div class="container">
  <p>${dis[0].title}</p>
  <p>${dis[0].date}</p>
  <p>${dis[0].time}</p>
  <p>${dis[0].webinar.title +" "+ dis[0].webinar.link}</p>
  <p>${dis[0].event.location + " " + dis[0].event.adress}</p>
  <p>${dis[0].theme}</p>
  </div>
  <div class="container">
  <p>${dis[1].title}</p>
  <p>${dis[1].date}</p>
  <p>${dis[1].time}</p>
  <p>${dis[1].event.location +" "+ dis[1].event.adress}</p>
  </div>
  `;

  if(dis.length > 1 && dis.length < 5) {
    console.log(dis.length + " Merge!")
  } else {
    console.log(dis.length + " Nu merge...")
  }
  document.getElementById("show").innerHTML = datashow
}