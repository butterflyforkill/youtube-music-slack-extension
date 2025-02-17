const MAX_STATUS_LENGTH = 100;

async function getSlackToken() {
    return new Promise((resolve) => {
        chrome.storage.sync.get('slackToken', (data) => {
            resolve(data.slackToken);
        });
    });
}

async function updateSlackStatus(songInfo) {
    try {
        const token = await getSlackToken();
        if (!token) {
            console.error('Slack token not found. Please configure it in extension options.');
            return;
        }

        let statusText = `▶️ ${songInfo.title} - ${songInfo.artist}`;
        if (statusText.length > MAX_STATUS_LENGTH) {
            statusText = statusText.substring(0, MAX_STATUS_LENGTH - 3) + '...';
        }

        const response = await fetch('https://slack.com/api/users.profile.set', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profile: {
                    status_text: statusText,
                    status_emoji: ":headphones:",
                    status_expiration: 0
                }
            })
        });
        
        const data = await response.json();
        if (!data.ok) {
            console.error('Slack API error:', data.error);
            return;
        }
        console.log('Slack status updated successfully');
    } catch (error) {
        console.error('Error updating Slack status:', error);
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Received message:', message);
    if (message.type === 'SONG_CHANGED') {
        updateSlackStatus(message.song);
    }
    return true;
});