const deadline = new Date("2026-05-08T23:59:59+02:00").getTime();

const units = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

const message = document.querySelector("#message");

function pad(value) {
  return String(value).padStart(2, "0");
}

function getMessage(days, hours) {
  if (days > 3) return "Aun parece que queda mucho. Esa mentira os va a salir cara.";
  if (days > 1) return "A estas alturas el proyecto deberia tener juego, no solo esperanza.";
  if (days === 1) return "Queda un dia. El pinguino ya no juzga: sentencia.";
  if (hours > 3) return "Queda menos de un dia. El pinguino huele commits hechos con miedo.";
  return "Modo panico elegante: guardad, rezad y subid algo que compile.";
}

function updateCountdown() {
  const now = Date.now();
  const remaining = Math.max(0, deadline - now);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  units.days.textContent = pad(days);
  units.hours.textContent = pad(hours);
  units.minutes.textContent = pad(minutes);
  units.seconds.textContent = pad(seconds);

  if (remaining === 0) {
    message.textContent = "Tiempo agotado. El pinguino no acepta excusas, solo builds.";
    document.body.classList.add("finished");
    return;
  }

  message.textContent = getMessage(days, hours);
}

updateCountdown();
setInterval(updateCountdown, 1000);
