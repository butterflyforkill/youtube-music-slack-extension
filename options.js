document.getElementById('save').addEventListener('click', () => {
    const token = document.getElementById('slackToken').value;
    chrome.storage.sync.set({
        slackToken: token
    }, () => {
        const status = document.getElementById('status');
        status.textContent = 'Settings saved.';
        setTimeout(() => {
            status.textContent = '';
        }, 2000);
    });
});

// Load saved token
chrome.storage.sync.get('slackToken', (data) => {
    if (data.slackToken) {
        document.getElementById('slackToken').value = data.slackToken;
    }
});