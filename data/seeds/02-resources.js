exports.seed = function(knex, Promise) {
    return knex('resources').insert([   
      { resource_name: 'Hammer', resource_description: '' },
      { resource_name: 'Nails', resource_description: 'box of 100' },
      { resource_name: 'Brake Pads', resource_description: 'new brake pads from NAPA'},
      { resource_name: 'Installalation Kit', resource_description: 'helps with install of brake pads'},
      { resource_name: 'SQLite Studio', resource_description: 'database manager platform'},
      { resource_name: 'Visual Studio Code', resource_description: 'where I write code'},
    ]);
  };