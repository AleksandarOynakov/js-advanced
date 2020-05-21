function solve() {
   document.getElementById('send').addEventListener('click', send);

   function send() {
      let currentMessage = document.getElementById('chat_input');
      if (currentMessage.value.length > 0) {
         let newDiv = document.createElement('div');
         newDiv.setAttribute('class', 'message my-message');
         newDiv.textContent = currentMessage.value;
         document.getElementById('chat_messages').appendChild(newDiv);
         currentMessage.value = '';
      }
   }
}


