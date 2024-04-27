const input = document.getElementById("chatInput");
const send = document.getElementById("send");

const today = new Date();
let Hour = today.getHours();
let min = today.getMinutes();
let time = `${Hour}:${min}`;
console.log(time);
let sentTime = 0;
const chatBx = document.getElementById("chatBx");

// let chatBox = document.createElement("div"); //document.getElementById('chatBx')
// let div = document.createElement("div");
// let p = (div.textContent = document.createElement("p"));

//   div.setAttribute("class", "message my_message");
//   chatBox.setAttribute("class", "chatBox");

//   p.setAttribute("class", "message my_message");
//   console.log(div);

const sendMessage = () => {
  sentTime += 1;
  console.log(sentTime);
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
  console.log(chatBx);
};

send.addEventListener("click", () => {
  sendMessage();
  scrollToBottom()

});

function scrollToBottom() {
  // var chatMessages = document.getElementById("chat-messages");
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
  if(event.key === "Enter"){
    sendMessage()
  }
});

  const chatBox = document.querySelector('.chatBox')
let chatInput = document.querySelector(".chat-input")
// chatBox.style.display = 'none'
console.log(chatInput)
console.log(chatBox)

const firstChat = () => {


  chatBox.style.display = 'none'
}