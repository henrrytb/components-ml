
export const getRequestTemplate = ({ name, brand, cores, price }) => {
  const urlName = name.split(' ').join('_');
  return `
    PREFIX computer-components-ml-3: <http://www.semanticweb.org/antho/ontologies/2020/6/computer-components-ml-3#> .
    INSERT DATA {
      computer-component-ml-3:${urlName}
      a                         computer-components-ml-3:CPU , owl:NamedIndividual ;
      rdfs:label "${name}"@en , "${name}"@es ;
      computer-components-ml-3:Cores  ${cores} ;
      computer-components-ml-3:Name "${name}"@en , "${name}"@es ;
      computer-components-ml-3:Price  ${price} ;
      computer-components-ml-3:isManufacturedBy computer-components-ml-3:${brand} .
    }
  `;
}