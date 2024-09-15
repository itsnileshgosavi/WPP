document.getElementById('copyButton').addEventListener('click', function () {
    var text = document.getElementById('textToCopy').innerText;
    navigator.clipboard.writeText(text);
});
