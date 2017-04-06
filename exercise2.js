'use strict';

(() => {

    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("FULFILLED!");
        }, 300);
    });

    promise.then((value) => { console.log(value); });

}());
