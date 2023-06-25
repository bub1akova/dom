// BEGIN
export default () => {
    const elements = document.getElementsByTagName('div');

    for (const element of Array.from(elements)) {
    const childNodes = element.childNodes;

    for (const node of Array.from(childNodes)) {
      if (node instanceof Text) {
        const trimmedText = node.textContent.trim();

        if (trimmedText !== '') {
          const paragraphElement = document.createElement('p');
          paragraphElement.textContent = trimmedText;
          node.replaceWith(paragraphElement);
        }
      }
    }
  }
}
// END