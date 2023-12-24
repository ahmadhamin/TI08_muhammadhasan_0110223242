function displayImage() {
    var imageSelector = document.getElementById('imageSelector');
    var selectedImage = imageSelector.value;

    var imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.innerHTML = `<img src="${selectedImage}" alt="Selected Image" width="300">`;

    var imageInfo = document.getElementById('imageInfo');
    imageInfo.textContent = `Selected Image: ${selectedImage}`;
}