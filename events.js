class Events {
    constructor(title, date, time, {webinar, event, theme}){
        this.title = title
        this.date = date
        this.time = time
        this.webinar = webinar
        this.event = event
        this.theme = theme
    }
}

class Webinar {
    constructor(title, link) {
        this.title = title
        this.link = link
    }
}

class Event {
    constructor(location, adress){
        this.location = location
        this.adress = adress
    }
}

class Theme {
    constructor(title){
        this.title = title
    }
}
