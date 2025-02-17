# YouTube Music Slack Status Extension

A Chrome extension that automatically updates your Slack status with the currently playing song from YouTube Music.

## Features

- 🎵 Real-time Slack status updates with current playing song
- 🎧 Custom headphones emoji for music status
- ✂️ Automatic truncation of long song titles
- 🔒 Secure token storage using Chrome's storage API

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/youtube-music-slack-extension.git
    ```
2. Open Chrome and navigate to chrome://extensions/
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Configuration

1. Get your Slack token:

- Go to your Slack API Apps
- Create a new app or select an existing one
- Navigate to "OAuth & Permissions"
- Copy your "User OAuth Token" (starts with xoxp-)


2. Configure the extension:

- Click the puzzle piece icon in Chrome to open Extensions
- Find "YouTube Music Slack Status" and click the three dots (...)
- Select "Options"
- Paste your Slack token and click "Save"

## Usage

1. Open YouTube Music
2. Play any song
3. Your Slack status will automatically update with the current playing track

## Required Permissions

- tabs: To detect YouTube Music tab
- scripting: To interact with YouTube Music page
- storage: To securely store Slack token
- Host permissions for YouTube Music and Slack API

## Development

### Project Structure

```bash
├── background.js
├── content.js
├── LICENSE
├── manifest.json
├── options.html
├── options.js
└── README.md
```

### Building from Source

1. Make your changes
2. Test locally using "Load unpacked"
3. Create a pull request with your changes

### Troubleshooting

- Ensure your Slack token has the correct permissions (users.profile:write)
- Check the Console in Chrome DevTools for any error messages
- Verify that the extension has access to YouTube Music

### Contributing

1. Fork the repository
2. Create your feature branch: git checkout -b feature/my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin feature/my-new-feature
5. Submit a pull request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to YouTube Music and Slack APIs
- Inspired by the need to share music with teammates