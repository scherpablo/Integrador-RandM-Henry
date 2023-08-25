import styles from "./About.module.css";

const AboutText = () => {
  return (
    <div>
      <h1 className={styles.h1About}>Acerca de la App</h1>
      <div className={styles.divAbout}>
        <p className={styles.pAbout}>
          ¡Bienvenido a mi Proyecto Integrador sobre la serie Ricky & Morty,
          realizado duarnte el curso de Desarrollo Web Full Stack de soy Henry.
          Estoy muy contento por traerte lo mejor de tus personajes favoritos de
          la serie. Mi objetivo es sumergirte en el emocionante mundo de la
          serie, permitiéndote explorar a fondo los detalles de cada personaje
          que ha capturado tu corazón poner a prueba mi cpacidad como
          Desarrollador Web.
        </p>
        <p className={styles.pAbout}>
          A través de la magia de la tecnología y el poder de la programación,
          he creado una experiencia que te permitirá conocer más sobre cada uno
          de ellos. En esta página, podrás encontrar una colección
          meticulosamente seleccionada de personajes emblemáticos de la serie.
          Cada tarjeta de personaje muestra una imagen única y cautivadora,
          junto con datos esenciales que te ayudarán a comprender mejor su
          trasfondo y su papel en la historia. Durante varios meses he trabajado
          incansablemente para asegurarme de que cada detalle esté en su lugar,
          para que tú puedas sumergirte por completo en este mundo fascinante.
        </p>
        <p className={styles.pAbout}>
          Ya sea que estés buscando información sobre los héroes valientes, los
          antihéroes complejos o los villanos maquiavélicos, ¡lo tengo cubierto!
          Espero que disfrutes explorando esta página tanto como yo he
          disfrutado creándola. Si compartes nuestra pasión por la serie, ¡estoy
          seguro de que te sentirás como en casa! Gracias por visitarla y formar
          parte de esta comunidad dedicada a celebrar todo lo relacionado con la
          serie. ¡Prepárate para una experiencia llena de emoción y
          descubrimientos!
        </p>
      </div>
    </div>
  );
};

export default AboutText;
