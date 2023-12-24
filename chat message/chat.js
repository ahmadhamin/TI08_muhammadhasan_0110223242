function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageContainer = document.getElementById('message-container');

    var messageText = messageInput.value.trim();
    if (messageText !== '') {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = messageText;

        messageContainer.appendChild(messageDiv);

        // Clear the input field after sending the message
        messageInput.value = '';

        // Scroll to the bottom to show the latest message
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}