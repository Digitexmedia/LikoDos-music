document.addEventListener("DOMContentLoaded", () => {
  const playlistKey = "archipPlaylist";

  // Elements
  const form = document.getElementById("song-form");
  const urlInput = document.getElementById("song-url");
  const titleInput = document.getElementById("song-title");
  const songList = document.getElementById("song-list");

  // Load playlist from localStorage or default
  let playlist = JSON.parse(localStorage.getItem(playlistKey)) || [
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

  // Render playlist on admin page
  function renderPlaylist() {
    songList.innerHTML = "";
    playlist.forEach((song, index) => {
      const li = document.createElement("li");
      li.className = "mb-2 flex justify-between items-center";

      const songInfo = document.createElement("span");
      songInfo.textContent = `${index + 1}. ${song.title} `;
      li.appendChild(songInfo);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700";
      removeBtn.addEventListener("click", () => {
        playlist.splice(index, 1);
        savePlaylist();
        renderPlaylist();
      });
      li.appendChild(removeBtn);

      songList.appendChild(li);
    });
  }

  // Save playlist to localStorage
  function savePlaylist() {
    localStorage.setItem(playlistKey, JSON.stringify(playlist));
  }

  // Add new song from form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = urlInput.value.trim();
    const title = titleInput.value.trim();

    if (!url || !title) {
      alert("Please provide both song URL and title.");
      return;
    }

    playlist.push({ title, url });
    savePlaylist();
    renderPlaylist();

    urlInput.value = "";
    titleInput.value = "";
  });

  renderPlaylist();
});
