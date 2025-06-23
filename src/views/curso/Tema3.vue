<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Factores de producción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-7
    
        .bg-color-5.p-4.h-100(data-aos="fade-left")
          p.mb-0 Para que un sistema económico funcione y logre producir los bienes y servicios necesarios para satisfacer las necesidades de la sociedad, es indispensable que emplee diversos elementos básicos conocidos como factores de producción. Estos constituyen los recursos fundamentales, utilizados en el proceso productivo y son esenciales para el desarrollo de cualquier actividad económica. Comprenderlos es clave para interpretar cómo opera la economía y cómo se asignan eficientemente los recursos disponibles.
    
    p.mb-4 Los factores de producción se clasifican tradicionalmente en <b>4 grandes grupos: tierra, trabajo, capital y emprendimiento.</b> Cada uno de ellos cumple un rol específico y contribuye de manera diferente al proceso productivo.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 La tierra representa los recursos naturales que provienen del entorno; el trabajo hace referencia al esfuerzo físico e intelectual del ser humano; el capital incluye las herramientas, maquinaria e infraestructura utilizadas; y el emprendimiento corresponde a la capacidad de organizar e innovación que articula los demás factores.
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 El análisis de estos factores permite entender cómo se genera riqueza, cómo se distribuyen los ingresos y cuáles son las condiciones necesarias para alcanzar el crecimiento económico.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Por ejemplo, el uso sostenible de los recursos naturales, la cualificación del trabajo humano o la inversión en maquinaria productiva son temas que emergen del estudio de estos componentes. Además, el emprendimiento ha adquirido especial relevancia en la economía moderna por su capacidad de generar empleo, innovación y valor agregado.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Tierra como recurso natural: características e importancia
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
    
        .bg-color-2.p-4.h-100(data-aos="fade-left")
          p.mb-0 Cuando hablamos de la tierra como factor de producción, no se hace referencia únicamente al suelo sobre el cual se construyen edificaciones o se cultiva, sino que también a todos aquellos recursos naturales que se encuentran en el entorno y que pueden ser utilizados por la sociedad para generar bienes y servicios. En este sentido, la tierra comprende desde minerales, bosques y cuerpos de agua, hasta el clima y el paisaje. Su importancia radica en que constituye la base sobre la cual se apoya toda actividad económica, porque sin ella no existiría la posibilidad de producir alimentos, materias primas ni desarrollar infraestructura económica.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Según Olivera Novelo, en su libro fundamentos de la economía, expresa que: 

        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 “La tierra es un factor inmóvil y limitado. Tiene la característica de presentarse en la naturaleza y no solo se refiere a la tierra en sí, sino a todos los recursos procedentes del suelo y subsuelo. Por ejemplo, el petróleo, recurso natural escaso que debe ser cuidado para aprovecharlo al máximo” (Pág. 64).
        p Conozcamos algunas características:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Limitada
              p Una característica esencial de la tierra como recurso, es que es limitada. A diferencia de otros factores como el capital, no puede ser producida en mayor cantidad, lo que impone una restricción importante en el uso de los recursos, Esta escasez obliga a tomar decisiones sobre su distribución y conservación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7
              h5 No se traslada
              p Otra característica relevante es que no se traslada: los recursos naturales son fijos en su ubicación geográfica, Esto hace que algunas regiones sean más ricas que otras, generando desigualdades económicas a nivel territorial.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7
              h5 Renovable o no renovable
              p Además, muchos recursos naturales tienen la característica de ser renovables o no renovables. Por ejemplo, un bosque puede reforestarse si se gestiona adecuadamente, mientras que un yacimiento de petróleo, una vez explorado, se agota de forma definitiva. Esta distinción es fundamental para definir políticas económicas sostenibles. La explotación responsable de la tierra y sus componentes, es uno de los retos más importantes en la economía contemporánea, dado el crecimiento poblacional y la presión sobre los ecosistemas.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
    
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p.mb-0.text-white Además, es importante saber que la tierra también genera un ingreso conocido como renta, que es el pago que se realiza por el uso de los recursos naturales. Esta renta puede variar dependiendo de la localización (a esto se le atribuye las políticas económicas de cada país), la fertilidad del suelo, el acceso al agua o la cercanía a los mercados. Así, no toda la tierra tiene el mismo valor económico, y su uso eficiente depende de múltiples factores, tanto físicos como sociales. La planificación territorial, por ejemplo, busca garantizar un uso ordenado y racional de este recurso, para maximizar su productividad, sin comprometer su sostenibilidad.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Trabajo: habilidades humanas aplicadas a la producción
    
    p.mb-4 El trabajo es uno de los factores fundamentales en el proceso económico, debido a que representa la intervención directa del ser humano en la transformación de los recursos naturales en bienes y servicios útiles para la sociedad. A través del trabajo, aplicamos los conocimientos, destrezas y capacidades físicas e intelectuales, para producir lo que se necesita en una economía. Este factor no se limita únicamente a las labores manuales; también incluye actividades profesionales, técnicas, creativas y de gestión, todas esenciales en la dinámica productiva moderna (Olivera Novelo, 2015).

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Heterogeneidad")
            p Una de las principales características del trabajo. No todas las personas poseen las mismas capacidades ni realizan las mismas tareas; por lo tanto, el trabajo se clasifica, según el nivel de cualificación requerido. Podemos encontrar desde trabajos no calificados, como el de un operario de limpieza, hasta trabajos altamente calificados, como los que realiza un ingeniero de <em>software</em> o un médico. En todos los casos, el trabajo implica un esfuerzo humano orientado hacia la producción o el servicio, lo que lo convierte en una fuente de generación de valor económico (Cue Mancera, 2015).
    
          .div(titulo="Ingreso personal")
            p Está estrechamente relacionado con el ingreso personal, dado que a través de él obtenemos remuneración, la cual se expresa generalmente en forma de salario. Este ingreso nos permite acceder a bienes y servicios que satisfacen tus necesidades básicas y otras más específicas. Por ejemplo, un panadero que elabora pan diariamente, a cambio de su trabajo recibe un pago que puede utilizar para comprar alimentos, vestimenta o pagar servicios. De esta manera, el trabajo no solo impulsa la economía, sino que también constituye la base de la subsistencia y el bienestar de las personas (Burneo, 2016).
    
          .div(titulo="Capacidad de desarrollo")
            p A medida que mejora sus habilidades mediante la educación, la capacitación o la experiencia, incrementa su productividad y su valor dentro del sistema económico. Esta mejora constante en sus capacidades, contribuye a generar mayor riqueza para la sociedad. Por ejemplo, si un técnico en mantenimiento recibe una certificación adicional en nuevas tecnologías, puede brindar un mejor servicio y acceder a mejores oportunidades laborales. En ese sentido, la inversión en capital humano es considerada una de las estrategias más eficaces para lograr el crecimiento económico sostenible.
    
          .div(titulo="Función social y cultural")
            p El trabajo también cumple una función social y cultural. A través de él, se integra a una comunidad productiva, se realiza como persona y participa activamente en el desarrollo de su entorno. Las condiciones laborales, como la seguridad social, el salario justo, el ambiente saludable y la estabilidad, son temas claves en el análisis económico actual, pues determinan la calidad de vida y el desarrollo equitativo de una sociedad. Así, valorar y proteger el trabajo en todas sus formas, es indispensable para promover una economía más justa y sostenible.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Capital y emprendimiento: motores de crecimiento económico
    
    p.mb-4 El fortalecimiento económico de una sociedad depende en gran medida de su capacidad para generar valor a través del uso eficiente de sus recursos productivos.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Capital y emprendimiento: motores de crecimiento económico 
            p.mb-4(data-aos="fade-right") En el PDF <b>Capital y emprendimiento</b>, se analizan los componentes fundamentales del capital físico y humano, así como el rol transformador del emprendimiento en la dinamización de la economía. A partir de conceptos clave y ejemplos aplicados al contexto colombiano, se expone cómo estas dos fuerzas impulsan la innovación, crean empleo y promueven un desarrollo inclusivo y sostenible, especialmente en regiones con desafíos estructurales
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Capital y emprendimiento: motores de crecimiento económico.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/12.png', alt='')









    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Factores_de_producci%C3%B3n" target="_blank" rel="noopener noreferrer") colaboradores de Wikipedia. (2025, April 30). Factores de producción - Wikipedia, la enciclopedia libre. 

         

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3sME9pIL75M " target="_blank" rel="noopener noreferrer") DecimosEconomia. (2011, 17 de febrero). Economía 10 (Factores de Producción) [video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=wmu1xe-nlSk" target="_blank" rel="noopener noreferrer") Basterrechea, E. (2025, 3 de abril). Economía - El trabajo #Ebaste [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=NVTkgiHjb3Y " target="_blank" rel="noopener noreferrer") videoconferencias. (2012, 23 de agosto). UTPL LA TIERRA y EL CAPITAL [(ÁREA ADMINISTRATIVA)(MICROECONOMÍA)] [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=hxkDfRwj42M" target="_blank" rel="noopener noreferrer") Una Nueva Ecoaldea. (2023, 17 de enero). clases de capital [Video]. YouTube.   

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
