import { of, fromEvent, from } from "rxjs";
import { map } from "rxjs/operators";

const source = of("World").pipe(map(x => `Hello ${x}!`));

source.subscribe(console.log);
 

// const clicks = fromEvent(document, 'click');
// clicks.subscribe(x => console.log(x));

const dbclicks = fromEvent(document.getElementById("jp"), 'mouseleave');
dbclicks.subscribe(
  x => console.log(x),  


);

const arr = [1,2,3];
const execute = from(arr);
execute.subscribe((x) => console.log(x));
execute.subscribe({
next(response) {console.log(response + ": writing extended");},
error(err){console.log(err + "error")},
complete() {console.log("completed")}

});