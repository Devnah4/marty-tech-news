// handles the actual submission of a signup
async function signupFormHandler(event) {
  event.preventDefault();

  //  pulls the values from the form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // requires all the info to allow the POST to be made
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { "Content-Type": "application/json" }
    });
    // Checks the response status
    if (response.ok) {
      console.log('success');
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

//   adds the event listener for the click
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
