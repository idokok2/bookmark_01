function openTextFile() {
  var input = document.createElement("input");

  console.log(input);
  input.type = "file";
  // html일 경우 text/html로
  input.accept = "text/plain, text/html, .jsp";

  input.click();
  input.onchange = function (event) {
    processFile(event.target.files[0]);
  };
}

function processFile(file) {
  var reader = new FileReader();
  reader.readAsText(file, "euc-kr");

  reader.onload = function () {
    output.innerText = reader.result;
  };
}

