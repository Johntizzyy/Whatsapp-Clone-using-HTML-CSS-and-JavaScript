const input = document.getElementById("chatInput");
const send = document.getElementById("send");
const back = document.getElementById("back");
const leftside = document.getElementById("leftSide");
const rightside = document.getElementById("rightSide");

window.addEventListener("DOMContentLoaded", () => {
  back.addEventListener("click", () => {
    showLefside();
  });

  // function swipeRight() {
  //   if (touchendX > touchstartX + 50) {
  //     rightside.style.flex = "100%";
  //     rightside.style.display = "block";
  //     leftside.style.display = "none";
  //     rightside.style.transform = "translateX(100px)";
  //   }
  // }

  // rightside.addEventListener("touchstart", (event) => {
  //   touchstartX = event.changedTouches[0].screenX; // Get starting touch position
  // });

  // rightside.addEventListener("touchend", (event) => {
  //   touchendX = event.changedTouches[0].screenX; // Get ending touch position
  //   swipeRight(); // Check the swipe direction
  // });

  function showLefside() {
    leftside.style.flex = "100%";
    leftside.style.display = "block";
    rightside.style.display = "none";
  }

  const today = new Date();
  let Hour = today.getHours();
  let min = today.getMinutes();
  let time = `${Hour}:${min}`;
  let sentTime = 0;
  const chatBx = document.getElementById("chatBx");

  const sendMessage = () => {
    sentTime += 1;
    if (input.value == "") {
      return "";
    } else {
      if (sentTime % 2 === 0) {
        myMessage();
      } else if (sentTime % 2 !== 0) {
        frndMessage();
      }
    }

    // Log the chat container (optional)
  };

  send.addEventListener("click", () => {
    sendMessage();
    scrollToBottom();
  });

  function scrollToBottom() {
    chatBx.scrollTop = chatBx.scrollHeight;
  }

  // Clear the input field when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    input.value = "";
  });

  const myMessage = () => {
    // Create a new chat message container
    const chatBx = document.getElementById("chatBx");
    // chatBx.id = "chatBx";

    // Create a message div
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "my_message");

    // Get the input value (assuming 'input' is defined elsewhere in your code)
    const inputValue = input.value;

    // Create a paragraph element for the message text
    const messageText = document.createElement("p");
    messageText.textContent = inputValue; // Display the input value

    // Create a timestamp span (you can customize this as needed)
    const timestamp = document.createElement("span");
    timestamp.textContent = time; // Set the timestamp value

    //creating  a breaking tag
    const br = document.createElement("br");
    //Appending the br tag to the message Div
    messageText.appendChild(br);

    // Append the timestamp to the message text

    messageText.appendChild(timestamp);

    // Append the message text to the message div
    messageDiv.appendChild(messageText);

    // Append the message div to the chat container
    chatBx.appendChild(messageDiv);
    input.value = "";

    scrollToBottom();

    // Append the chat container to the body (or any other parent element)
    // document.body.appendChild(chatBx);
  };

  const frndMessage = () => {
    // Create a new chat message container
    const chatBx = document.getElementById("chatBx");
    // chatBx.id = "chatBx";

    // Create a message div
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "frnd_message");

    // Get the input value (assuming 'input' is defined elsewhere in your code)
    const inputValue = input.value;

    // Create a paragraph element for the message text
    const messageText = document.createElement("p");
    messageText.textContent = inputValue; // Display the input value

    // Create a timestamp span (you can customize this as needed)
    const timestamp = document.createElement("span");
    timestamp.textContent = time; // Set the timestamp value

    //creating  a breaking tag
    const br = document.createElement("br");
    //Appending the br tag to the message Div
    messageText.appendChild(br);

    // Append the timestamp to the message text

    messageText.appendChild(timestamp);

    // Append the message text to the message div
    messageDiv.appendChild(messageText);

    // Append the message div to the chat container
    chatBx.appendChild(messageDiv);
    scrollToBottom();
    input.value = "";

    // Append the chat container to the body (or any other parent element)
    // document.body.appendChild(chatBx);
  };

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  const chatBox = document.querySelector(".chatBox");
  let chatInput = document.querySelector(".chat-input");

  const firstChat = () => {
    chatBox.style.display = "none";
  };
});
