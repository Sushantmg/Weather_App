
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

async function formsubmit() {
  
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const passwordval = password.value.trim();

  if ( !usernameval || !emailval || !passwordval) {
    setError("Please fill in all fields.");
    return;
  }

  const payload = {
    id: 0,
    username: usernameval,
    email: emailval,
    password: passwordval
  };
console.log(payload)
  try {
    const res = await fetch('https://fakestoreapi.com/users', {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!res.ok) {
      throw new Error("Failed to post data");
    }

    const data = await res.json();
    alert("Data has been added! New ID: " + data.id);
    console.log(data);
    setError(""); // Clear any previous errors
  } catch (err) {
    alert(err);
    console.error(err);
    setError("Something went wrong while submitting the form.");
  }
}

function setError(errorMessage) {
  document.getElementById("error-div").innerText = errorMessage;
}