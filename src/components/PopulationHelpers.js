
const prefix = 'computer-components-ml-3'
const ontologyUri = '<http://www.semanticweb.org/antho/ontologies/2020/6/computer-components-ml-3#>'

const header = `
  PREFIX ${prefix}: ${ontologyUri}
  PREFIX owl:   <http://www.w3.org/2002/07/owl#>
  PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>
`;

const buildIRI = ({ Name: name = '' }) => {
  return name.replace(/[^0-9a-zA-Z ]/g, '-').replace(/ /g, '_');
}

const buildLabels = ({ Name: name = '' }) => {
  name = name.replace(/[^0-9a-zA-Z ]/g, '-');
  return `rdfs:label "${name}"@en, "${name}"@es ;`
}

const buildTripes = (component) => {
  const keys = [ ...Object.keys(component)];
  return keys.map(current => (`${prefix}:${current}  "${component[current].replace(/[^0-9a-zA-Z ]/g, '-')}"`)).join(' ; \n') + ' . \n';
}


export const getRequestTemplate = (component) => {
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