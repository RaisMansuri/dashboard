module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        "uri":"mongodb+srv://dbusrcn628:XVeQxtBUHC9@cndbcluster.r77wo.mongodb.net/careerdb?retryWrites=true&w=majority"
       /* host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'careerdb'),
        username: env('DATABASE_USERNAME', 'dbusrcn628'),
        password: env('DATABASE_PASSWORD', 'XVeQxtBUHC9'),*/
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
