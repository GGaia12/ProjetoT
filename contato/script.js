const uploadFile = document.querySelector('.upload-file');

uploadFile.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadFile.style.backgroundColor = '#f9f9f944';
});

uploadFile.addEventListener('dragleave', () => {
  uploadFile.style.backgroundColor = '#f9f9f900';
});

uploadFile.addEventListener('drop', (e) => {
  e.preventDefault();
  const fileName = e.dataTransfer.files[0].name;
  const fileInput = document.querySelector('.inputfile');
  fileInput.files = e.dataTransfer.files;
  const fileNameText = uploadFile.querySelector('h3');
  fileNameText.textContent = fileName;
  uploadFile.style.backgroundColor = '#f9f9f900';
});

const inputfile = document.querySelector('.inputfile');
const label = inputfile.nextElementSibling;

label.addEventListener('click', () => {
  inputfile.click();
});

inputfile.addEventListener('change', () => {
  const fileName = inputfile.value.split('\\').pop();
  const fileNameText = uploadFile.querySelector('h3');
  fileNameText.textContent = fileName;
});
