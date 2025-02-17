let currentSong = '';

function checkForSongChange() {
    try {
        const songElement = document.querySelector('.title.style-scope.ytmusic-player-bar');
        const artistElement = document.querySelector('.byline.style-scope.ytmusic-player-bar');
        
        if (songElement && artistElement) {
            const newSong = `${songElement.textContent} - ${artistElement.textContent}`;
            
            if (newSong !== currentSong) {
                currentSong = newSong;
                try {
                    chrome.runtime.sendMessage({ 
                        type: 'SONG_CHANGED',
                        song: {
                            title: songElement.textContent,
                            artist: artistElement.textContent
                        }
                    });
                } catch (e) {
                    // If extension context is invalid, stop checking
                    if (e.message.includes('Extension context invalidated')) {
                        clearInterval(checkInterval);
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error checking for song change:', error);
    }
}

// Check every second for changes
const checkInterval = setInterval(checkForSongChange, 1000);