import React from 'react'

const Test = () => {
    
    // const arr = ['a','b','c','d','e'];
    // const func = ([f,...r]) => r.reduce((a,c) => a+c)+f;
    // const promise1 = Promise.resolve(500);
    const myPromise = () => Promise.resolve('I have resolved');
    function firstFunction(){
        myPromise().then(res => console.log(res));
        console.log('second');
    }
    async function secondFunction(){
        console.log(await myPromise());
        console.log('second');
    }
  return (
    <div>
        
    </div>
  )
}

export default Test