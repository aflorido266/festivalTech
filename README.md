# 🎉 Festival Tech del Futuro

Proyecto web desarrollado como práctica de integración de **XML, DTD y JavaScript**, donde se muestra información dinámica de un evento tecnológico.

---

## 📌 Descripción

El sitio web representa un festival tecnológico en la ciudad de Gijón.
Los datos del evento (nombre, fecha, actividades, contacto, etc.) se almacenan en un archivo **XML** validado mediante una **DTD**, y se muestran en la web utilizando **JavaScript y manipulación del DOM**.

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (DOM)
* XML
* DTD
* Git y GitHub Pages

---

## ⚙️ Funcionamiento

1. El archivo `festival.xml` contiene toda la información del evento.
2. La `festival.dtd` valida la estructura del XML.
3. El archivo `festival.js`:

   * Carga el XML con `fetch()`
   * Lo convierte en un documento DOM
   * Extrae los datos
   * Los inserta dinámicamente en el HTML
4. El `index.html` muestra la información en pantalla.
5. El diseño se aplica con `style.css`.

---

## 📁 Estructura del proyecto

```bash
festivalTech/
│── index.html
│── style.css
│── festival.js
│── festival.xml
│── festival.dtd
└── assets/
```

---

## 🚀 Demo

👉 https://aflorido266.github.io/festivalTech/

---

## 💡 Características destacadas

* Carga dinámica de datos sin recargar la página
* Separación de contenido (XML) y presentación (HTML/CSS)
* Validación estructural mediante DTD
* Uso de JavaScript para manipulación del DOM

---

## 🧠 Aprendizajes

Durante el desarrollo de este proyecto se trabajó en:

* Consumo de datos externos con `fetch()`
* Manipulación del DOM
* Uso de XML como fuente de datos
* Validación con DTD
* Publicación de proyectos en GitHub Pages

---

## 👩‍💻 Autor

Ada Florido
Proyecto académico - 2026

---
