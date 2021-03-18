const geisan = {
  events: {
    id: 1,
    title: "Event number 1",
    date: "12.03.2021",
    time: "4:00 PM",
    webinar: {
      title: "Commerce",
      link: "https://google.com",
    },
    event: {
      location: "Bucharest",
      adress: "Piata Unirii 1",
    },
    theme: "Disney Princess",
  },
};

const show = document.querySelector("p");

show.innerHTML =
  JSON.stringify(geisan.events.date) + JSON.stringify(geisan.events.time);
