
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

const buildIRI = ({ Name = {}}) => {
  return removeSpecialCharacters(Name.en).replace(/ /g, '_');
}

const buildLabels = ({ Name = {}}) => {
  return `rdfs:label "${removeSpecialCharacters(Name.en)}"@en, "${removeSpecialCharacters(Name.es)}"@es ;`
}

const buildTripes = (component) => {
  const result = []
  const keys = [ ...Object.keys(component)];
  keys.forEach(current => result.push(`${prefix}:${current}  "${component[current].en}"@en, "${component[current].es}"@es`));
  console.log(result)
  return result.join(' ; \n') + ' . \n';
}

const getRequestTemplate = (component, type) => {
  const iriName = buildIRI(component);
  const labels = buildLabels(component);
  const triples = buildTripes(component)
  return `
    ${header}
    INSERT DATA {
      ${prefix}:${iriName}
        a ${prefix}:${type} , owl:NamedIndividual ;
        ${labels}
        ${triples}
    }
  `;
}

export const populate = (component, type = 'Component') => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = "http://component-ml.tk:3030/components/update";
  const query = getRequestTemplate(component, type);
  const body = 'update=' + encodeURIComponent(query);

  fetch(proxyUrl + url, {
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      "authorization": "Basic YXJpZWw6YXJpZWw="
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