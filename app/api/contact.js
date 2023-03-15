const submitForm = async (event) => {
  event.preventDefault();
  const res = await fetch('http://127.0.0.1:8090/api/send-message', {
    body: JSON.stringify({
      email: inputs.email,
      message: inputs.message
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  if (res.status === 200) {
    const result = await res.json();
    console.log(result);
    setSubmitted(true); // show success message
  } else {
    console.error(`Failed to send message: ${res.statusText}`);
  }
};
