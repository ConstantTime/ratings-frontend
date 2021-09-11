export interface IFetchDataParams {
  endpoint: string;
  method: EHttpMethod;
  body?: object;
  payloadToQueryParam?: boolean;
}

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface IInitOptions {
  method: EHttpMethod;
  body?: {};
}
