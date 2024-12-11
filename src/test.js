// with callback we can provide flexibility for result of sum function

const display = async () => {
    const myPromise = new Promise((resolve, reject) => {
        const flag = true;
        setTimeout(() => {
            if (flag) {
                resolve('Success response');
            } else {
                reject('Error response');
            }
        }, 2000)
    });

    const result = await myPromise;
    console.log(result);
}

display();
