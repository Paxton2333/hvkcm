document.addEventListener('DOMContentLoaded', () => {
    const interactionButton = document.getElementById('interactionButton');
    const musicPlayer = document.getElementById('musicPlayer');
    const closeButton = document.getElementById('closeMusicPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const progressBar = document.getElementById('musicProgressBar');
    const audioElement = document.createElement('audio');

    // Tech-themed tracks
    const tracks = [
        { 
            title: "Industrial Hero", 
            artist: "三角洲行动", 
            emoji: "🤖", // Robot emoji for tech feel
            icon: "🎚️", 
            src: "/industrialhero.mp3"  
        }
    ];

    let currentTrackIndex = 0;
    let isPlaying = false;

    // Set up audio element
    audioElement.src = tracks[currentTrackIndex].src;

    interactionButton.addEventListener('click', () => {
        interactionButton.style.display = 'none';
        musicPlayer.style.display = 'flex';
        
        // Automatically start playing when music player opens
        audioElement.play();
        isPlaying = true;
        playPauseButton.textContent = '⏸️';
    });

    closeButton.addEventListener('click', () => {
        musicPlayer.style.display = 'none';
        interactionButton.style.display = 'flex';
        audioElement.pause();
        isPlaying = false;
        playPauseButton.textContent = '▶️';
    });

    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            audioElement.pause();
            playPauseButton.textContent = '▶️';
        } else {
            audioElement.play();
            playPauseButton.textContent = '⏸️';
        }
        isPlaying = !isPlaying;
    });

    // Update progress bar
    audioElement.addEventListener('timeupdate', () => {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Auto-play next track when current track ends
    audioElement.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        updateTrackDisplay();
        audioElement.play();
    });

    prevButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        updateTrackDisplay();
        if (isPlaying) {
            audioElement.play();
        }
    });

    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        updateTrackDisplay();
        if (isPlaying) {
            audioElement.play();
        }
    });

    function updateTrackDisplay() {
        const track = tracks[currentTrackIndex];
        document.getElementById('musicAlbum').textContent = track.icon; // Use new icon
        document.getElementById('musicTitle').textContent = track.title;
        document.getElementById('musicArtist').textContent = track.artist;
        
        audioElement.src = track.src;
        
        // Reset play state
        if (isPlaying) {
            audioElement.play();
        }
    };

    updateTrackDisplay();
});