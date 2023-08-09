// async , await
async function weather(user) {
     return 'hello'
}

async function kareTavil() {
  let value;
  console.log("VALUE ",value);

  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        value = "resid";
      resolve("!!Important");
    }, 2000);
  });
  console.log("VALUE ",value)

  console.log(" PROMISE",mypromise)
  await mypromise;
  const myCityWeather = await weather(user);

  console.log(" PROMISE",mypromise)
  console.log("VALUE ",value)
}

function main() {

  kareTavil();

  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // value = "resid";
      resolve("!!Important");
    }, 2000);
  });
}

main();
