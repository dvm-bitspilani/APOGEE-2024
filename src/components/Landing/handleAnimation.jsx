
export function handleAnimation(snap) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const target = document.querySelector("#ham-menu-button span");
  let iteration = 0;

  // console.log("state.targetSection", snap.targetSection);
  const finalWord =
    snap.isHamOpen || snap.targetSection !== 0 ? "Home" : "Menu";

  clearInterval(target.interval);

  target.interval = setInterval(() => {
    target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return finalWord[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= finalWord.length) {
      clearInterval(target.interval);
    }

    iteration += 1 / 3;
  }, 50);
}
