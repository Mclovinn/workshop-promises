'use strict';

(() => {

    let helloWorldPromise = new Promise((resolve) => {
        console.log("Promise is not resolved yet!");
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });

    helloWorldPromise.then((value) => { console.log(value); });
    helloWorldPromise.then(console.log);


    // Callback Example
    let callbackExample = (message) => {
        console.log(message);
    };

    let helloWorldCallback = (callback) => {
        console.log("Callback is not executed yet!");
        setTimeout(() => {
            callback("Callback Executed!");
        }, 2000);
    };

    helloWorldCallback(callbackExample);

}());
