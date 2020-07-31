
const prefix = 'computer-components-ml-3'
const ontologyUri = '<http://www.semanticweb.org/antho/ontologies/2020/6/computer-components-ml-3#>'

const header = `
  PREFIX ${prefix}: ${ontologyUri}
  PREFIX owl:   <http://www.w3.org/2002/07/owl#>
  PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>
`;

const removeSpecialCharacters = (data = '') => {
  return data.replace(/[^0-9a-zA-Z ]/g, '-');
}

const buildIRI = ({ nameEn: name = '' }) => {
  return removeSpecialCharacters(name).replace(/ /g, '_');
}

const buildLabels = ({ nameEs = '', nameEn = '' }) => {
  return `rdfs:label "${removeSpecialCharacters(nameEn)}"@en, "${removeSpecialCharacters(nameEs)}"@es ;`
}

const buildTripes = (component) => {
  const result = []
  result.push(`${prefix}:Name  "${removeSpecialCharacters(component.nameEn)}"@en, "${removeSpecialCharacters(component.nameEs)}"@es`)
  delete component.nameEn;
  delete component.nameEs;
  const keys = [ ...Object.keys(component)];
  keys.forEach(current => result.push(`${prefix}:${current}  "${component[current]}"`));
  console.log(result)
  return result.join(' ; \n') + ' . \n';
}


const getRequestTemplate = (component) => {
  const iriName = buildIRI(component);
  const labels = buildLabels(component);
  const triples = buildTripes(component)
  return `
    ${header}
    INSERT DATA {
      ${prefix}:${iriName}
        a ${prefix}:Component , owl:NamedIndividual ;
        ${labels}
        ${triples}
    }
  `;
}

export const populate = (component) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = "http://component-ml.tk:3030/ComponentsML-Test-Insert/update";
  const query = getRequestTemplate(component);
  console.log(query)
  const body = 'update=' + encodeURIComponent(query);
  fetch(proxyUrl + url, {
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "authorization": "Basic YWRtaW46YWRtaW4="
    },
    "body": body
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
}