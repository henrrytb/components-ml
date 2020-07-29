const components = new Map();
const processor = {
    Name: 'table td div.table_title a',
    Image: 'table td div.logo-name div.item-logo img',
    Brand: 'table td div.f_brand',
    Model: 'table td div.f_model',
    Speed: 'table td div.f_speed',
    Cores: 'table td div.f_cores',
    Socket: 'table td div.f_socket_type',
    Price: 'table>tbody>tr>td:nth-child(4)'
  }

  components.set('processor', processor);

  export default components;