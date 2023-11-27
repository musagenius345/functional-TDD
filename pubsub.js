class pubSub {
  events = {};
  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }
  publish(event, data) {
    if (this.events[event])
      this.events[event].forEach((callback) => callback(data));
  }
  obj(){
    return JSON.stringify(this.events)
  }
}
const sub = new pubSub();
sub.subscribe("update", (data) => console.log(data));
sub.publish("update", "Some update"); // Some update
sub.publish("update", "Some new update"); // Some update
const hereMeOut = (key, infoData) => sub.subscribe(key, (data) => sub.events[key] = infoData)
hereMeOut('manga', 'one piece')
hereMeOut('manga', 'naruto')
console.log(JSON.parse(sub.obj()))

