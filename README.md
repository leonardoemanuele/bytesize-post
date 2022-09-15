## In this exercise, we’re going to use that boilerplate code to shorten a URL using the [Rebrandly URL Shortener API](https://developers.rebrandly.com/).
## We will need a Rebrandly API key. To do this, read through the [Rebrandly sign up guide](https://www.codecademy.com/article/rebrandly-signup) to set up your API.

# Part 1: Making a POST Request

## Instructions

- 1. Set the value of the `apiKey` variable to your Rebrandly API key as a string.

  If a correct key is not assigned, proper results will not be seen in the steps afterwards.

- 2. We will make our POST request inside the `shortenUrl()` function. Inside the code block of `shortenUrl()`, create a `const` variable named `urlToShorten` and assign it `inputField.value`. `urlToShorten` will keep the value of what is being typed into the input field.

  Note that we will be working inside `shortenUrl()` for the remainder of this exercise.

- 3. Underneath the `urlToShorten` declaration, create another `const` variable named `data` and assign it to the stringified version of `{destination: urlToShorten}`. We can use the [`JSON.stringify()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to do this.

  The `data` variable will be used to send the information, which needs to be in string format, to the request body.

- 4. Below our `data` variable declaration, call the `fetch()` function. Pass `url` as its first argument and an empty object as its second argument.

- 5. Now it’s time to add some properties to the empty object that you just created. Add a property with the key `method` and the value `'POST'`.

- 6. In the same object, add another property. The key for this property is `headers` and the value will be the following object:

  ```
  {
  'Content-type': 'application/json',
  'apikey': apiKey
  }
  ```

- 7. In that same object that has the properties `method` and `headers`, add another property. The key is named `body` and the value will be `data`.

  We’ve now created an object containing all the information we need for our POST request!

# Part 2: Handling a Post Request

## The request returns a Promise which will either be resolved or rejected. If the promise resolves, we can check and return that response. We will chain another `.then()` method and handle the returned JSON object and display the information to our webpage.

- 1. Chain a `.then()` method at the end of the `fetch()` function we wrote in the previous exercise. As its first argument, pass an arrow function as a callback that takes `response` as its single parameter.

- 2. Inside the callback function of the `.then()` method, use a conditional statement to check the value of the `ok` property of `response`. If it evaluates to a truthy value, return `response.json()`.

  Run the code.

- 3. Below the curly braces of the conditional statement, throw a `new Error` in case `response.ok` is falsy.

  The error message should be **'Request failed!'**.

- 4. As the second argument of the `.then()` method, add another arrow callback function that takes `networkError` as a single parameter.

  Log the `networkError.message` inside of the callback function.

  By adding this second callback, you’re safeguarding yourself in the rare event that the network returns an error!

- 5. Chain another `.then()` method to the end of the previous `.then()` method.

- 6. Pass in an anonymous arrow function as an argument for our second `.then()`. This callback function will take `jsonResponse` as its single parameter.

  Inside the callback function, call `renderResponse()` and pass in `jsonResponse`.

  The `renderResponse()` helper function can be viewed at **public/helperFunctions.js**.

  Run the code.

  Put in any URL in the text field, and then click the shorten button on the webpage. Make sure you include the entire link, including **'http://'** or **'https://'**.

# Part 2: Making an async POST Request

## Instructions

- 1. At the top of main.js, assign `apiKey` to your Rebrandly API key.

- 2. The `fetch()` function should be inside the `try{}` statement, which should be inside the `shortenUrl()` function. In the `fetch()` function, pass in `url` as the first argument and an empty object as the second argument.

  In that empty object you just created, add the following three properties:

  - `method` with a value of `'POST'`
  - `body` with a value of `data`
  - `headers` with a value of the object below:

    ```
    {
      'Content-type': 'application/json',
      'apikey': apiKey
    }
    ```
