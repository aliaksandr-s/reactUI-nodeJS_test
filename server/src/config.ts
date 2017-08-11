import * as convict from 'convict';
import path =  require('path');

class Convict {
  public config: convict.Config

  constructor() {
    this.config = convict({
      env: {
        doc: 'The applicaton environment.',
        format: ['production', 'development', 'test'],
        default: 'test',
        env: 'NODE_ENV'
      },
      connection: { 
        doc: 'MongoDB connection string.',
        default: 'mongodb://127.0.0.1:27017/clients_test',
        format: String
      }
    });
  }

  init() {
    const env = this.config.get('env');
    this.config.loadFile(path.join(path.dirname(require.main.filename), 'config', `${env}.json`));
    this.config.validate();
  }
}


export default new Convict().config;