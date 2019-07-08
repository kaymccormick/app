import {Configuration} from './Configuration';
import {ApplicationModule} from './ApplicationModule';
import {Module as ClassModelModule } from '../modules/classModel';
import {Module as EntitiesModule } from '../modules/entities';
const modules = [];
const relModulePath = '../modules';

export class WebApplication {
    public get modules(): ApplicationModule[] { return this.configuration.modules; }

    public configuration: Configuration;
    public constructor() {
        this.configuration = new Configuration();
    }

    public init(): void {
        const m = new ClassModelModule();
        m.setup(this, this.configuration);
        this.configuration.addModule(m);
        const m2 = new EntitiesModule();
        m2.setup(this, this.configuration);
        this.configuration.addModule(m2);
    }


}
