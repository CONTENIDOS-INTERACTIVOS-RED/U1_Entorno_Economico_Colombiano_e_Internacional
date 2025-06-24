<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Organización social para solucionar el problema económico     '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-2.p-4.h-100(data-aos="fade-left")
          p.mb-0 Cuando nos enfrentamos al estudio de la economía, pronto descubrimos que las sociedades deben tomar decisiones claves para resolver el problema económico: cómo asignar recursos limitados frente a necesidades ilimitadas. Esta necesidad ha llevado a las comunidades a organizarse socialmente, mediante sistemas económicos que definan las reglas, instituciones y mecanismos para tomar decisiones colectivas sobre qué producir, cómo producir y para quién producir. A través de estos sistemas, se busca responder de forma eficiente y justa a los desafíos propios de cada contexto histórico, político y cultural.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") En este tema comprenderemos cómo diferentes modelos económicos como el capitalismo, el socialismo y las economías mixtas, han surgido para abordar el problema económico, cada uno con sus principios, estructuras y formas de distribuir los recursos. Además, exploraremos los mecanismos de coordinación como el mercado y la planificación central, que permite a los sistemas económicos funcionar y adaptarse a las dinámicas de producción. Consumo y distribución.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema5/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Otro aspecto central que analizaremos es el rol del estado en la economía. En muchos casos, se requiere que el gobierno intervenga para corregir fallos de mercado, garantizar el acceso a bienes público, promover el bien social y regular el comportamiento de los agentes económicos. Así podremos reconocer cómo la intervención estatal puede variar dependiendo del modelo económico adoptado y del grado de desarrollo del país.

    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Sistemas económicos: capitalismo, socialismo y economías mixtas
    
    p.mb-4 El modo en que una sociedad organiza la producción, distribución y asignación de recursos define su modelo económico y condiciona su desarrollo.
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Sistemas económicos: capitalismo, socialismo y economías mixtas
            p.mb-4(data-aos="fade-right") En el PDF Sistemas económicos, se analizan los principales tipos de sistemas económicos que han guiado la gestión de los recursos en distintos contextos históricos y geográficos. A través de una revisión comparativa, se exploran las características, ventajas y limitaciones del capitalismo, el socialismo y las economías mixtas, así como el papel del mercado y del Estado en cada uno de ellos, proporcionando una base conceptual clave para comprender cómo se toman decisiones económicas en diversas realidades nacionales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Sistemas económicos: capitalismo, socialismo y economías mixtas.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/4.png', alt='')

    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Mecanismos de coordinación económica: mercado y planificación central
    
    p.mb-4 Cuando observamos cómo se toman las decisiones económicas en una sociedad, nos damos cuenta de que existen dos mecanismos fundamentales que permiten coordinar las actividades productivas: el mercado y la planificación central. Ambos modelos ofrecen formas distintas de resolver el problema económico, y su aplicación varía según el sistema económico adoptado por cada país.


    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.align-items-start.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/5.png", alt="").mb-4.mb-lg-0
          .col-lg-8.order-lg-1
        
            AcordionA(tipo="b")
              .div(titulo="Decisiones económicas")
                p En una economía de mercado, las decisiones económicas se toman de manera descentralizada a través de la interacción entre la oferta y la demanda. Es decir, son los consumidores y productores quienes, con sus decisiones de compra y venta, determinan qué se produce, en qué cantidad y a qué precio. Si se compra más de un producto en particular, se estará enviando una señal al mercado que indica una mayor demanda, lo que puede llevar a las empresas a aumentar su producción.
              .div(titulo="Planificación central")
                p En la planificación central, el Estado es quien toma las decisiones económicas más importantes. En este modelo, un órgano central determina qué bienes se van a producir, en qué cantidades y cómo serán distribuidos. Por ejemplo, en la antigua Unión Soviética, el gobierno elaboraba planes quinquenales para dirigir toda la actividad económica del país. Si viviéramos en una economía planificada, sabríamos, de antemano, cuánto arroz se va a producir al año, cuántos médicos serán formados o qué tipo de vivienda estará disponible, dado que todo responde a una estrategia central.

        p.mb-4 Ambos mecanismos tienen ventajas y limitaciones:

        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/6.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 El mercado fomenta la competencia y la innovación, pero puede generar desigualdades y no siempre garantiza el acceso equitativo a los bienes esenciales.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/7.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0 En cambio, la planificación central puede asegurar ciertos niveles de bienestar y estabilidad, pero suele ser menos eficiente y adaptable a los cambios del entorno.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Por eso, en la mayoría de los países modernos se utiliza una combinación de ambos mecanismos, donde el mercado se complementa con la regulación estatal.


    #t_5_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.3] Rol del estado en la economía: intervención y regulación 
    
    p.mb-4 Con todo lo hablado anteriormente, nos damos cuenta de que el Estado cumple un papel determinante en el funcionamiento de los sistemas económicos modernos. Aunque en algunos modelos teóricos se promueve la mínima intervención estatal, en la práctica, todos los países requieren de una participación activa del Estado para corregir desequilibrios, proteger derechos y promover el desarrollo económico y social.

    .row.justify-content-center
      .col-lg-10
        .bg-color-12(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema5/9.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La intervención del Estado se manifiesta en diversas formas, como la provisión de bienes públicos, la regulación de actividades económicas, el control de precios y la implementación de políticas fiscales, tributarias y monetarias.
        .bg-color-1.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema5/10.svg', alt='')
            .col-lg.order-lg-1
              .p-4
                p.mb-0(data-aos="fade-up") Por ejemplo, cuando el Estado decide construir una carretera, está proporcionando un bien que difícilmente sería financiado por el sector privado, debido a su alto costo y su naturaleza no excluyente. Igualmente, cuando impone normas de seguridad alimentaria, está regulando la producción para proteger la salud de los consumidores.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.h-100(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema5/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Uno de los principales motivos por los cuales el Estado interviene en la economía, es la existencia de fallos del mercado, como las externalidades negativas, los monopolios o la falta de bienes públicos. Si una fábrica contamina un río, el Estado puede imponerle sanciones o exigirle inversiones en tecnologías limpias para reducir ese daño a terceros. De este modo, busca garantizar el bienestar general, incluso cuando las decisiones privadas generan consecuencias sociales indeseadas.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/13.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
    
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p.mb-0.text-white Además, el Estado desempeña un rol redistributivo, mediante políticas como el subsidio a los sectores más vulnerables o la aplicación de impuestos progresivos, que permiten equilibrar las desigualdades económicas. También promueve la estabilidad macroeconómica a través del manejo de la inflación, el empleo y la inversión pública. Por ejemplo, durante una recesión, el gobierno puede aumentar el gasto público para dinamizar la economía y generar empleo.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revista.redipe.org/index.php/1/article/view/515/489 " target="_blank" rel="noopener noreferrer") Cujioa Guerra, E., Monroy Toro, S. L. & Palacio Sprockel, L. E. (2018). El papel del estado colombiano en la economía con miras a la globalización. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=L00S4ZmyaZw " target="_blank" rel="noopener noreferrer") McROi. (2015, 9 de octubre). ¿Cuál es la diferencia entre capitalismo y socialismo? [video]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=VxZZetREkgg" target="_blank" rel="noopener noreferrer") Economía en Cuarentena. (2020, 6 de noviembre). Sistema de Economía Planificada [Video]. YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=R4c18dwFw2I" target="_blank" rel="noopener noreferrer") Magic Markers. (2021, 23 de septiembre). Qué es el Estado y cuál es tu papel [Video]. YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Ffe2xG-Ak1w" target="_blank" rel="noopener noreferrer") Gotas Economicas. (2025, 27 de febrero). Capítulo 1 El Papel del Estado en la Economía Prefacio e Introducción [Video]. YouTube. 

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
