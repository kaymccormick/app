import { WebApplication }from './WebApplication';
import RestClient from '@heptet/rest-client';
import { JsConfig } from './types';
import{ AppLogger} from './AppLogger';
import winston from 'winston';

const logger = winston.createLogger({format:winston.format.json(),
    transports:[new winston.transports.Console({level: 'debug'})]});

export function createRestClient(): RestClient {
    return new RestClient({baseUri:'', logDebug: (arg) => console.log(arg)});
}

export function getConfigJs(): JsConfig {
    const configJs = require('../core.conf').default;
    return configJs;
}

export function createWebApplication(configJs?: JsConfig, restClient?: RestClient) {
    return new WebApplication({
        config: configJs || getConfigJs(),
        restClient: restClient || createRestClient(),
    });
}
export function createAppLogger() {
    const l = new AppLogger({logger});
    return l;
}