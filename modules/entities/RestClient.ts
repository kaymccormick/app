import axios from 'axios';
import GetEntitiesResponse from './rest/response/GetEntitiesResponse';
export interface Args {
    baseUri: string;
}

export class RestClient {
    public baseUri: string;

    constructor(args: Args) {
        this.baseUri = args.baseUri;
    }
    public getEntities(): Promise<GetEntitiesResponse> {
        return axios.get(`${this.baseUri}/entity`).then(response => {
            if(response.status >= 400) {
                return new Error();
            }
            return response.data;
        }).then(data => {
            const r = new GetEntitiesResponse(data.success, data.result);
            return r;
        });
    }
}

export default RestClient;
