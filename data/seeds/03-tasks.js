exports.seed = function(knex, Promise) {
    return knex('tasks').insert([   
      { task_description: 'Hammer nails into wood', task_notes: 'use tools', task_completed: false, project_id:  1},
      { task_description: 'Construct frame', task_notes: '', task_completed: false, project_id:  1},
      { task_description: 'Uninstall old brake pads', task_notes: 'use installation kit', task_completed: false, project_id: 2},
      { task_description: 'Recycle parts', task_notes: '', task_completed: false, project_id: 2},
      { task_description: 'Build migration tables', task_notes: 'create tables migration folder', task_completed: false, project_id: 3},
      { task_description: 'Build API endpoints', task_notes: 'use previous projects as guide', task_completed: false, project_id: 3},
    ]);
  };