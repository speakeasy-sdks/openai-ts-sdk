import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class OpenAI {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * cancelFineTune - Immediately cancel a fine-tune job.
   * 
  **/
  cancelFineTune(
    req: operations.CancelFineTuneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelFineTuneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelFineTuneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/fine-tunes/{fine_tune_id}/cancel", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelFineTuneResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.fineTune = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createAnswer - Answers the specified question using the provided documents and examples.
   * 
   * The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
   * 
  **/
  createAnswer(
    req: operations.CreateAnswerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAnswerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAnswerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/answers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateAnswerResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createAnswerResponse = plainToInstance(
                shared.CreateAnswerResponse,
                httpRes?.data as shared.CreateAnswerResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createChatCompletion - Creates a completion for the chat message
  **/
  createChatCompletion(
    req: operations.CreateChatCompletionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateChatCompletionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateChatCompletionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/chat/completions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateChatCompletionResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createChatCompletionResponse = plainToInstance(
                shared.CreateChatCompletionResponse,
                httpRes?.data as shared.CreateChatCompletionResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createClassification - Classifies the specified `query` using provided examples.
   * 
   * The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
   * to select the ones most relevant for the particular query. Then, the relevant examples
   * are combined with the query to construct a prompt to produce the final label via the
   * [completions](/docs/api-reference/completions) endpoint.
   * 
   * Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
   * request using the `examples` parameter for quick tests and small scale use cases.
   * 
  **/
  createClassification(
    req: operations.CreateClassificationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateClassificationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateClassificationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/classifications";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateClassificationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createClassificationResponse = plainToInstance(
                shared.CreateClassificationResponse,
                httpRes?.data as shared.CreateClassificationResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createCompletion - Creates a completion for the provided prompt and parameters
  **/
  createCompletion(
    req: operations.CreateCompletionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateCompletionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateCompletionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/completions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateCompletionResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createCompletionResponse = plainToInstance(
                shared.CreateCompletionResponse,
                httpRes?.data as shared.CreateCompletionResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createEdit - Creates a new edit for the provided input, instruction, and parameters.
  **/
  createEdit(
    req: operations.CreateEditRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEditResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEditRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/edits";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateEditResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createEditResponse = plainToInstance(
                shared.CreateEditResponse,
                httpRes?.data as shared.CreateEditResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createEmbedding - Creates an embedding vector representing the input text.
  **/
  createEmbedding(
    req: operations.CreateEmbeddingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEmbeddingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEmbeddingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/embeddings";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateEmbeddingResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createEmbeddingResponse = plainToInstance(
                shared.CreateEmbeddingResponse,
                httpRes?.data as shared.CreateEmbeddingResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createFile - Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.
   * 
  **/
  createFile(
    req: operations.CreateFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/files";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.openAIFile = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createFineTune - Creates a job that fine-tunes a specified model from a given dataset.
   * 
   * Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.
   * 
   * [Learn more about Fine-tuning](/docs/guides/fine-tuning)
   * 
  **/
  createFineTune(
    req: operations.CreateFineTuneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFineTuneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFineTuneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/fine-tunes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateFineTuneResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.fineTune = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createImage - Creates an image given a prompt.
  **/
  createImage(
    req: operations.CreateImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateImageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/images/generations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateImageResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.imagesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createImageEdit - Creates an edited or extended image given an original image and a prompt.
  **/
  createImageEdit(
    req: operations.CreateImageEditRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateImageEditResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateImageEditRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/images/edits";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateImageEditResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.imagesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createImageVariation - Creates a variation of a given image.
  **/
  createImageVariation(
    req: operations.CreateImageVariationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateImageVariationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateImageVariationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/images/variations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateImageVariationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.imagesResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createModeration - Classifies if text violates OpenAI's Content Policy
  **/
  createModeration(
    req: operations.CreateModerationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateModerationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateModerationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/moderations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateModerationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createModerationResponse = plainToInstance(
                shared.CreateModerationResponse,
                httpRes?.data as shared.CreateModerationResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createSearch - The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.
   * 
   * To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.
   * 
   * The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
   * 
  **/
  createSearch(
    req: operations.CreateSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/engines/{engine_id}/search", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateSearchResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createSearchResponse = plainToInstance(
                shared.CreateSearchResponse,
                httpRes?.data as shared.CreateSearchResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createTranscription - Transcribes audio into the input language.
  **/
  createTranscription(
    req: operations.CreateTranscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTranscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTranscriptionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/audio/transcriptions";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateTranscriptionResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createTranscriptionResponse = plainToInstance(
                shared.CreateTranscriptionResponse,
                httpRes?.data as shared.CreateTranscriptionResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createTranslation - Translates audio into into English.
  **/
  createTranslation(
    req: operations.CreateTranslationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTranslationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTranslationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/audio/translations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateTranslationResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.createTranslationResponse = plainToInstance(
                shared.CreateTranslationResponse,
                httpRes?.data as shared.CreateTranslationResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteFile - Delete a file.
  **/
  deleteFile(
    req: operations.DeleteFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/files/{file_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteFileResponse = plainToInstance(
                shared.DeleteFileResponse,
                httpRes?.data as shared.DeleteFileResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteModel - Delete a fine-tuned model. You must have the Owner role in your organization.
  **/
  deleteModel(
    req: operations.DeleteModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteModelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/models/{model}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteModelResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.deleteModelResponse = plainToInstance(
                shared.DeleteModelResponse,
                httpRes?.data as shared.DeleteModelResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * downloadFile - Returns the contents of the specified file
  **/
  downloadFile(
    req: operations.DownloadFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DownloadFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DownloadFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/files/{file_id}/content", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DownloadFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.downloadFile200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listEngines - Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
  **/
  listEngines(
    config?: AxiosRequestConfig
  ): Promise<operations.ListEnginesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/engines";
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListEnginesResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listEnginesResponse = plainToInstance(
                shared.ListEnginesResponse,
                httpRes?.data as shared.ListEnginesResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFiles - Returns a list of files that belong to the user's organization.
  **/
  listFiles(
    config?: AxiosRequestConfig
  ): Promise<operations.ListFilesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/files";
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListFilesResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listFilesResponse = plainToInstance(
                shared.ListFilesResponse,
                httpRes?.data as shared.ListFilesResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFineTuneEvents - Get fine-grained status updates for a fine-tune job.
   * 
  **/
  listFineTuneEvents(
    req: operations.ListFineTuneEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFineTuneEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFineTuneEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/fine-tunes/{fine_tune_id}/events", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListFineTuneEventsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listFineTuneEventsResponse = plainToInstance(
                shared.ListFineTuneEventsResponse,
                httpRes?.data as shared.ListFineTuneEventsResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listFineTunes - List your organization's fine-tuning jobs
   * 
  **/
  listFineTunes(
    config?: AxiosRequestConfig
  ): Promise<operations.ListFineTunesResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/fine-tunes";
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListFineTunesResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listFineTunesResponse = plainToInstance(
                shared.ListFineTunesResponse,
                httpRes?.data as shared.ListFineTunesResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listModels - Lists the currently available models, and provides basic information about each one such as the owner and availability.
  **/
  listModels(
    config?: AxiosRequestConfig
  ): Promise<operations.ListModelsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/models";
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListModelsResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.listModelsResponse = plainToInstance(
                shared.ListModelsResponse,
                httpRes?.data as shared.ListModelsResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveEngine - Retrieves a model instance, providing basic information about it such as the owner and availability.
  **/
  retrieveEngine(
    req: operations.RetrieveEngineRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveEngineResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveEngineRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/engines/{engine_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveEngineResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.engine = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveFile - Returns information about a specific file.
  **/
  retrieveFile(
    req: operations.RetrieveFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/files/{file_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveFileResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.openAIFile = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveFineTune - Gets info about the fine-tune job.
   * 
   * [Learn more about Fine-tuning](/docs/guides/fine-tuning)
   * 
  **/
  retrieveFineTune(
    req: operations.RetrieveFineTuneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveFineTuneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveFineTuneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/fine-tunes/{fine_tune_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveFineTuneResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.fineTune = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * retrieveModel - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
  **/
  retrieveModel(
    req: operations.RetrieveModelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RetrieveModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RetrieveModelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/models/{model}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RetrieveModelResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.model = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
