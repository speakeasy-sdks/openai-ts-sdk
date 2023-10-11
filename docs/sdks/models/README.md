# Models
(*models*)

## Overview

List and describe the various models available in the API.

### Available Operations

* [deleteModel](#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
* [listModels](#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [retrieveModel](#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

## deleteModel

Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.models.deleteModel({
    model: "ft:gpt-3.5-turbo:acemeco:suffix:abc123",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteModelRequest](../../models/operations/deletemodelrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteModelResponse](../../models/operations/deletemodelresponse.md)>**


## listModels

Lists the currently available models, and provides basic information about each one such as the owner and availability.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.models.listModels();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListModelsResponse](../../models/operations/listmodelsresponse.md)>**


## retrieveModel

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.models.retrieveModel({
    model: "gpt-3.5-turbo",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.RetrieveModelRequest](../../models/operations/retrievemodelrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RetrieveModelResponse](../../models/operations/retrievemodelresponse.md)>**

