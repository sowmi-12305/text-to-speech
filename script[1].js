async function convertTextToSpeech() {
  const text = document.getElementById("text").value;
  const response = await fetch('/speak', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });

  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const audio = document.getElementById("audio");
    audio.src = url;
    audio.style.display = "block";
    audio.play();
  } else {
    alert("Error generating speech.");
  }
}
