import { merge } from "timm";
import { EHttpMethod, IFetchDataParams, IInitOptions } from "./types";

/**
 * Construct initOptions for the Request object used by fetch()
 * @param method HTTP method to use for the API request
 * @param body Request payload (URL parameters or request body)
 */
export const getInitOptions = ({ method, body }: IInitOptions): RequestInit => {
  const initOptions: RequestInit = {
    mode: "cors",
    method,
  };

  if (method === EHttpMethod.GET) {
    return initOptions;
  }

  if (body) {
    return merge(initOptions, {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return merge(initOptions, {
    body: null,
  });
};

/**
 * Add params as query parameters to the URL
 * @param url URL without query parameters
 * @param params Object to encode as query parameters
 */
export const appendUrlParameters = (url: string, params: any) => {
  if (typeof params !== "object") {
    return url;
  }

  const paramsKeys = Object.keys(params);

  if (!paramsKeys.length || !url) {
    return url;
  }

  // Create an array of `key=value` strings
  const paramsArr = paramsKeys
    // Filter all truthy or 0 value params
    .filter((key) => params[key] || params[key] === 0)
    .map((key) => {
      const pVal = params[key];
      let encodedVal = "";

      if (typeof pVal === "object") {
        encodedVal = encodeURIComponent(JSON.stringify(pVal));
      } else {
        encodedVal = encodeURIComponent(pVal);
      }

      return `${key}=${encodedVal}`;
    });

  if (!paramsArr.length) {
    return url;
  }

  // Join all params with `&` and add them to the URL
  return `${url}?${paramsArr.join("&")}`;
};

export const callApi = async <T = {}>({
  endpoint,
  method,
  body,
  payloadToQueryParam = false,
}: IFetchDataParams) => {
  try {
    let request: Request;
    let url: string = endpoint;
    if (method === EHttpMethod.GET || payloadToQueryParam) {
      url = appendUrlParameters(url, body);
      request = new Request(url, getInitOptions({ method }));
    } else {
      request = new Request(url, getInitOptions({ method, body }));
    }
    const response = await fetch(request);

    return response;
  } catch (e) {
    // No op
  }
};
