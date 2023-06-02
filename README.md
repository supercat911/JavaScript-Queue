# JavaScript-Queue
Simple implementation of queue in Javascript

Here's the first example to get you started.
```js
import { Queue } from './Queue';

let funcs = [
    ()=>{console.log(1)},
    ()=>{console.log(2)},
    ()=>{console.log(3)},
];


let queue = new Queue();

for (let i = 0; i < funcs.length; i++) {
    queue.put(funcs[i]);
}

while (queue.qsize()) {
    let q = queue.get();
    await q();
    queue.task_done();
}
```

### Methods

#### `queue.put(task)`
> Puts task into the queue. task is a function.

#### `queue.get()`
> Returns a current task from the queue.

#### `queue.task_done()`
> Indicates that a formerly enqueued task is complete. Then remove a current task.

#### `queue.qsize()`
> Returns the approximate size of the queue.

#### `queue.empty()`
> Empty the queue.





