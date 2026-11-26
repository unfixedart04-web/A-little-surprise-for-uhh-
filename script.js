const openButton = document.getElementById('openButton');
const playButton = document.getElementById('playButton');
const audio = document.getElementById('birthdayAudio');
const playIcon = document.getElementById('playIcon');
const playText = document.getElementById('playText');
const musicHint = document.getElementById('musicHint');
const vinyl = document.querySelector('.vinyl');

openButton.addEventListener('click', () => {
  document.getElementById('wish').scrollIntoView({behavior:'smooth'});
  sparkleBurst();
});

playButton.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      playIcon.textContent = 'Ⅱ';
      playText.textContent = 'Pause soundtrack';
      musicHint.textContent = 'Now playing for Sania ✦';
      vinyl.classList.add('playing');
    } catch (err) {
      musicHint.textContent = 'Could not play the audio. Check that the music file is uploaded.';
    }
  } else {
    audio.pause();
    playIcon.textContent = '▶';
    playText.textContent = 'Play birthday soundtrack';
    musicHint.textContent = 'Music paused.';
    vinyl.classList.remove('playing');
  }
});

audio.addEventListener('ended', () => {
  playIcon.textContent = '▶';
  playText.textContent = 'Play birthday soundtrack';
  vinyl.classList.remove('playing');
});

document.getElementById('wishButton').addEventListener('click', () => {
  document.getElementById('finalMessage').textContent = 'May the universe surprise you with something wonderful. ✨';
  sparkleBurst();
});

function sparkleBurst() {
  const symbols = ['✦','✧','♡','✳'];
  for (let i=0;i<24;i++) {
    const s=document.createElement('span');
    s.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    Object.assign(s.style,{position:'fixed',left:Math.random()*100+'vw',top:(45+Math.random()*45)+'vh',zIndex:10,pointerEvents:'none',color:'#e6c9f5',fontSize:(12+Math.random()*17)+'px',transition:'transform 2.4s ease, opacity 2.4s ease'});
    document.body.appendChild(s);
    requestAnimationFrame(()=>{s.style.transform=`translateY(-${120+Math.random()*220}px) rotate(${Math.random()*160}deg)`;s.style.opacity='0'});
    setTimeout(()=>s.remove(),2500);
  }
}
