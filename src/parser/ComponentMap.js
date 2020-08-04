const components = new Map();
const processor = {
  Name: 'table td div.table_title a',
  Brand: 'table td div.f_brand',
  Model: 'table td div.f_model',
  Speed: 'table td div.f_speed',
  Cores: 'table td div.f_cores',
  Socket: 'table td div.f_socket_type',
  Price: 'table>tbody>tr>td:nth-child(4)'
}

const motherboard = {
  Name: 'table td div.table_title a',
  Brand: 'table td div.f_brand',
  Model: 'table td div.f_model',
  FormFactor: 'table td div.f_form_factor',
  Chipset: 'table td div.f_chipset',
  Socket: 'table td div.f_socket_type',
  MemorySlot: 'table td div.f_ram_quantity',
  Price: 'table>tbody>tr>td:nth-child(4)'
}

const graphicsCard = {
  Name: 'table td div.table_title a',
  Brand: 'table td div.f_brand',
  Model: 'table td div.f_model',
  Chipset: 'table td div.f_chipset',
  Memory: 'table td div.f_memory',
  ClockSpeed: 'table td div.f_clock_speed',
  Interface: 'table td div.f_interface',
  Price: 'table>tbody>tr>td:nth-child(4)'
}

const mouse = {
  Name: 'table td div.table_title a',
  Brand: 'table td div.f_brand',
  Model: 'table td div.f_model',
  TrackingMethod: 'table td div.f_tracking_method',
  Color: 'table td div.f_color',
  Wireless: 'table td div.f_wireless',
  Price: 'table>tbody>tr>td:nth-child(4)'
}

const keyboard = {
  Name: 'table td div.table_title a',
  Brand: 'table td div.f_brand',
  Model: 'table td div.f_model',
  Style: 'table td div.f_style',
  Backlit: 'table td div.f_backlit',
  Color: 'table td div.f_color',
  Wireless: 'table td div.f_wireless',
  Price: 'table>tbody>tr>td:nth-child(4)'
}

const monitor = {
  Name: 'table td div.table_title a',
  Brand: 'table td div.f_brand',
  Model: 'table td div.f_model',
  ScreenSize: 'table td div.f_screen',
  Resolution: 'table td div.f_resolution',
  AspectRatio: 'table td div.f_aspect_ratio',
  ResponseTime: 'table td div.f_response_time',
  Price: 'table>tbody>tr>td:nth-child(4)'
}

components.set('CPU', processor);
components.set('Motherboard', motherboard);
components.set('Video Card', graphicsCard);
components.set('Keyboard', keyboard);
components.set('Monitor', monitor);
components.set('Mouse', mouse);

const buildPCUrls = {
  'CPU': 'processor',
  'Motherboard': 'motherboard',
  'Video Card': 'graphics_card',
  'Keyboard': 'keyboard',
  'Monitor': 'monitor',
  'Mouse': 'mouse',
}

export {components, buildPCUrls};
