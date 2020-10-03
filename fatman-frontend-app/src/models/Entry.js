export default class Entry {

    constructor({id, temp, humidity, fan_state, light_state, pump_state, date}) {
        this.id = id
        this.temp = temp
        this.humidity = humidity
        this.fan_state = fan_state
        this.light_state = light_state
        this.pump_state = pump_state
        this.date = date
    }

    get temp() {
        return this.temp
    }

    get humidity() {
        return  this.humidity
    }
}