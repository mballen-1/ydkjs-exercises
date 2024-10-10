function toggle(...args) {
  console.log(args);
  let i = 0;
  return () => {
    console.log(args[i % args.length]);
    ++i;
  };
}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");
hello();
hello();
onOff();
onOff();
onOff();
// "hello"
// "hello"
// "on"
// "off"
// "on"

speed();
speed();
speed();
speed();
// "slow"
// "medium"
// "fast"
// "slow"
