// =====================================================
// Async/Await + Fetch: Joke Button Assignment
// =====================================================

/*
🧠 Example: How async/await works with fetch
This function fetches a cat fact from an API and logs it.
*/
async function exampleFetch() {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();
  console.log("Example cat fact:", data.fact);
}

// Call the example (uncomment to test it)
// exampleFetch();

/* =====================================================
📝 Your Task:

Write an async function called getJoke().
This function will run when the "Tell Me a Joke" button is clicked.

Use the API: https://official-joke-api.appspot.com/random_joke

1. Fetch the joke data from the API

2. Use await to wait for the response
3. Parse the response with .json()
4. Display the setup and punchline in the HTML

BONUS: Add error handling with try...catch
===================================================== */

// STEP 1: Add the event listener for the button
document.getElementById('getJoke').addEventListener('click', getJoke);

// STEP 2: Define the async function
async function getJoke() {
  // STEP 3: Use try...catch to handle errors
  try {
    // STEP 4: Fetch the data from the Joke API
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');

    // STEP 5: Parse the JSON data
    const data = await response.json();

    // STEP 6: Update the DOM with the joke
    document.getElementById('jokeSetup').innerText = data.setup;
    document.getElementById('jokePunchline').innerText = data.punchline;

  } catch (error) {
    // STEP 7: Handle errors (if the fetch fails)
    document.getElementById('jokeSetup').innerText = "Oops! Couldn't fetch a joke.";
    document.getElementById('jokePunchline').innerText = "";
    console.error("Fetch error:", error);
  }
}
