<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Sectores económicos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema4/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.text-white.mb-0(data-aos="fade-up") Comprender la estructura productiva de una economía, requiere conocer cómo se organizan las actividades económicas que permiten transformar los recursos en bienes y servicios útiles para la sociedad. En este contexto, los sectores económicos se clasifican en 3 grandes grupos: primario, secundario y terciario. Esta clasificación permite identificar no solo las funciones que cumple cada sector, sino que también su papel dentro del desarrollo económico de un país como Colombia.
    
    p.mb-4 Cada sector económico tiene características particulares y aporta de manera distinta al crecimiento y al empleo. El sector primario se enfoca en la explotación directa de los recursos naturales, como la agricultura, la pesca y la minería. El sector secundario transforma estas materias primas en productos elaborados mediante procesos industriales. Por último, el sector terciario ofrece servicios que facilitan el funcionamiento de la economía, como el comercio, la educación, el transporte o la salud.


    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Sector primario: explotación de recursos naturales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El sector primario comprende todas aquellas actividades económicas que se enfocan en la extracción directa de recursos naturales. Su base productiva depende totalmente del aprovechamiento del suelo, el agua, los minerales, los bosques, los animales y demás elementos del entorno natural. Estas actividades son fundamentales para el desarrollo de una economía, puesto que proporcionan las materias primas necesarias para los procesos industriales y alimenticios que sustentan al resto de los sectores económicos.
        p(data-aos="fade-left") Gaviria Mahecha, R. A. Guardiola Esmeral, A. R. & Ríos Giraldo, A en su libro “Sectores económicos en Colombia y su impacto en el comercio internacional”, expresan que: 
    
    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-10.p-4.mb-3(data-aos="fade-left")
              p.mb-0 “Tradicionalmente, el sector primario ha incluido actividades como la agricultura (tanto de subsistencia como comercial), la silvicultura, la minería, el pastoreo, la caza, la recolección y la pesca hecho por el cual existe interrelación entre el sector primario y el desempeño de otros sectores económicos” (Pág 17).
            p(data-aos="fade-left") Entre las principales actividades del sector primario se encuentran, entre otras:
        
        .row.justify-content-center.align-items-stretch
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/5.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-0.text-center La agricultura.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/6.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-0.text-center La ganadería. 
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/7.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-0.text-center La pesca. 
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/8.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-0.text-center La minería.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Por ejemplo, cuando una comunidad siembra y cosecha café, está participando en una actividad agrícola que pertenece al sector primario.
    
    .bg-full-width.bg-color-8
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-5(data-aos="fade-left") Una de las características del sector primario es su alta dependencia de las condiciones climáticas, geográficas y del acceso a los recursos naturales. Esto hace que su productividad pueda verse afectada por fenómenos como sequías, inundaciones o agotamiento de los suelos. A su vez, muchas de las actividades de este sector requieren de grandes extensiones de terreno y una considerable fuerza de trabajo.
        
            .bg-color-6.p-4(data-aos="fade-left")
              p.mb-0 A pesar de que históricamente el sector primario ha sido la base de las economías latinoamericanas, su participación en el producto interno bruto (PIB) tiende a disminuir con el paso del tiempo, a medida que los países avanzan hacia una industrialización y terciarización de la economía. Sin embargo, esto no significa que pierda importancia.
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2]  Sector secundario: transformación de materia primas en bienes
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El sector secundario comprende las actividades económicas encargadas de transformar las materias primas extraídas por el sector primario en productos elaborados o semielaborados. Este proceso de transformación se realiza a través de la industria y la construcción, permitiendo agregar valor a los recursos naturales y generar bienes que pueden ser utilizados por los consumidores o por otros sectores productivos. A través de este sector, se produce desde alimentos procesados hasta maquinaria pesada, siendo una pieza clave en el desarrollo económico y tecnológico de cualquier país.
        p Gaviria Mahecha, R. A. Guardiola Esmeral, A. R. & Ríos Giraldo, A en su libro “Sectores económicos en Colombia y su impacto en el comercio internacional” expresan que: 
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 “Quizá, el punto de partida de la evolución del sector industrial está documentado desde la primera revolución industrial que surge a finales del siglo XVIII, en Inglaterra. Este proceso se evidenció en la transformación de los lugares de trabajo, la organización de la sociedad; dado que empiezan aparecer las fábricas donde se transforma la materia prima con ayuda de las máquinas que son más productivas y que desplaza la mano de obra artesanal” (Pág 52).
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Industria manufacturera")
            p Es una de las principales actividades dentro del sector secundario. Por ejemplo, cuando se transforma la caña de azúcar en azúcar refinada, el algodón en ropa o el petróleo en plásticos, se está generando valor a partir de recursos básicos. En Colombia, ciudades como Medellín y Barranquilla, son reconocidas por su tradición industrial, abarcando sectores como el textil, la alimentación, la metalmecánica y la química, que representan una parte significativa del empleo urbano y de la producción nacional.
    
          .div(titulo="Construcción")
            p Incluye la edificación de viviendas, obras civiles e infraestructura vial. La construcción es fundamental para el crecimiento económico, porque impulsa la demanda de materiales como cemento, acero, ladrillo y vidrio, al mismo tiempo que genera empleos directos e indirectos. Por ejemplo, la construcción de una carretera requiere del procesamiento de rocas para producir asfalto y de la fundición de metales para fabricar puentes o señalización (Hernández Pérez, 2014).
    
          .div(titulo="Innovación tecnológica")
            p Porque requiere maquinaria especializada, procesos industriales eficientes y técnicas modernas de producción. El crecimiento del sector secundario está asociado a la inversión en tecnología, capacitación laboral e infraestructura energética. A medida que un país fortalece su capacidad industrial, mejora su competitividad internacional, reduce su dependencia de productos importados y puede diversificar su economía.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p No obstante, el desarrollo del sector secundario, también plantea desafíos importantes como el impacto ambiental y la concentración industrial. Las industrias pueden generar contaminación del aire, agua y suelo, si no se regulan adecuadamente. Por eso, es importante promover una industria sostenible que utilice tecnologías limpias, recicle materiales y optimice los recursos energéticos. 
                p.mb-0 El sector secundario, bien gestionado, puede ser un motor de crecimiento económico inclusivo, con alto potencial para la generación de empleo calificado y para el fortalecimiento de cadenas de valor regionales y globales.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema4/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3]  Sector terciario: servicios y su papel en la economía moderna    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") El sector terciario representa una de las partes más dinámicas de la economía actual. A diferencia de los sectores primario y secundario, aquí no se producen bienes tangibles, sino que se ofrecen servicios que satisfacen directamente las necesidades de las personas y de las empresas. Cuando se accede a la educación, se utiliza el transporte público, se va al médico o se contrata un servicio financiero; se está participando en el sector terciario. Este sector incluye actividades como comercio, turismo, comunicaciones, salud, educación, transporte y servicios financieros (Cue Mancera, 2015).
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A medida que las economías se desarrollan, el sector terciario adquiere mayor protagonismo. En países como Colombia, el crecimiento del sector servicios, ha sido clave en la transformación productiva y en la generación de empleo urbano. Basta con observar las grandes ciudades como Bogotá o Medellín, donde miles de personas trabajan en bancos, supermercados, instituciones educativas, hospitales, call centers o empresas tecnológicas. Este sector también ha impulsado el emprendimiento en áreas como la economía digital, el marketing, el diseño gráfico o el desarrollo de <em>software</em>. 
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Uno de los aportes más importantes del sector terciario a la economía moderna, es su capacidad para agregar valor a través de la atención al cliente, la innovación y la especialización. Aunque los servicios no generan productos físicos, sí cumplen un papel esencial en la satisfacción de necesidades complejas. Por ejemplo, una empresa que produce bienes manufacturados depende del transporte, la logística, la asesoría legal y los servicios financieros para poder funcionar de manera eficiente. Así, los servicios actúan como un conector entre los otros sectores y facilitan el funcionamiento del sistema económico (Hernández Pérez, 2014).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Además, el sector terciario ha experimentado una transformación acelerada gracias a las tecnologías de la información y la comunicación (TIC). Hoy podemos acceder a servicios bancarios desde el celular, estudiar de manera virtual, comprar productos por Internet o recibir asesorías en tiempo real, desde cualquier parte del mundo. Esta digitalización ha abierto nuevas oportunidades económicas, pero también plantea retos en términos de cobertura, ciberseguridad y calidad del servicio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              p Por su relevancia, el fortalecimiento del sector terciario es fundamental para la competitividad de una economía. Una buena red de servicios promueve la equidad social, mejora la calidad de vida y fomenta el desarrollo humano. En este sentido, invertir en educación, salud, tecnología e infraestructura de servicios no solo impulsa el crecimiento económico, sino que también amplía las oportunidades de bienestar para toda la población. Como se observa, el sector terciario no solo completa la estructura económica, sino que también lidera los cambios más importantes en la economía contemporánea.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Sectores_de_producci%C3%B3n#:~:text=Son%20las%20distintas%20regiones%20o,adicionales%20denominados%20cuaternario%20y%20quinario " target="_blank" rel="noopener noreferrer") colaboradores de Wikipedia. (2025, abril 20). Sectores de producción. Wikipedia, la Enciclopedia Libre. 

         

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6udkk4xP6dc " target="_blank" rel="noopener noreferrer") Garcia, A. (2017, 30 de abril). Sector primario [video]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2AQqaYEMBm0" target="_blank" rel="noopener noreferrer") Rocío Vázquez Escribano. (2020, 2 de febrero). sector primario [Video]. YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Yh6XBAkR4Yk" target="_blank" rel="noopener noreferrer") Garcia, A. (2017, 30 de abril). Sector secundario [Video]. YouTube.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=QR0meLrP3WY " target="_blank" rel="noopener noreferrer") Mañana sin falta. (2016, 9 de mayo). El sector Secundario I [Video]. YouTube.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=IBDnAp5Blcc " target="_blank" rel="noopener noreferrer") Mañana sin falta. (2016, 23 de mayo). El sector terciario I [Video]. YouTube.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4c4T8jL2bv0" target="_blank" rel="noopener noreferrer") Appademy. (2014, 27 de abril). El sector terciario - Explicación interactiva [Video]. YouTube. 



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
