const handleButtonClick = () => {
  createModal();
};

const searchInfo = (id) => {
  const infoEncontrada = botones.find((boton) => boton.id === id);

  if (infoEncontrada) {
    createModal(infoEncontrada);
  }
};

const createModal = (info) => {
  console.log(info.titulo);
  ventanaInfo.innerHTML = `
  <div id="ventana__content">
  <span id="ventana__btnCerrar">X</span>
  <img class="ventana__logo" src="./assets/img/logo.png" alt="logo de ad23rothers">
  <h2 id="ventana__title">${info.titulo}</h2>
  <p id="ventana__description">${info.texto}</p>
  </div>
`;
  ventanaInfo.classList.remove("ocultar__ventana");
  const btnClose = document.getElementById("ventana__btnCerrar");

  btnClose.addEventListener("click", () => {
    ventanaInfo.classList.add("ocultar__ventana");
  });
};

const botones = [
  {
    id: "serviceBtn1",
    titulo: "Administracion de Redes Sociales",
    texto:
      "En AD23ROTHERS publicidad digital le ofrecemos servicio de administración de redes sociales para ayudar a los negocios o emprendimientos a mantener una presencia en Internet efectiva y constante. Desde la creación de contenido hasta la gestión de publicaciones y la interacción con sus clientes, nuestro equipo está capacitado para manejar todas las necesidades de las redes sociales de nuestros clientes. Nos aseguramos de que el mensaje sea coherente con la marca y de que se llegue al público de manera efectiva. Contáctenos para más información sobre nuestros servicios de administración de redes sociales.",
  },
  {
    id: "serviceBtn2",
    titulo: "Aplicaciones Web",
    texto:
      "En AD23ROTHERS publicidad digital podemos ofrecerte algunas sugerencias y consejos para que puedas desarrollar y utilizar una aplicación móvil efectiva. Es importante que definas claramente los objetivos y las características de la aplicación y que hagas una investigación de mercado para conocer las necesidades de tu cliente objetivo. Además, debes asegurarte de que la aplicación sea fácil de usar y que tenga una interfaz intuitiva. para mejorar la experiencia del usuario y el rendimiento de la aplicación.",
  },
  {
    id: "serviceBtn3",
    titulo: "Creación de Logotipos",
    texto:
      "En AD23ROTHERS publicidad digital ofrecemos servicio de creación de logotipos. Diseñaremos un logotipo que represente su marca de manera efectiva y atractiva. Juntos, podemos discutir sus ideas y necesidades para crear un diseño único y personalizado que refleje la identidad de su negocio o emprendimiento. ",
  },
  {
    id: "serviceBtn4",
    titulo: "Creacion de Paginas Web",
    texto:
      "En AD23ROTHERS publicidad digital ofrecemos servicio de creación de páginas web. Podemos diseñar y desarrollar una página web personalizada para satisfacer las necesidades de su negocio o emprendimiento. Utilizamos las últimas tecnologías y técnicas de diseño para asegurarnos de que su sitio web sea moderno, funcional y atractivo. Además, podemos asegurar de que su sitio web sea fácil de navegar y que se ajuste a las necesidades de sus clientes. ",
  },
  {
    id: "serviceBtn5",
    titulo: "Edición de Foto y Video",
    texto:
      "En AD23ROTHERS publicidad digital ofrecemos servicio de edición de foto y video que le permitirá mejorar la calidad de sus imágenes y clips. Nuestro equipo de expertos se encargará de ajustar la iluminación, el color y la composición para lograr un resultado impresionante. Además, podemos agregar efectos especiales, transiciones y música para crear un video profesional y atractivo. No dudes en contáctenos para obtener más información sobre cómo podemos ayudarte a mejorar tus proyectos audiovisuales.",
  },
  {
    id: "serviceBtn6",
    titulo: "Publicidad en Redes Sociales",
    texto:
      "En AD23ROTHERS publicidad digital ofrecemos servicio de publicidad en redes sociales para ayudarte a promocionar tu negocio o emprendimiento en Internet. Utilizamos estrategias efectivas de marketing para llegar a sus clientes objetivos y aumentar la visibilidad de su marca en las plataformas más populares, como Facebook, Instagram, TikTok, YouTube y Twitter. También podemos proporcionarle informes regulares para que pueda medir el éxito de sus campañas publicitarias en línea. Contáctenos para obtener más información sobre cómo podemos ayudarle a hacer crecer su presencia en Internet.",
  },
  {
    id: "serviceBtn7",
    titulo: "Marketing Digital",
    texto:
      " El servicio de marketing digital se enfoca en promocionar productos o servicios a través de medios digitales. Esto incluye canales como las redes sociales, motores de búsqueda, correo electrónico y sitios web. El objetivo del marketing digital es llegar a un público específico y aumentar la visibilidad del negocio, así como también generar ventas y fidelización de clientes. El servicio de marketing digital se ha vuelto cada vez más importante en la era digital, ya que la mayoría de las personas pasan gran parte de su tiempo en línea. En AD23ROTHERS publicidad digital ofrecemos el servicio de creación de marketing digital para ayudar a promocionar su negocio o emprendimiento en internet. Nuestro equipo de expertos puede diseñar estrategias personalizadas y efectivas para aumentar la visibilidad de tu negocio en las redes sociales, motores de búsqueda y otros canales digitales. Desde la creación de contenido hasta la optimización de anuncios, estamos comprometidos a ayudarle a alcanzar sus objetivos de marketing y a hacer crecer su negocio en Internet. Contáctanos para obtener más información sobre cómo podemos ayudarle a mejorar su presencia en Internet.",
  },
  {
    id: "serviceBtn8",
    titulo: "Fotos Publicitarias",
    texto:
      "En AD23ROTHERS publicidad digital ofrecemos el servicio de creación de fotos publicitarias. Podemos ayudarle a crear imágenes atractivas y de alta calidad que promuevan su negocio o producto. ademas editamos tus fotos para mejorar la calidad y el aspecto de tus imágenes. Nuestro equipo de expertos utiliza las últimas herramientas y técnicas de edición para transformar tus fotos en obras maestras. Ya sea que necesites ajustes de color, recortes, eliminación de imperfecciones o cualquier otra edición, estamos aquí para ayudarle. ¡Déjenos hacer que sus fotos brillen! Si está interesado en el servicio, por favor contáctenos para saber y estaremos encantados de ayudarle en lo que necesite.",
  },
  {
    id: "serviceBtn9",
    titulo: "Tarjeta o Menú Digital",
    texto:
      "En AD23ROTHERS publicidad digital ofrecemos servicio de creación de tarjeta o menú digital para su negocio. Con nuestro servicio, podrá presentar su menú de una forma moderna y atractiva para sus clientes. Esto les permitirá navegar por los platos y bebidas que ofrece su negocio con facilidad, y también les brindará una experiencia interactiva. Además, tener un menú digital le permitirá realizar cambios en su oferta de forma rápida y sencilla, lo que es especialmente útil si su negocio tiene un menú en constante evolución. Contáctenos para obtener más información sobre cómo podemos ayudarlo a crear un menú digital personalizado para su negocio.",
  },
  {
    id: "serviceBtn10",
    titulo: "Asesoría en Marketing Digital",
    texto:
      "En AD23ROTHERS publicidad digital ofrecemos servicio especializado para ayudarte a crear y ejecutar estrategias efectivas en Internet. Desde la optimización de motores de búsqueda hasta el marketing de redes sociales, podemos ayudarte a llevar tu negocio al siguiente nivel en Internet. Contáctenos para saber más sobre cómo podemos ayudarle a alcanzar sus objetivos de marketing digital. ",
  },
];

const btnService = document.getElementsByClassName("service__btn");
const ventanaInfo = document.getElementById("ventanaInfo");

Array.from(btnService).forEach((button) => {
  button.addEventListener("click", () => {
    searchInfo(button.id);
  });
});
