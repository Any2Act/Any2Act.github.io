const players = Array.from(document.querySelectorAll(".player"));

for (const player of players) {
  const video = player.querySelector("video");
  const button = player.querySelector(".play");
  video.controls = false;

  button.addEventListener("click", () => {
    player.classList.add("started");
    video.controls = true;
    video.play().catch(() => {
      video.focus();
    });
  });

  video.addEventListener("play", () => {
    for (const other of players) {
      if (other !== player) {
        other.querySelector("video").pause();
      }
    }
  });
}

document.documentElement.classList.add("js");
