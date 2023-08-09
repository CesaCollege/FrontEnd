// console.log("Hello3");

// HOF
// Callback function
// const newArray = [1, 2, 3, 4, 5].filter((num) => num > 3);

// console.log(newArray); // [4, 5]
// filter is a sync function

// time consuming operations will block the hole program execution

// Async / Sync
// in async functions we doesn't have access to  return
// we need to give them a callback function for using return type

// function getImportantValue() {
//   let value;
//   setTimeout(() => {
//     value = "Important Value";
//   }, 2000);

//   return value;
// }

// const importantValue = getImportantValue();
// console.log(importantValue);

//======

// function getImportantValue(callback) {
//   let value;
//   setTimeout(() => {
//     value = "Important Value";
//     callback(value);
//   }, 2000);
// }

// getImportantValue((value) => console.log(value))

// // OR

// getImportantValue(console.log)

// Callback hell

// $.getJSON({
//     url: 'http://example.com',
//     success: successCallback,
//     error: errorCallback
// })

// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     $.getJSON({
//         url: 'http://mywebsite.com/user',
//         success: (user) => {
//             $.getJSON({
//                 url: `http://weather.com/${user.location}`
//                 success: (weather) => {
//                     renderWeather(weather)
//                 }
//                 error: onErrorCallback
//             })
//         },
//         error: onErrorCallback
//     })
// })

// در مثال قبل ما قصد داشتیم زمانی که بر روی دکمه کلیک می‌شود اطلاعات کاربر دریافت شود و وضعیت آب و هوای محل زندگی کاربر به او نشان داده شود.

// دلیل ایجاد این کال‌بک‌های تودرتو این است که قبل از گرفتن اطلاعات کاربر ابتدا دکمه باید کلیک شود و قبل از گرفتن اطلاعات مربوط به وضعیت آب و هوا، اطلاعات مربوط به کاربر باید دریافت شود و در نهایت وضعیت آب و هوا در صفحه رندر می‌شود.

// خب همانطور که می‌بینید نتیجه این callback function های تودرتو، یک کد ناخوانا است که به آسانی و در یک نگاه قابل فهم نیست.

// بسیارخب این مقدمه کوتاهی برای آشنایی بهتر با چرایی به وجود آمدن Promise و سینتکس زنجیروار then و catch بود که در درسنامه بعدی قصد داریم به آن بپردازیم.

//===============
// در جاوااسکریپت Promise آبجکتی است که می‌تواند موفقیت یا عدم موفقیت یک کار زمان‌بر و ناهمگام (Asynchronous) را به ما اطلاع دهد.

// با استفاده از Promise ها ما می‌توانیم به جای پاس دادن توابع تودرتو، یک آبجکت به اسم Promise دریافت کنیم که به ما کمک می‌کند از وضعیت تابع ناهمگامی که می‌سازیم با خبر شویم.

// وضعیت یک Promise
// pending
// fulfilled
// rejected

// resolve
// reject

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Important Value');
//     }, 2000);
//   });

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Important Value');
//     }, 2000);
//   });

//   myPromise.then((value) => console.log(value))

//   myPromise.catch((error) => console.log(error))

//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("I can't do this!")
//     }, 2000);
//   });

//   myPromise.then((value) => console.log(value))

//   myPromise.catch((error) => console.log(error))

//=================================
//   console.log('first')

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Important Value');
//   }, 2000);
// });

// console.log('second')

// myPromise.then((value) => console.log(value))

// console.log('third')

// myPromise.catch((error) => console.log(error))

// console.log('fourth')

//===========================

// function getPSON(url) {
//     return new Promise((resolve, reject) => {
//         $.getJSON({
//             url: url,
//             success: resolve,
//             error: reject
//         })
//     })
// }

// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     const userPromise = getPSON('http://mywebsite.com/user');
//     userPromise.then(user => {
//         const weatherPromise = getPSON(`http://weather.com/${user.location}`);
//         weatherPromise.then(weather => renderWeather(weather));
//         weatherPromise.catch(onErrorCallback);
//     });
//     userPromise.catch(onErrorCallback);
// })

//======================

// asyncOperation1()
// .then((value1) => asyncOperation2(value1))
// .then((value2) => console.log(value2))
// .catch((error) => console.log(error))
// .then(() => console.log('done'))

// در مثال بالا توابع asyncOperation1 و asyncOperation2 هر دو به صورت ناهمگام اجرا می‌شوند و هر دو Promise برمی‌گردانند.

// تابع asyncOperation1 در صورت موفقیت value1 و تابع asyncOperation2 در صورت موفقیت value2 را resolve می‌کند.

// اما دلیل اصلی وجود چنین سینتکسی این است که متدهای then و catch هر دو به صورت پیشفرض یک Promise برمی‌گردانند!

// این موضوع باعث می‌شود که حتی در مواردی که با ارور مواجه می‌شویم و پس از آن که کال‌بک فانکشنِ متد catch اجرا می‌شود نیز بتوانیم از then استفاده کنیم.

// استفاده از then پس از catch به این معنا است که چه در صورت موفقیت و چه در صورت عدم موفقیتِ Promise، نیاز داریم کاری انجام دهیم.

// فرایندی که در قطعه کد بالا رخ می‌دهد را می‌توان به شکل زیر توصیف کرد:

// در صورتی که کار زمان‌بر asyncOperation1 با موفقیت به پایان برسد، تابعی که در then اول قرار دادیم اجرا می‌شود.
// تابع asyncOperation2 یک عملیات ناهمگام دیگر را با استفاده از value1 که از عملیات قبلی دریافت کردیم شروع می‌کند.
// در صورتی که کارِ زمان‌برِ asyncOperation2 با موفقیت به پایان برسد کال‌بک فانکشنِ then دوم با value2 صدا زده می‌شود و آن را در کانسول لاگ می‌کند.
// اگر در هنگام انجام هر یک از کارهای بالا خطایی رخ دهد، عملیات بلافاصله در همان‌جا متوقف می‌شود و تابعی که در متد catch قرار داده‌ایم صدا زده می‌شود.
// در نهایت چه خطایی رخ داده باشد و چه هر دو عملیات با موفقیت انجام شده باشند، تابعی که در then آخر قرار دادیم اجرا و عبارت 'done' در کانسول لاگ می‌شود.
// نکته۱: اگر در کال‌بک فانکشنِ then اول خطایی رخ دهد، دیگر کال‌بک فانکشنِ then دوم صدا زده نمی‌شود و در عوض کال‌بک فانکشنِ مربوط به متد catch اجرا خواهد شد.

// asyncOperation1
// .then((value1) => asyncOperation2(value1)) // درست
// .then((value2) => console.log(value2))

// asyncOperation1
// .then((value1) => {
//     return asyncOperation2(value1)) // درست
// })
// .then((value2) => console.log(value2))

// asyncOperation1
// .then((value1) => {
//     asyncOperation2(value1)) // نادرست
// })
// .then((value2) => console.log(value2)) // we don't have access to value2



// promise.then(successCallback, failureCallback);



// asyncOperation1()
// .then((value1) => asyncOperation2(value1), onErrorCallback)
// .then((value2) => console.log(value2))
// .catch((error) => console.log(error))
// .then(() => console.log('done'))

// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     getPSON('http://mywebsite.com/user')
//     .then(user => getPSON(`http://weather.com/${user.location}`))
//     .then(weather => renderWeather(weather))
//     .catch(onErrorCallback);
// })





// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Important Value");
//   }, 2000);
// });
// const value = await myPromise;

// console.log(value);


// async function logValue() {

// }

// //OR

// const f = async () => {

// }

// async function f() {
//     return 'Hello'
// }

// f().then(value => console.log(value)) // 'Hello'

// console.log('first')
// logValue()
// console.log('second')


// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     getPSON('http://mywebsite.com/user')
//     .then(user => getPSON(`http://weather.com/${user.location}`))
//     .then(weather => renderWeather(weather))
//     .catch(onErrorCallback);
// })

// const btn = document.getElementById('btn');
// btn.addEventListener('click', async () => {
//     try {
//         const user = await getPSON('http://mywebsite.com/user')
//         const weather = await getPSON(`http://weather.com/${user.location}`)
//         renderWeather(weather)
//     } catch(e) {
//         onErrorCallback(e)
//     }
// })