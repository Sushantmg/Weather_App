 
    const f_name = document.getElementById("f_name");
    const number = document.getElementById("number");
    const address = document.getElementById("address");
    const age = document.getElementById("age");

    async function formsubmit() {
      
      const f_nameval = f_name.value.trim();
      const numberval = number.value.trim();
      const addressval = address.value.trim();
      const ageval = age.value.trim();

      if ( !f_nameval || !numberval || !addressval || !ageval) {
        setError("Please fill in all fields.");
        return;
      }

      const payload = {
        f_name: f_nameval,
        number: numberval,
        address: addressval,
        afe: ageval
      };
console.log(payload)
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
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