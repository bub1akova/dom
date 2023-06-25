import escapeHtml from 'escape-html';

// BEGIN
export default () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formContent = e.target;
        const data = new FormData(formContent);
        const email = escapeHtml(data.get('email'));
        const name = escapeHtml(data.get('name'));
        const comment = escapeHtml(data.get('comment'));
        
        const feedbackContainer = document.createElement('div');
        feedbackContainer.innerHTML = `
            <p>Feedback has been sent</p>
            <div>Email: ${email}</div>
            <div>Name: ${name}</div>
            <div>Comment: ${comment}</div>
        `;
        
        form.parentNode.replaceChild(feedbackContainer, form);
    })
}
// END