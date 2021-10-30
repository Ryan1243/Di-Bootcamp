class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  increase(value = 1) {
    if (this.volume < 100) {
      this.volume += Math.min(value, 100 - this.volume);
    }
    console.log(this.volume);
  }
  decrease(value = 1) {
    if (this.volume > 0) {
      this.volume -= Math.min(value, this.volume - 0);
    }
    console.log(this.volume);
  }
  setChannel(value) {
    this.channel = Math.max(Math.min(value, 50), 0);
    console.log("setting the channel to: " + this.channel);
  }
  resetTV() {
    this.channel = 1;
    this.volume = 50;
    console.log(
      "TV has been resets the channel: " +
        this.channel +
        " and the volume: " +
        this.volume
    );
  }
  info() {
    console.log(
      "TV status: you are on channel: " +
        this.channel +
        " and your volume is: " +
        this.volume
    );
  }
}

const LG = new TV("LG");
LG.increase();

class SmartTV extends TV {
  constructor(brand, channel, volume, netflix = true) {
    super(brand, channel, volume);
    this.netflix = netflix;
  }
  increase() {
    super.increase(10);
  }
  decrease() {
    super.decrease(10);
  }
}

const hisenses = new SmartTV("Hisenses");
hisenses.increase();
hisenses.setChannel(70);
hisenses.info();
hisenses.resetTV();