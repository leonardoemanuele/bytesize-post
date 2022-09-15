// information to reach API
const apiKey = "8c446bc45f6844c3b03e2d1ed26e5221";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// Asynchronous functions Part 2
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });
  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
        apikey: apiKey,
      },
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);

// // Part 1 functions
// const shortenUrl = () => {
//   const urlToShorten = inputField.value;
//   const data = JSON.stringify({ destination: urlToShorten });

//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//       apikey: apiKey,
//     },
//     body: data,
//   })
//     .then(
//       (response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Request failed!");
//       },
//       (networkError) => {
//         console.log(networkError.message);
//       }
//     )
//     .then((jsonResponse) => {
//       renderResponse(jsonResponse);
//     });
// };
