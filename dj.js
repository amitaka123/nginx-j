{/* <div id="joke" class="joke"> Awesome Joke is loading... </div> */}
{/* <button id="jokebtn" class="btn">Next JOKE</button> */}


//with the help of promises
// GET https://icanhazdadjoke.com/

// const jokes = document.querySelector('#joke');
// const jokebtn = document.querySelector('#jokebtn');

// const generateJokes = () => {


//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     // with the help of promises: the fetch api method return the promise

// //    fetch('https://icanhazdadjoke.com/', setHeader)
// //    .then((res) => {
// //     //  console.log(res.json());////
// //     res.json()
// //     .then ((data) => {
// //         jokes.innerHTML = data.joke;
// //     })
// //    }).catch((error) => {
// //     console.log(error);
// //    })

// fetch('https://icanhazdadjoke.com/', setHeader)
//    .then((res) => res.json())
//    .then ((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//     console.log(error);
//    })

// }


// jokebtn.addEventListener('click', generateJokes);
// generateJokes();

//now with the help of async await (es8):

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const generateJokes = async () => {

 try{
    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }


 const res = await fetch('https://icanhazdadjoke.com/', setHeader)
 const data = await res.json();
 jokes.innerHTML = data.joke;
 }catch(err){
    console.log(`the error is ${err}`);
 }

 
}


jokebtn.addEventListener('click', generateJokes);
generateJokes();