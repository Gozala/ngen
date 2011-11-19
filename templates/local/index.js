var spawn = require('child_process').spawn;

exports.variables = {
    project: 'Project name: ',
    description: 'Project description: ',
    date: function(values, callback) {
        var date = new Date;
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1);
        month = month.length === 2 ? month : 0 + month;
        var day = String(date.getDate());
        day = day.length === 2 ? day : 0 + day;
        callback([year, month, day].join('-'));
    },
    name: function(values, callback) {
        spawn('git', [
            '--bare',
            'config',
            '--global',
            'user.name'
        ]).stdout.once('data', callback);
    },
    email: function(values, callback) {
        spawn('git', [
            '--bare',
            'config',
            '--global',
            'user.email'
        ]).stdout.once('data', callback);
    },
    user: function(values, callback) {
      spawn('git', [
          '--bare',
          'config',
          '--global',
          'github.user'
      ]).stdout.once('data', callback);
    }
};
