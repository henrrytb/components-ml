import React from 'react';
import { Divider, Segment, Image, Container } from 'semantic-ui-react'
import img from '../images/multilingual.png';
import img2 from '../images/rdf.png';
import img3 from '../images/example.png';
import img4 from '../images/example2.png';
import img5 from '../images/example3.png';
import img6 from '../images/fuseki.png';
import img7 from '../images/componentes.png';
import img8 from '../images/marcas.png';

function Document() {
  return (    
    <div style={{ padding: '20px' }}>
      <strong id="docs-internal-guid-4f4329c0-7fff-a803-68bd-e1196a338125">        
        <Container text>
          <Segment secondary raised color='blue'> 
          <Image src={img} size='medium' centered />       
            <h1 dir="ltr" style={{color: '#2E64FE'}} align='center'>
              MULTILINGUALIDAD<br/>
              Aplicado a un motor de busqueda semantico utilizando una ontologia
            </h1>
            <h3 dir="ltr">
              Lanzamiento 03 Agosto 2020<br/>
              Version: 1.0<br/>
              Autores: 
              <ul>
                <li>Henry Torres Balderrama</li>  
                <li>Julio Alvaro Iglesias Huarachi</li>
                <li>Andres Anthony Gareca Arias</li> 
                <li>Mario Javier Mendoza Huanaco</li>
                <li>Ariel Rolando Yanarico Andia</li>
              </ul>                              
            </h3>     
          </Segment> 
        </Container>
        <br></br>
        <Container text>
          <Segment raised color='blue'>
            <h2 dir="ltr" style={{color: '#2E64FE'}}>Resumen</h2>
              El objetivo de este proyecto, es realizar un buscador semantico utilizando la multilingualidad
              para ello se aplico el proyecto a una ontologia denomina "Componentes de computadora".
          </Segment>      
        </Container> 
        <br></br>
        <Container text>
          <Segment raised color='blue'>
            <h2 dir="ltr" style={{color: '#2E64FE'}}>Tabla de Contenido</h2>
            <ul> 
              1. Introducción <br/>
              2. Objetivos <br/>
              3. Marco Teorico <br/>
              4. Marco Referencial <br/>
              5. Tecnologias a Utilizar <br/>
              6. Bibliografia
            </ul>          
          </Segment>
        </Container>                
      </strong>
      <br></br>
      <Container text>      
        <Segment raised color='blue'>
          <h1 dir="ltr">
            1. Introducción
          </h1>
          <Divider clearing />
            <p dir="ltr" align='justify'>
              La globalización ha permitido a la humanidad poder acceder a información de
              todo el mundo lo cual dió paso a grandes innovaciones y colaboraciones a lo
              largo del mundo con el uso de la Web. <br/>El acceso a contenido ha sido
              manejado de manera sintáctica lo cual a causado que la búsqueda de
              información tenga falencias o directamente no se encuentre lo que se está
              buscando. <br/>La Web Semántica busca mejorar la calidad de las búsquedas en
              Internet y con la implementación de multilingualidad se espera que las
              información dentro la Web ya no sólo tenga relación semántica entre los
              distintos conceptos sino además se ajuste al lenguaje de los usuarios.
            </p>
            <p dir="ltr" align='justify'>
              Existe un campo donde la información se ve mezclada entre varios lenguajes
              el cual es el de Componentes para computadoras de escritorio. Los usuarios
              no logran encontrar lo que buscan debido al desconocimiento de los
              lenguajes en los cuales se les presenta la información. Por los tanto se
              plantea dotar de soporte de multilingualidad a un sistema que facilite la
              búsqueda de información relacionada a dicho campo.
            </p>
            <h1 dir="ltr" id='object'>
              2. Objetivos
            </h1>
          <Divider clearing />
          <h1 dir="ltr">
            2.1. Objetivo General
          </h1>
          <p dir="ltr" align='justify'>
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
            2.2. Objetivos Específicos
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
          <h1 dir="ltr" id='teorico'>
            3. Marco teórico
          </h1>
          <Divider clearing />
          <h2 dir="ltr">
            3.1. La web
          </h2>
          <p dir="ltr" align='justify'>
            La World Wide Web (WWW), también conocida como la web, surge en 1989 como 
            método de compartir información, fue creada por Tim Berners-Lee y se puede 
            definir como un sistema de distribución basado en hipertextos enlazados y 
            accesibles a través de Internet. <br/>La traducción literal sería algo así como 
            “la Red de Alcance Mundial” y es una colección de documentos electrónicos 
            vinculados entre sí como una telaraña, de ahí que también se le conozca como 
            “la Red”. Estos documentos están almacenados en servidores situados en todas
            partes del mundo.
          </p>
          <h2 dir="ltr">
            3.2. La Web Semantica
          </h2>
          <p dir="ltr" align='justify'>
            La web Semántica ha sido impulsada, entre otros, por el creador de la web, Tim 
            Berners Lee en el 2000 para que la información sea reunida de forma que los 
            buscadores puedan “comprender”, más allá de limitarse a colocar los documentos en una lista.
            <br/>La definición oficial de “Web Semántica” ofrecida por ​ World Wide Web Consortium , ​ 
            (W3C) es: 
            <ul>“La Web Semántica es una Web extendida, dotada de mayor significado en la que 
              cualquier usuario en Internet podrá encontrar respuestas a sus preguntas de forma más rápida 
              y sencilla gracias a una información mejor definida. Al dotar a la Web de más significado y, 
              por lo tanto, de más semántica, se pueden obtener soluciones a problemas habituales en la 
              búsqueda de información gracias a la utilización de una infraestructura común, mediante la 
              cual, es posible compartir, procesar y transferir información de forma sencilla. Esta Web 
              extendida y basada en el significado, se apoya en lenguajes universales que resuelven los 
              problemas ocasionados por una Web carente de semántica en la que, en ocasiones, el acceso 
              a la información se convierte en una tarea difícil y frustrante”.
            </ul>
            La web semántica propone superar limitaciones de la web actual mediante introducción de
            descripciones explícitas del significado y de la estructura semántica global de los contenidos
            disponibles en la www, de manera que el contenido se procesable y entendible por las máquinas.
          </p>      
          <h2 dir="ltr">
            3.2. Estructura de Datos        
          </h2>
          <h2 dir="ltr">RDF</h2>
          <p dir="ltr" align='justify'>
            Es un modelo conceptual que sirve para proporcionar información descriptiva 
            sobre los recursos que se encuentran en la web, permitiendo el intercambio de 
            información a través de diferentes aplicaciones sin que los datos pierdan su 
            significado, lo que facilita su reutilización de los recursos.
            Una de las características diferenciales del RDF respecto a otros modelos consiste 
            en que posibilita la combinación de distintas fuentes de datos, aunque los esquemas 
            subyacentes sean distintos. <br/>Por otro lado es fácilmente extensible, ya que la 
            evolución de los esquemas no requiere que los consumidores de datos sean adaptados.
            El modelo de datos en RDF es bastante similar a otros modelos de datos, como pueden 
            ser los diagramas Entidad-Relación o los diagramas de Clases, y se basa en la idea 
            general de que las cosas que queremos describir tienen ciertas propiedades y esas 
            propiedades a su vez tienen valores.
            <br/>Por lo tanto, realizaremos siempre declaraciones de la forma sujeto-predicado-objeto, 
            lo que en terminología RDF se conoce como tripletas.
            <br/>Este modelo general se suele representar gráficamente mediante nodos y arcos como se
            muestra en el siguiente ejemplo:
            <br/>
            <Image src={img2} size='medium' centered /> 
            <br/>Sin embargo, el objetivo principal de RDF es facilitar la comunicación entre 
            máquinas, para lo que necesitaremos dos cosas:
            <ul>
              <li>
                Un sistema de identificadores únicos            
              </li>
              <li>
                Un lenguaje que sea procesable de forma automática y que nos permita representar
                estas relaciones.
              </li>
            </ul>
          </p>      
          <h2 dir="ltr">
            Identificadores Uniformes de Recursos (URI)
          </h2>
          <p dir="ltr" align='justify'>
            Para conseguir un sistema de identificación único, RDF extiende la estructura 
            natural de la Web http://www.w3.org/TR/webarch/ utilizando los Identificadores 
            Uniformes de Recursos (URIs http://tools.ietf.org/html/rfc2396) para representar 
            las relaciones.
            <br/>Las URIs no son más que una generalización de las URLs que utilizamos en la Web, 
            pero que nos permiten no solo identificar recursos Web, sino cualquier tipo de 
            recurso, sean o no accesibles a través de una red. <br/>Así pues, RDF utiliza las URIs 
            como base de identificación de los sujetos, predicados y objetos, de forma que una 
            relación quedaría expresada tal que:
            <br/>
            <br/>
            <Image src={img3}  centered /> 
          </p>
          <h2 dir="ltr">
            Serializacion XML
          </h2>
          <p dir="ltr" align='justify'>
            Como hemos visto, RDF es un modelo y no un formato en sí mismo, es por ello que 
            para que pueda ser interpretable de forma automática necesitamos utilizar un lenguaje 
            que sea procesable, lo que se conoce como serializaciones del RDF. De esta forma, 
            toda la potencia de representación de la información que ofrece RDF puede ser aprovechada 
            de forma sencilla por las máquinas.
            <br/>La notación más difundida para RDF es la serialización RDF-XML, que es además la sintaxis
            normativa a la hora de escribir RDF.
            <ul>http://www.w3.org/TR/2004/REC-rdf-primer-20040210/#rdfxml</ul>        
            Usando dicha sintaxis, definiríamos una relación tal como sigue:
            <br/><br/>
            <Image src={img4}  centered /> 
          </p>
          <h2 dir="ltr">
            RDF Schema (RDFS)
          </h2>
          <p dir="ltr" align='justify'>
            RDF provee una forma para expresar enunciados simples acerca de los recursos 
            usando propiedades y valores. Sin embargo, la comunidad de usuarios de RDF se 
            percató que se necesitaba indicar algunas veces que lo que estaban describiendo 
            eran tipos o clases específicas de recursos. <br/>RDF por sí sólo no proporciona tal 
            vocabulario, por lo que las clases y propiedades se describen en RDF Vocabulary 
            (también conocido como RDF schema). <br/>RDF schema no proporciona un vocabulario sobre 
            aplicaciones orientadas a clases, sino que provee de mecanismos para especificar 
            que tales clases y propiedades son parte de un vocabulario y de cómo se espera su 
            relación. <br/>También permite definir a los recursos como instancias de una o más clases. 
            Además permite que las clases puedan ser organizadas en forma jerárquica.
            <br/>Por lo tanto, RDF schema extiende a RDF para incluir un amplio vocabulario con un 
            significado adicional. RDF Schema permite definir:
            <ul>
              <li>Definir no sólo las propiedades de un recurso (ej. título, autor, materia, 
                tamaño, color, etc.) sino que también definir los tipos de recursos que se 
                describirán (libros, páginas Web, personas, empresas, etc.).
              </li>
              <li>
                Proporciona información sobre la interpretación de una sentencia dada en un 
                modelo de datos RDF (semántica).
              </li>
              <li>
                Definir la herencia de clases para crear una taxonomía del modelo; Esta es una
                poderosa característica de RDF Schema dado que en ella radica la extensibilidad 
                en cuanto a elaboración de nuevos esquemas.
              </li>
              <li>
                Definir las relaciones entre recursos y propiedades, lo cual ayudará a inferir 
                información del modelo y a la vez mejorar los procesos de búsqueda.
              </li>
              <li>
                Especificar restricciones que deben seguirse por estos modelos de datos.
              </li>
            </ul>
          </p>
          <h2 dir="ltr">
            SPARQL
          </h2>
          <p dir="ltr" align='justify'>
            SPARQL es un lenguaje estandarizado para la consulta de grafos RDF, normalizado 
            por el RDF Data Access Working Group (DAWG) del W3C. Es una tecnología clave en 
            el desarrollo de la web semántica que se constituyó como recomendación oficial 
            del W3C el 15 de enero de 2008, siendo actualizado a la versión 1.1 en 2013.
            <br/>Al igual que sucede con SQL, es necesario distinguir entre el lenguaje de consulta 
            y el motor para el almacenamiento y recuperación de los datos. Por este motivo, 
            existen múltiples implementaciones de SPARQL, generalmente ligados a entornos de 
            desarrollo y plataforma tecnológicas.
            <br/><br/>
            <Image src={img5}  centered /> 
          </p>
          <h2 dir="ltr">
            JENA
          </h2>
          <p dir="ltr" align='justify'>
            Apache Jena es un framework Java para construir aplicaciones basadas en ontologías.
            Proporciona un entorno programático para RDF , RDFS y OWL , SPARQL , e incluye 
            un motor de inferencia basado en reglas.
            Jena se desarrolló en HP Labs en el 2000, en 2009 HP cedió el proyecto a la 
            fundación Apache que decidió adoptarlo en noviembre de 2010.
            <br/>Su Arquitectura incluye:
            <ul>
              <li>
                API para trabajar (leer, procesar, escribir) ontologías RDF y OWL
              </li>
              <li>
                Motor de inferencia para razonar sobre ontologías RDF y OWL
              </li>
              <li>
                Estrategias de almacenamiento flexible para almacenar tripletas RDF en memoria o
                fichero
              </li>
              <li>
                Motor de queries compatible con especificación SPARQL
              </li>
            </ul>
            <br/><br/>
            <Image src={img6}  centered /> 
          </p>
          <h2 dir="ltr">
            Multilingualidad
          </h2>
          <p dir="ltr" align='justify'>
            El interés de los investigadores de Inteligencia Artificial por el lenguaje
            natural se centró primeramente en la comunicación del usuario con la
            máquina, con lo que las interfaces fueron los primeros componentes de las
            aplicaciones inteligentes construidas en lenguaje natural (Abascal y
            Moriyón, 2003).           
            Las ontologías tienen como principales características: el ser un modelo
            consensuado por la comunidad del dominio, la compartición de su
            conocimiento y la computabilidad del mismo.            
            <br/>Todo esto ha convertido a las ontologías en las representaciones más
            utilizadas en los nuevos desarrollos y, sobre todo, han pasado a ser la
            piedra fundamental de la creciente Web Semántica. <br/>Debido a su uso
            generalizado, no pueden escapar al fenómeno de la globalización que exige
            ahora que la información en lenguaje natural sea además multilingüe.            
            Las ontologías se enfrentan, al fenómeno de la multilingualidad que ya se
            manifiesta de forma patente en diferentes recursos léxicos computacionales
            en lo que se ha denominado el proceso de “localización de ontologías”.            
            <br/>La localización de un recurso léxico se entiende como el proceso de
            adaptación de ese recurso a una comunidad lingüística y cultural concreta.            
            <br/>Si lo aplicamos al dominio de las aplicaciones basadas en ontologías, nos
            encontraremos con que, en un sistema basado en el conocimiento, ese proceso
            de adaptación (localización) tiene que darse en tres niveles diferentes:      
            <ul>
              <li dir="ltr">          
                Interfaz        
              </li>
              <li dir="ltr">          
                Representación del conocimiento        
              </li>
              <li dir="ltr">          
                Datos
              </li>
            </ul> 
          </p>     
          <b>Niveles de multilingualidad</b>      
          <p dir="ltr">
            La multilingualidad, en una aplicación sobre un sistema basado en el
            conocimiento, puede darse en tres niveles diferentes:
          </p>
          <ul>
            <li dir="ltr">          
              Interfaz        
            </li>
            <li dir="ltr">          
              Representación del conocimiento        
            </li>
            <li dir="ltr">          
              Datos        
            </li>
          </ul>      
          <b>Interfaz</b>    
          <p dir="ltr">
            La multilingualidad en la interfaz puede darse en dos visualizaciones
            diferentes:
          </p>
          <ul>
            <li dir="ltr">          
              Visualización de mensajes (monolingüe, multilingüe simultáneo y no
              simultáneo)        
            </li>
            <li dir="ltr">          
              Visualización de contenido (multilingüe )        
            </li>
          </ul>      
          <b>Representación del conocimiento</b>      
          <p dir="ltr">
            La multilingualidad en una representación del conocimiento se tiene que
            abordar a tres niveles:
          </p>      
          <ul>
            <li dir="ltr">        
              Información        
            </li>
            <li dir="ltr">          
              Modelización        
            </li>
            <li dir="ltr">          
              Realización        
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
          <p dir="ltr" align='justify'>
            Para el caso de las ontologías, la información está compuesta por los
            metadatos de la ontología (autor, fecha de creación, etc.), la modelización
            es la meta-ontología que describe los componentes de la ontología y sus
            relaciones (conceptos que tienen atributos y se unen por relaciones...) y
            la realización sería una ontología propiamente dicha (ontología de coches,
            de libros, de profesiones, etc.).
          </p>
          <p dir="ltr">
            <b>Datos</b>
          </p>
          <p dir="ltr" align='justify'>
            El último de los niveles en los que se manifiesta la multilingualidad es en
            los datos, la información sobre los individuos.      
            En este caso, vendrá condicionada por la propia naturaleza de los
            individuos y estará modelada en la representación del conocimiento que se
            toma para el dominio. Dependiendo de la naturaleza de los datos y del
            dominio de que se trate, la modelización de la multilingualidad dentro de
            la representación del conocimiento puede ser muy variada.
          </p>
          <p dir="ltr">
            <b>Bases de datos multilingüe</b>
          </p>
          <p dir="ltr" align='justify'>
            Son base de datos léxicas de un idioma, donde se agrupan palabras en un
            conjunto de sinónimos los cuales proporcionan definiciones cortas y
            generales almacenando las relaciones semánticas entre los conjuntos de
            sinónimos.
          </p>
          <p dir="ltr" align='justify'>
            <b>EuroWordNet (EWN) (Vossen, 2002 y 2004)</b>, fue un proyecto europeo de tres
            años de duración (1996-1999) y cuyo resultado principal fue un lexicón
            multilingüe. Este recurso léxico se basaba en la estructura de la base de
            datos léxica WordNet, desarrollada en la Universidad de Princeton (Miller
            et al.,1990).      
            El objetivo del proyecto consistía en el desarrollo de un lexicón
            multilingüe con wordnets para ocho lenguas europeas (holandés, español,
            italiano, inglés, francés, alemán, checo y estonio).      
            El enfoque general seguido para la construcción de EWN se basaba en la
            reutilización de recursos léxicos existentes en cada lengua.
          </p>
          <p dir="ltr" align='justify'>
            <b>Genoma-KB (Cabré et al., 2004a y 2004b)</b>, la Base de Conocimientos sobre el
            Genoma Humano fue un proyecto desarrollado en el Instituto de Lingüística
            Aplicada (IULA) de la Universitat Pompeu Fabra en Barcelona (2001-2003).
            Este proyecto persigue la construcción de un recurso esencial para la
            recuperación de información, con control terminológico, en el dominio del
            genoma humano, en inglés, castellano y catalán. Esta base de conocimiento
            se divide en cuatro módulos interrelacionados: el módulo ontológico, el
            módulo terminológico, el módulo del corpus y el módulo de las entidades.
          </p>
          <p dir="ltr" align='justify'>
            <b>Agrovoc</b>, la Organización de las Naciones Unidas para la Agricultura y la
            Alimentación (FAO) desarrolló el Tesauro AGROVOC (Soergel et al., 2006) a
            principios de los años 80 con la finalidad de estandarizar el proceso de
            indexación y recuperación de datos en el dominio de la agricultura, la
            pesca, la alimentación y otros dominios relacionados como el medio
            ambiente. AGROVOC se desarrolló por expertos del dominio en inglés, y
            posteriormente se tradujo al español y al francés. Actualmente está
            disponible online 6 en 10 lenguas y en proceso de traducción para      
            otras tantas.
          </p>
          <h1 dir="ltr">
            4. Marco referencial
          </h1>
          <Divider clearing />
          <p dir="ltr">
            <b>Componentes de una computadora</b>
          </p>
          <p dir="ltr" align='justify'>
            Una computadora es un sistema informático compuesto por dos aspectos
            básicos: el hardware, que significa “soporte físico”, y el software, que se
            refiere a lo intangible o el “programa”. Los soportes físicos son elementos
            electrónicos que trabajan conectados para proporcionar datos, y esos datos
            son procesados gracias a las instrucciones que proporcionan los programas.          
            <br/>El hardware es como una caja en la que se conectan una serie de
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
            <b>Componentes internos</b>
          </p>
          <p dir="ltr">
            Son aquellas partes internas de una computadora que no se encuentran
            expuestas a la vista comúnmente.
            <br/>Como ser:
          </p>          
          <ul>
            <li dir="ltr">
              Tarjeta madre          
            </li>
            <li dir="ltr">
              Procesador          
            </li>        
            <li dir="ltr">
              Memoria ram          
            </li>            
            <li dir="ltr">
              <p dir="ltr">
                Dispositivo de almacenamiento
            </p>
            </li>                        
          </ul>
          <p dir="ltr">
            <b>Componentes externos</b>
          </p>
          <p>
            Son aquellas partes externas de una computadora que se encuentran a la vista.
            <br/>Como ser:
          </p>
          <ul>
            <li dir="ltr">
              Case          
            </li>
            <li dir="ltr">
              Teclado        
            </li>
            <li dir="ltr">
              Monitor          
            </li>
            <li dir="ltr">
              Mouse          
            </li>
          </ul>     
          <Image src={img7} size='medium' centered /> 
          <br/>
          <p>
            <b>Marcas de componentes de computadora</b>
          </p>  
          <p align='justify'> 
            En la actualidad existen diversos fabricantes de componentes para computadoras, entre ellos
            tenemos a:
          </p>
          <ul>
            <li>
              Intel y AMD (en procesadores)
            </li>
            <li>
              Nvidia y AMD (en tarjetas de video)
            </li>
            <li>
              Crusial, Corsair, Kingston (en memoria ram)
            </li>
            <li>
              Samsung, Acer, Dell (en monitores)
            </li>
            <li>
              Intel, Asus, Asrock, Msi (en tarjeta madre)
            </li>
          </ul>
          <Image src={img8} size='medium' centered /> 
      <h1 dir="ltr">
        5. Tecnologías a utilizar
      </h1>
      <Divider clearing />
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
      <Divider clearing />
      <ol>
        <li dir="ltr">
          <p dir="ltr">
            http://oa.upm.es/5102/1/Multilingualidad_en_una_aplicaci%C3%B3n_basada_en_el_conocimiento_.pdf
          </p>
        </li>
      </ol>
      </Segment>
      </Container>              
    </div>    
  );
}
export default Document;
