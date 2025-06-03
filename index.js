// index.js import { useEffect, useRef, useState } from 'react'; import Head from 'next/head';

const songs = [ { title: 'NALELI OK', url: 'https://files.catbox.moe/bhnko2.mp3' }, { title: 'HOZANNA', url: 'https://files.catbox.moe/ys3iiy.mp3' }, { title: 'JUJU', url: 'https://files.catbox.moe/f5mqkm.mpeg' }, { title: 'TENSION SAVA', url: 'https://files.catbox.moe/k6568g.mp3' }, { title: 'EX BY ARCHIP', url: 'https://files.catbox.moe/737ilv.mp3' }, { title: 'UNA NI WEKA JUU', url: 'https://files.catbox.moe/b6azvf.mp3' }, { title: 'DOUX', url: 'https://files.catbox.moe/nfo0t6.mp3' }, { title: 'TETE', url: 'https://files.catbox.moe/p0362e.mp3' }, { title: 'MA VIE', url: 'https://files.catbox.moe/fpyppv.mp3' }, { title: 'BIZU', url: 'https://files.catbox.moe/qitn47.mp3' }, { title: 'SEMA', url: 'https://files.catbox.moe/eivr1f.mp3' }, { title: 'SHASHA', url: 'https://files.catbox.moe/2kanlp.mp3' }, { title: 'WAKATI', url: 'https://files.catbox.moe/xnum78.mp3' }, { title: 'SUBIRI', url: 'https://files.catbox.moe/fgeyby.mpeg' }, { title: 'MBELE', url: 'https://files.catbox.moe/xcuhbb.mpeg' }, { title: 'HAPPY', url: 'https://files.catbox.moe/af5kx3.mpeg' }, { title: 'SEMA', url: 'https://files.catbox.moe/8riqqu.mpeg' } ];

export default function Home() { const audioRef = useRef(null); const [currentIndex, setCurrentIndex] = useState(0); const [progress, setProgress] = useState(0);

useEffect(() => { const audio = audioRef.current; if (audio) { audio.play(); const handleEnded = () => { const nextIndex = (currentIndex + 1) % songs.length; setCurrentIndex(nextIndex); }; const handleTimeUpdate = () => { setProgress((audio.currentTime / audio.duration) * 100); }; audio.addEventListener('ended', handleEnded); audio.addEventListener('timeupdate', handleTimeUpdate); return () => { audio.removeEventListener('ended', handleEnded); audio.removeEventListener('timeupdate', handleTimeUpdate); }; } }, [currentIndex]);

return ( <> <Head> <title>LikoDIOS Music - ARCHIP ROMEO</title> </Head> <div className="min-h-screen relative overflow-hidden bg-black text-white"> <div className="absolute inset-0 z-0"> <img src="https://files.catbox.moe/p70uwy.jpg" alt="background" className="w-full h-full object-cover opacity-60" style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }} /> <div className="absolute inset-0 bg-blue-900 opacity-30 mix-blend-lighten animate-pulse" /> <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-b from-cyan-400 to-indigo-700 opacity-50 animate-pulse" /> <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-b from-pink-500 to-purple-800 opacity-50 animate-pulse" /> <div className="absolute inset-0 animate-pulse"> <div className="absolute w-4 h-4 rounded-full bg-white opacity-30 animate-bounce left-1/4 top-1/3"></div> <div className="absolute w-3 h-3 rounded-full bg-white opacity-20 animate-bounce left-2/3 top-1/2"></div> <div className="absolute w-2 h-2 rounded-full bg-white opacity-10 animate-bounce left-1/2 top-3/4"></div> </div> </div>

<main className="relative z-10 p-6 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center animate-pulse">🎵 ARCHIP ROMEO - LikoDIOS Music 🎶</h1>

      <div className="bg-black bg-opacity-40 p-4 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Now Playing: {songs[currentIndex].title}</h2>
        <audio ref={audioRef} src={songs[currentIndex].url} autoPlay controls className="w-full mb-4" />
        <div className="w-full h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-green-400 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <a
          href={songs[currentIndex].url}
          download
          className="block mt-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          ⬇️ Download {songs[currentIndex].title}
        </a>
      </div>
    </main>
  </div>
</>

); }

  
