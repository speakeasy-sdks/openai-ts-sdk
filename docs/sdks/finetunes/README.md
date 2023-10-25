# FineTunes
(*fineTunes*)

## Overview

Manage legacy fine-tuning jobs to tailor a model to your specific training data.

### Available Operations

* [~~cancelFineTune~~](#cancelfinetune) - Immediately cancel a fine-tune job.
 :warning: **Deprecated**
* [~~createFineTune~~](#createfinetune) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
 :warning: **Deprecated**
* [~~listFineTuneEvents~~](#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.
 :warning: **Deprecated**
* [~~listFineTunes~~](#listfinetunes) - List your organization's fine-tuning jobs
 :warning: **Deprecated**
* [~~retrieveFineTune~~](#retrievefinetune) - Gets info about the fine-tune job.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
 :warning: **Deprecated**

## ~~cancelFineTune~~

Immediately cancel a fine-tune job.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.fineTunes.cancelFineTune({
    fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CancelFineTuneRequest](../../models/operations/cancelfinetunerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CancelFineTuneResponse](../../models/operations/cancelfinetuneresponse.md)>**


## ~~createFineTune~~

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.fineTunes.createFineTune({
    classificationBetas: [
      0.6,
      1,
      1.5,
      2,
    ],
    hyperparameters: {
      nEpochs: "string",
    },
    model: "curie",
    trainingFile: "file-abc123",
    validationFile: "file-abc123",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.CreateFineTuneRequest](../../models/shared/createfinetunerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateFineTuneResponse](../../models/operations/createfinetuneresponse.md)>**


## ~~listFineTuneEvents~~

Get fine-grained status updates for a fine-tune job.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.fineTunes.listFineTuneEvents({
    fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListFineTuneEventsRequest](../../models/operations/listfinetuneeventsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListFineTuneEventsResponse](../../models/operations/listfinetuneeventsresponse.md)>**


## ~~listFineTunes~~

List your organization's fine-tuning jobs


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.fineTunes.listFineTunes();

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

**Promise<[operations.ListFineTunesResponse](../../models/operations/listfinetunesresponse.md)>**


## ~~retrieveFineTune~~

Gets info about the fine-tune job.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.fineTunes.retrieveFineTune({
    fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RetrieveFineTuneRequest](../../models/operations/retrievefinetunerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RetrieveFineTuneResponse](../../models/operations/retrievefinetuneresponse.md)>**

