'use strict';

(() => {


    let first = () => {
        return Promise.resolve('secret value');
    };

    let second = () => {
        return first.then(() => {
            return first();
        });
    };

    second.then((value) => {
        console.log(value);
        return second();
    }).then((value) => {
        console.log(value);
    });



    // ******************************************************************************************
    // var first = new Promise((resolve) => {
    //     resolve(1);
    // });
    //
    //
    // first.then((val) => {
    //     console.log(val); // 1
    //     return Promise.resolve('SECRET VALUE');
    // }).then((val) => {
    //     console.log(val); // 3
    //     // let returnPromise = new Promise((resolve) => {
    //     //     setTimeout(() => {
    //     //         console.log(val, 'inner inner');
    //     //         return val + 1;
    //     //     }, 300);
    //     // });
    //
    //     // setTimeout((val) => {
    //     //     console.log("setTimeout context");
    //     //     return Promise.resolve(val +1);
    //     // }, 300);
    //
    //     return Promise.resolve(val);
    // }).then((n) => {
    //     setTimeout(() => {
    //         console.log(n);
    //     }, 500);
    // });

}());
