
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Important Value");
    }, 2000);
  });

async function main() {
    console.log("1")
    const value =  myPromise;
    console.log("2")

    console.log(value);
    console.log("3")

}

function main2() {
    let value;
    setTimeout(
        () => {value = "hi";} 
        , 2000
    );

    console.log(value)
}

// main();


main2();

