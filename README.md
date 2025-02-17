<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
  <!-- Background Circle -->
  <circle cx="64" cy="64" r="60" fill="#4A154B"/>
  
  <!-- Slack-inspired hash pattern -->
  <g fill="#FFFFFF" opacity="0.9">
    <rect x="35" y="45" width="25" height="8" rx="4"/>
    <rect x="68" y="45" width="25" height="8" rx="4"/>
    <rect x="35" y="75" width="25" height="8" rx="4"/>
    <rect x="68" y="75" width="25" height="8" rx="4"/>
  </g>
  
  <!-- Music Note -->
  <path d="M60 30v35.5c-1.5-0.8-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10V40h10" 
        fill="none" 
        stroke="#FFFFFF" 
        stroke-width="6" 
        stroke-linecap="round"
        stroke-linejoin="round"/>
</svg>

![extension-logo](https://github.com/user-attachments/assets/09428357-9924-467d-bafb-0a5c7a76407c)

# YouTube Music Slack Status Extension

A Chrome extension that automatically updates your Slack status with the currently playing song from YouTube Music.

## Features

- 🎵 Real-time Slack status updates with current playing song
- 🎧 Custom headphones emoji for music status
- ✂️ Automatic truncation of long song titles
- 🔒 Secure token storage using Chrome's storage API

## Latest release
https://github.com/butterflyforkill/youtube-music-slack-extension/releases/tag/v2.0.0

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
