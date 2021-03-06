'use strict';

(() => {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('REJECTED!'));
        }, 300);
    });

    let onReject = (error) => {
        console.log(error.message);
    };

    promise.then((value) => {
        console.log("FULFILLED!");
    }, (error) => {
        onReject(error);
    });

    //promise.then(null, onReject);

}());
