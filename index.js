document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio-player");
  const titleDisplay = document.getElementById("song-title");
  let currentIndex = 0;

  // Static playlist from your provided links and titles
  const playlist = [
    { title: "NALELI OK", url: "https://files.catbox.moe/bhnko2.mp3" },
    { title: "HOZANNA", url: "https://files.catbox.moe/ys3iiy.mp3" },
    { title: "JUJU", url: "https://files.catbox.moe/f5mqkm.mpeg" },
    { title: "TENSION SAVA", url: "https://files.catbox.moe/k6568g.mp3" },
    { title: "EX BY ARCHIP", url: "https://files.catbox.moe/737ilv.mp3" },
    { title: "UNA NI WEKA JUU", url: "https://files.catbox.moe/b6azvf.mp3" },
    { title: "DOUX", url: "https://files.catbox.moe/nfo0t6.mp3" },
    { title: "TETE", url: "https://files.catbox.moe/p0362e.mp3" },
    { title: "MA VIE", url: "https://files.catbox.moe/fpyppv.mp3" },
    { title: "BIZU", url: "https://files.catbox.moe/qitn47.mp3" },
    { title: "SEMA", url: "https://files.catbox.moe/eivr1f.mp3" },
    { title: "SHASHA", url: "https://files.catbox.moe/2kanlp.mp3" },
    { title: "WAKATI", url: "https://files.catbox.moe/xnum78.mp3" },
    { title: "SUBIRI", url: "https://files.catbox.moe/fgeyby.mpeg" },
    { title: "MBELE", url: "https://files.catbox.moe/xcuhbb.mpeg" },
    { title: "HAPPY", url: "https://files.catbox.moe/af5kx3.mpeg" },
    { title: "SEMA", url: "https://files.catbox.moe/8riqqu.mpeg" }
  ];

  // Load and play a song at a given index
  function loadSong(index) {
    const song = playlist[index];
    if (!song) return;

    audio.src = song.url;
    audio.play().catch((err) => {
      console.warn("Autoplay prevented:", err);
    });

    titleDisplay.textContent = `🎶 Now Playing: ${song.title}`;
  }

  // Automatically go to the next song
  audio.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadSong(currentIndex);
  });

  // Start playing first song
  loadSong(currentIndex);
});
