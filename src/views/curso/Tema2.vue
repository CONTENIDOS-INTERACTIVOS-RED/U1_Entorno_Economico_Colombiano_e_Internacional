<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Valor económico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El concepto de valor económico constituye uno de los pilares fundamentales para entender el funcionamiento de los mercados y la toma de decisiones, tanto por parte de los consumidores como de los productores. Cuando analizamos por qué un bien o un servicio tiene un precio determinado, estamos explorando directamente cómo se construye y percibe su valor. En economía, el valor no solo se relaciona con lo que cuesta algo, sino también lo que representa para quien lo consume.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A lo largo de este tema entenderemos cómo se define el valor económico desde distintas perspectivas, incluyendo su utilidad para quien lo consume y su capacidad de ser intercambiado. Se hablará sobre las razones por las cuales algunos bienes tienen un alto valor en el mercado y otros no, aún si parecen igual de útiles. Además, se abordará cómo la percepción subjetiva del valor influye en la disposición que tiene una persona para pagar por ciertos productos o servicios, lo cual resulta crucial para el análisis del comportamiento del consumidor.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de valor económico: valor de uso y valor de cambio
    
    p.mb-4 La comprensión del valor económico es esencial para analizar cómo los bienes y servicios adquieren relevancia dentro de los mercados y en las decisiones de consumo.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Concepto de valor económico: valor de uso y valor de cambio
            p.mb-4(data-aos="fade-right") En el PDF <b>Concepto de valor económico</b>, se explica cómo este valor se construye a partir de dos dimensiones fundamentales: la utilidad práctica que ofrece un bien (valor de uso) y su capacidad para ser intercambiado en el mercado (valor de cambio). A través de referentes teóricos como Karl Marx y Adam Smith, se presentan reflexiones clave que permiten entender las diferencias entre estos conceptos y su impacto en la fijación de precios, la percepción de escasez y el comportamiento económico de productores y consumidores.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto de valor económico: valor de uso y valor de cambio.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Factores que determinan el valor de los bienes y servicios
    
    p.mb-4 Para comprender cómo se establece el valor de los bienes y servicios, es fundamental que analicemos los factores que influyen en su formación, dentro del sistema económico. El valor de un bien o servicio no surge de manera arbitraria, sino que responde a una combinación de elementos que afectan la percepción que tenemos los consumidores, sobre su utilidad y disponibilidad. Entre estos factores se encuentran la escasez, la utilidad, el costo de producción, las preferencias del consumidor, y el contexto social o cultural.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7
              h5 La utilidad
              p Hace referencia a la capacidad que tiene un bien para satisfacer una necesidad. Cuanto mayor sea esta capacidad, mayor será el valor que los consumidores le atribuyen; por ejemplo, el agua en una ciudad suele tener un precio bajo porque es abundante, pero en una zona desértica puede adquirir un valor mucho más alto, debido a su utilidad crítica y limitada disponibilidad. Esta diferencia ilustra cómo el valor depende también del contexto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7
              h5 La escasez
              p Si un bien es escaso y tiene una demanda elevada, su valor aumenta. La escasez no siempre se refiere a una falta física, sino también a la dificultad para acceder a ciertos productos. Un ejemplo claro se observa con productos de temporada, como las frutas, cuyo valor se incrementa fuera de su ciclo natural por la dificultad de obtención. En cambio, cuando algo es abundante y de fácil acceso su valor tiende a disminuir.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 El costo de producción
              p Un bien que requiere muchos recursos, tecnología avanzada o tiempo prolongado para su elaboración tendrá un valor más elevado en el mercado. Por ejemplo, fabricar un avión, conlleva mayores costos que producir carros, lo que se refleja en su precio de venta. En este sentido, el valor no solo depende del beneficio que el consumidor percibe, sino también del esfuerzo que implica producirlo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Las preferencias del consumidor
              p Un producto puede ser más valioso si es deseado por una gran cantidad de personas, aunque su utilidad objetiva no sea tan alta. La moda o las tendencias sociales suelen influir considerablemente en este aspecto. El lanzamiento de un nuevo celular inteligente, por ejemplo, genera una alta demanda inicial que eleva su valor, más allá de sus características técnicas (Olivera Novelo, J. 2015).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 El entorno económico y social
              p También determina el valor de los bienes. Factores como la cultura, la política económica o los niveles de ingreso afectan cómo se valoran ciertos productos. En algunos países, un bien puede ser de lujo mientras que en otros se considera básico. Entender estos factores permiten tener una visión más crítica sobre los precios que observamos en el mercado y sobre las decisiones que tomamos como consumidor.
    
    .titulo-figura.mb-4
      h5 Figura 2.
      span Ejemplo sobre preferencias del consumidor 
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        div.p-5.bg-color-7
          figure
            img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in")
        figcaption.bg-color-7.mt-2.text-center Nota: tomado y adaptado de Olivera Novelo (2015). 
      .col-lg-6
        .bg-color-1.p-5(data-aos="fade-left")
          div.mt-lg-4
            p Olivera Novelo, J. en su libro “Fundamentos de economía” explica la anterior imagen así:
            p.mb-0 “En el mapa anterior, los ejes <b>X</b> y <b>Y</b> representan una canasta de bienes. Supongamos que en el eje horizontal está la canasta <b>A</b> y en el vertical la canasta <b>B</b>; un consumidor decide las combinaciones que le satisfacen, en cuanto a qué tanto tener de cada canasta. Así, todos los puntos que están sobre la curva como el <b>C</b> y <b>D</b> representan intersecciones que le satisfacen de igual forma. Esta persona puede consumir 2 bienes de la canasta <b>A</b> y 6 de la canasta <b>B</b>, de la misma forma que puede consumir 6 bienes de la canasta <b>A</b> y 2 de la <b>B</b> al mes. Esta curva recibe el nombre de curva de indiferencia” (p. 52).
        figure
          img(src="@/assets/curso/tema2/10.png")



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.aes.es/blog/2025/04/16/la-teoria-del-valor-antes-de-michael-porter-de-387-a-c-a-1985/#:~:text=Esta%20teor%C3%ADa%20resolvi%C3%B3%20la%20paradoja,la%20oferta%20y%20la%20demanda " target="_blank" rel="noopener noreferrer") Martinez Pérez, J. J., García Vicente, S. (2025). La Teoría del Valor antes de Michael Porter (de 387 a.C. a 1985) - Blog Economía y Salud. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href=" https://www.aes.es/blog/2025/04/16/la-teoria-del-valor-antes-de-michael-porter-de-387-a-c-a-1985/#:~:text=Esta%20teor%C3%ADa%20resolvi%C3%B3%20la%20paradoja,la%20oferta%20y%20la%20demanda" target="_blank" rel="noopener noreferrer") Pérez, J. J. M. (2025, 29 de april). La Teoría del Valor antes de Michael Porter (de 387 a.C. a 1985) - Blog Economía y Salud. Blog Economía Y Salud.

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ZmaSUNo_e5g" target="_blank" rel="noopener noreferrer") Aguado J. (2022, 19 de abril). Costes de producción a corto plazo [video]. YouTube. 
   

  

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
