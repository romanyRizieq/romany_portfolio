const sendEmail = (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);
  const user_name = formData.get("name");
  const user_email = formData.get("email");
  const user_phone = formData.get("phone");
  const user_reason = form.current.querySelector("#user_reason").selectedOptions[0].text;
  let user_message = formData.get("message"); // Correctly get the message value

  // Fallback if `formData.get()` fails
  if (!user_message) {
    const messageElement = form.current.querySelector("#user_message");
    user_message = messageElement ? messageElement.value : null;
  }

  // Log all values for debugging
  console.log("Name: ", user_name);
  console.log("Email: ", user_email);
  console.log("Phone: ", user_phone);
  console.log("Reason: ", user_reason);
  console.log("Message: ", user_message); // Ensure this logs the correct value

  // Check if any field is missing or invalid
  if (!user_message || !user_name || !user_email || !user_phone || !user_reason) {
    Swal.fire({
      icon: "error",
      title: "Form Incomplete",
      text: "Please fill in all the fields before submitting.",
      confirmButtonColor: "#e53935",
    });
    return;
  }

  const templateParams = {
    user_name,
    user_email,
    user_phone,
    user_reason,
    user_message,
    current_time: currentTime,
  };

  // Send email via EmailJS
  emailjs
    .send("Romany_Rizieq", "Romany_RIzieq_Template", templateParams, "VfS4cEgX5DIbIBbA_")
    .then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#00bcd4",
        });
        form.current.reset(); // Reset the form after submission
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Message Failed!",
          text: `Failed to send message. Please try again. (${error.text})`,
          confirmButtonColor: "#e53935",
        });
      }
    );
};
