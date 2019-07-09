export class RestResponse<T> {
  public success: boolean;
  public error?: any;
  public result?: T;
public constructor(success: boolean, result?: T, error?: any) {
this.success = success;
this.result = result;
this.error = error;
}
}
