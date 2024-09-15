document.getElementById('copyButton').addEventListener('click', () => {
  
    const text = document.getElementById('textToCopy').innerText;
  
    navigator.clipboard.writeText(text)
    
  });
  