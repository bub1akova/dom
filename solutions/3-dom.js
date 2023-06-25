// BEGIN
function contentToP() {
    const bodyContent = document.body.innerHTML.trim();
    const lines = bodyContent.split('\n');
    document.body.innerHTML = '';
    lines.forEach(line => {
        const paragraph = document.createElement('p');
        paragraph.textContent = line.trim();
        document.body.appendChild(paragraph);
    });
}

contentToP();
// END