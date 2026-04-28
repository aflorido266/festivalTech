fetch("festival.xml")
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml");

    // 🟢 DATOS PRINCIPALES
    document.getElementById("titulo").textContent =
      xml.querySelector("nombre").textContent;

    document.getElementById("ciudad").textContent =
      "📍 " + xml.querySelector("ciudad").textContent;

    document.getElementById("fecha").textContent =
      "📅 " + xml.querySelector("fecha").textContent;

    document.getElementById("lugar").textContent =
      "📌 " + xml.querySelector("lugar").textContent;

     document.getElementById("email").textContent =
     xml.querySelector("email").textContent;

    document.getElementById("telefono").textContent =
    xml.querySelector("telefono").textContent;
    // 🟣 ACTIVIDADES
    const actividades = xml.querySelectorAll("actividad");
    const contenedor = document.getElementById("lista-actividades");

    actividades.forEach(act => {
      const titulo = act.querySelector("titulo").textContent;
      const descripcion = act.querySelector("descripcion").textContent;
      const hora = act.querySelector("hora").textContent;
      const precio = act.querySelector("precio").textContent;

      const div = document.createElement("div");
      div.classList.add("actividad");

      div.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <p>⏰ Hora: ${hora}</p>
        <p>💰 Precio: ${precio}</p>
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error cargando el XML:", error);
  });