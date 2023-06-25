// BEGIN
const pContent = (docEl) => {
    const paragraphs = Array.from(docEl.getElementsByTagName('p'));
    return paragraphs.map(p => p.textContent.trim());
}

export default pContent;
// END