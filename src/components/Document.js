import React from 'react';

function Document() {
  return (
    <div style={{ padding: '40px' }}>
      <strong id="docs-internal-guid-4f4329c0-7fff-a803-68bd-e1196a338125">
        <h1 dir="ltr">
          1. Introducción
    </h1>
      </strong>
      <p dir="ltr">
        La globalización ha permitido a la humanidad poder acceder a información de
        todo el mundo lo cual dió paso a grandes innovaciones y colaboraciones a lo
        largo del mundo con el uso de la Web. El acceso a contenido ha sido
        manejado de manera sintáctica lo cual a causado que la búsqueda de
        información tenga falencias o directamente no se encuentre lo que se está
        buscando. La Web Semántica busca mejorar la calidad de las búsquedas en
        Internet y con la implementación de multilingualidad se espera que las
        información dentro la Web ya no sólo tenga relación semántica entre los
        distintos conceptos sino además se ajuste al lenguaje de los usuarios.
      </p>
      <p dir="ltr">
        Existe un campo donde la información se ve mezclada entre varios lenguajes
        el cual es el de Componentes para computadoras de escritorio. Los usuarios
        no logran encontrar lo que buscan debido al desconocimiento de los
        lenguajes en los cuales se les presenta la información. Por los tanto se
        plantea dotar de soporte de multilingualidad a un sistema que facilite la
        búsqueda de información relacionada a dicho campo.
      </p>
      <h1 dir="ltr">
        2. Objetivos
      </h1>
      <h1 dir="ltr">
        2.1. Objetivo General
      </h1>
      <p dir="ltr">
        El objetivo general de este proyecto es realizar un buscador que permite
        realizar consultas relacionadas a componentes para computadoras de
        escritorio soportando multilingualidad y que funcione a través del uso de
        ontologías. El buscador nos permitirá obtener información acerca de los
        distintos componentes disponibles para el armado de una computadora de
        escritorio así como información acerca de sus características como ser
        marca, calidad, precio, fabricante, etc. Ésta herramienta será útil para
        personal de los establecimientos que venden componentes y computadoras de
        escritorio así como para personas que desean armar su computadora.
      </p>
      <h1 dir="ltr">
        2.2. Objetivos Específico
      </h1>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Implementar una ontología relacionada a Componentes para
            computadoras de escritorio.
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Implementar un Parser para poblar la ontología.
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Implementar un motor de búsqueda que interactúe con la ontología y
            sus datos.
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Implementar un cliente para realizar consultas y visualizar los
            resultados de las mismas.
        </p>
        </li>
      </ul>
      <h1 dir="ltr">
        3. Marco teórico
      </h1>
      <h2 dir="ltr">
        3.1. Introducción
      </h2>
      <p dir="ltr">
        Desde que la Inteligencia Artificial trabaja con sistemas basados en el
        conocimiento, los esfuerzos se han centrado en el desarrollo teórico de
        modelos y en la construcción tanto de motores de inferencia para
        explotarlos como de aplicaciones basadas en ellos.
      </p>
      <p dir="ltr">
        La aparición de las ontologías como solución para la compartición de
        conocimientos consensuados, y la consiguiente inserción de éstas dentro de
        la Web, dando origen a la Web Semántica, ha supuesto la aparición del
        problema de la multilingualidad.
      </p>
      <p dir="ltr">
        El interés por los temas de multilingualidad ha estado presente en la
        comunidad científica desde diferentes perspectivas como ser (Peñas y
        Gonzalo, 2004):
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Búsqueda de información multilingüe
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Sistemas de búsqueda de respuestas
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Traducción automática
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            otros.
        </p>
        </li>
      </ul>
      <p dir="ltr">
        Sin embargo, aunque existen aplicaciones de Web Semántica y sistemas de
        conocimiento multilingüe, en general, se han adoptado soluciones
        específicas y particulares dirigidas a una implementación concreta y no
        como fruto de un estudio conceptual del problema.
      </p>
      <h2 dir="ltr">
        3.2. Nociones previas
      </h2>
      <p dir="ltr">
        La forma de representar un conocimiento en tres niveles: datos, modelo y
        metamodelo.
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Los datos es el nivel inferior y son los individuos (o instancias).
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            El modelo es el nivel intermedio y representa la estructura de los
            datos.
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            El metamodelo es el nivel superior y representa la estructura del
            modelo.
        </p>
        </li>
      </ul>
      <p dir="ltr">
        Un mapping es una relación entre elementos de conjuntos diferentes. Estos
        conjuntos pueden ser dos ontologías, una ontología y una base de datos,
        etc.
      </p>
      <p dir="ltr">
        El modelo de la información de mappings está al mismo nivel que el modelo
        de la información de dominio (ontología).
      </p>
      <h2 dir="ltr">
        3.3. Multilingualidad
      </h2>
      <p dir="ltr">
        El interés de los investigadores de Inteligencia Artificial por el lenguaje
        natural se centró primeramente en la comunicación del usuario con la
        máquina, con lo que las interfaces fueron los primeros componentes de las
        aplicaciones inteligentes construidas en lenguaje natural (Abascal y
        Moriyón, 2003).
      </p>
      <p dir="ltr">
        Las ontologías tienen como principales características: el ser un modelo
        consensuado por la comunidad del dominio, la compartición de su
        conocimiento y la computabilidad del mismo.
      </p>
      <p dir="ltr">
        Todo esto ha convertido a las ontologías en las representaciones más
        utilizadas en los nuevos desarrollos y, sobre todo, han pasado a ser la
        piedra fundamental de la creciente Web Semántica. Debido a su uso
        generalizado, no pueden escapar al fenómeno de la globalización que exige
        ahora que la información en lenguaje natural sea además multilingüe.
      </p>
      <p dir="ltr">
        Las ontologías se enfrentan, al fenómeno de la multilingualidad que ya se
        manifiesta de forma patente en diferentes recursos léxicos computacionales
        en lo que se ha denominado el proceso de “localización de ontologías”.
      </p>
      <p dir="ltr">
        La localización de un recurso léxico se entiende como el proceso de
        adaptación de ese recurso a una comunidad lingüística y cultural concreta.
      </p>
      <p dir="ltr">
        Si lo aplicamos al dominio de las aplicaciones basadas en ontologías, nos
        encontraremos con que, en un sistema basado en el conocimiento, ese proceso
        de adaptación (localización) tiene que darse en tres niveles diferentes:
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Interfaz
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Representación del conocimiento
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Datos
        </p>
        </li>
      </ul>
      <p dir="ltr">
        Niveles de multilingualidad
      </p>
      <p dir="ltr">
        La multilingualidad, en una aplicación sobre un sistema basado en el
        conocimiento, puede darse en tres niveles diferentes:
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Interfaz
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Representación del conocimiento
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Datos
        </p>
        </li>
      </ul>
      <p dir="ltr">
        Interfaz
      </p>
      <p dir="ltr">
        La multilingualidad en la interfaz puede darse en dos visualizaciones
        diferentes:
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Visualización de mensajes (monolingüe, multilingüe simultáneo y no
            simultáneo)
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Visualización de contenido (multilingüe )
        </p>
        </li>
      </ul>
      <p dir="ltr">
        Representación del conocimiento
      </p>
      <p dir="ltr">
        La multilingualidad en una representación del conocimiento se tiene que
        abordar a tres
      </p>
      <p dir="ltr">
        niveles:
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Información
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Modelización
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Realización
        </p>
        </li>
      </ul>
      <p dir="ltr">
        La Información, se refiere al dato de que la representación del
        conocimiento se encuentra expresada en varios idiomas.
      </p>
      <p dir="ltr">
        La Modelización es la representación de los componentes que darán
        multilingualidad a la representación del conocimiento.
      </p>
      <p dir="ltr">
        La Realización es la expresión lingüística real de la multilingualidad en
        la representación del conocimiento.
      </p>
      <p dir="ltr">
        Para el caso de las ontologías, la información está compuesta por los
        metadatos de la ontología (autor, fecha de creación, etc.), la modelización
        es la meta-ontología que describe los componentes de la ontología y sus
        relaciones (conceptos que tienen atributos y se unen por relaciones...) y
        la realización sería una ontología propiamente dicha (ontología de coches,
        de libros, de profesiones, etc.).
      </p>
      <p dir="ltr">
        Datos
      </p>
      <p dir="ltr">
        El último de los niveles en los que se manifiesta la multilingualidad es en
        los datos, la información sobre los individuos.
      </p>
      <p dir="ltr">
        En este caso, vendrá condicionada por la propia naturaleza de los
        individuos y estará modelada en la representación del conocimiento que se
        toma para el dominio. Dependiendo de la naturaleza de los datos y del
        dominio de que se trate, la modelización de la multilingualidad dentro de
        la representación del conocimiento puede ser muy variada.
      </p>
      <p dir="ltr">
        Bases de datos multilingüe
      </p>
      <p dir="ltr">
        Son base de datos léxicas de un idioma, donde se agrupan palabras en un
        conjunto de sinónimos los cuales proporcionan definiciones cortas y
        generales almacenando las relaciones semánticas entre los conjuntos de
        sinónimos.
      </p>
      <p dir="ltr">
        EuroWordNet (EWN) (Vossen, 2002 y 2004), fue un proyecto europeo de tres
        años de duración (1996-1999) y cuyo resultado principal fue un lexicón
        multilingüe. Este recurso léxico se basaba en la estructura de la base de
        datos léxica WordNet, desarrollada en la Universidad de Princeton (Miller
        et al.,1990).
      </p>
      <p dir="ltr">
        El objetivo del proyecto consistía en el desarrollo de un lexicón
        multilingüe con wordnets para ocho lenguas europeas (holandés, español,
        italiano, inglés, francés, alemán, checo y estonio).
      </p>
      <p dir="ltr">
        El enfoque general seguido para la construcción de EWN se basaba en la
        reutilización de recursos léxicos existentes en cada lengua.
      </p>
      <p dir="ltr">
        Genoma-KB (Cabré et al., 2004a y 2004b), la Base de Conocimientos sobre el
        Genoma Humano fue un proyecto desarrollado en el Instituto de Lingüística
        Aplicada (IULA) de la Universitat Pompeu Fabra en Barcelona (2001-2003).
        Este proyecto persigue la construcción de un recurso esencial para la
        recuperación de información, con control terminológico, en el dominio del
        genoma humano, en inglés, castellano y catalán. Esta base de conocimiento
        se divide en cuatro módulos interrelacionados: el módulo ontológico, el
        módulo terminológico, el módulo del corpus y el módulo de las entidades.
      </p>
      <p dir="ltr">
        Agrovoc, la Organización de las Naciones Unidas para la Agricultura y la
        Alimentación (FAO) desarrolló el Tesauro AGROVOC (Soergel et al., 2006) a
        principios de los años 80 con la finalidad de estandarizar el proceso de
        indexación y recuperación de datos en el dominio de la agricultura, la
        pesca, la alimentación y otros dominios relacionados como el medio
        ambiente. AGROVOC se desarrolló por expertos del dominio en inglés, y
        posteriormente se tradujo al español y al francés. Actualmente está
        disponible online 6 en 10 lenguas y en proceso de traducción para
      </p>
      <p dir="ltr">
        otras tantas.
      </p>
      <h1 dir="ltr">
        4. Marco referencial
      </h1>
      <p dir="ltr">
        Componentes de una computadora
      </p>
      <p dir="ltr">
        Una computadora es un sistema informático compuesto por dos aspectos
        básicos: el hardware, que significa “soporte físico”, y el software, que se
        refiere a lo intangible o el “programa”. Los soportes físicos son elementos
        electrónicos que trabajan conectados para proporcionar datos, y esos datos
        son procesados gracias a las instrucciones que proporcionan los programas.
      </p>
      <p dir="ltr">
        El hardware es como una caja en la que se conectan una serie de
        dispositivos que procesan información de entrada y de salida.
      </p>
      <p dir="ltr">
        El hardware de una computadora está compuesto de:
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            componentes internos
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            componentes externos
        </p>
        </li>
      </ul>
      <p dir="ltr">
        Componentes internos
      </p>
      <p dir="ltr">
        Son aquellas partes internas de una computadora que no se encuentran
        expuestas a la vista comúnmente.
      </p>
      <p dir="ltr">
        Como ser:
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            Tarjeta madre
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Tarjeta de video
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Tarjeta de red cableada
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Tarjeta de red inalámbrica
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Tarjeta de sonido
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Procesador
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Memoria ram
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Dispositivo de almacenamiento
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Fuente de poder
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Dispositivo óptico
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Disipador de calor
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Ventilador de caja
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            Sistema de refrigeración
        </p>
        </li>
      </ul>
      <p dir="ltr">
        Componentes externos
      </p>
      <br />
      <h1 dir="ltr">
        5. Tecnologías a utilizar
      </h1>
      <p dir="ltr">
        Para el desarrollo de este motor de búsqueda se utilizarán las siguientes
        tecnologías:
      </p>
      <h2 dir="ltr">
        5.1. Apache Jena Fuseki
      </h2>
      <p dir="ltr">
        Apache Jena Fuseki es un servidor SPARQL.
    <br />
        <br />
      </p>
      <ul>
        <li dir="ltr">
          <p dir="ltr">
            SPARQL UI: Fuseki nos permite hacer consultas a través de su
            Interfaz usuario.
        </p>
        </li>
        <li dir="ltr">
          <p dir="ltr">
            REST Api: Fuseki brinda un servicio REST para poder hacer request
            con una consulta SPARQL a nuestra ontología.
        </p>
        </li>
      </ul>
      <h1 dir="ltr">
        6. Bibliografía
      </h1>
      <ol>
        <li dir="ltr">
          <p dir="ltr">
            http://oa.upm.es/5102/1/Multilingualidad_en_una_aplicaci%C3%B3n_basada_en_el_conocimiento_.pdf
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Document;
