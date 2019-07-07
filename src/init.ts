import { Module as ClassModelModule } from '../modules/classModel';
import { Configuration } from './Configuration';

export function init(config: Configuration) {
    const m = new ClassModelModule();
    config.addModule(m);;
    m.setup(config);
}
