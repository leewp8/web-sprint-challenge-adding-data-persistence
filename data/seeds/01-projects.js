exports.seed = function(knex, Promise) {
    return knex('projects').insert([   
      { project_name: 'Build House', project_description: '', project_completed: false  },
      { project_name: 'Fix Car', project_description: 'brakes are not working', project_completed: false},
      { project_name: 'Sprint Challenge', project_description: 'due at 8pm', project_completed: false},
    ]);
  };