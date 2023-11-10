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
import { CancelFineTuneRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fineTuneId: string = "ft-AF1WoRqd3aJAHsqc9NY7iL8F";

  const res = await sdk.fineTunes.cancelFineTune(fineTuneId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fineTuneId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The ID of the fine-tune job to cancel<br/>                   | ft-AF1WoRqd3aJAHsqc9NY7iL8F                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CancelFineTuneResponse](../../sdk/models/operations/cancelfinetuneresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

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
    apiKeyAuth: "",
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

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.CreateFineTuneRequest](../../sdk/models/shared/createfinetunerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateFineTuneResponse](../../sdk/models/operations/createfinetuneresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~listFineTuneEvents~~

Get fine-grained status updates for a fine-tune job.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFineTuneEventsRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fineTuneId: string = "ft-AF1WoRqd3aJAHsqc9NY7iL8F";
const stream: boolean = false;

  const res = await sdk.fineTunes.listFineTuneEvents(fineTuneId, stream);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fineTuneId`                                                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                      | The ID of the fine-tune job to get events for.<br/>                                                                                                                                                                                                                                                                                                                                                                                                     | ft-AF1WoRqd3aJAHsqc9NY7iL8F                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `stream`                                                                                                                                                                                                                                                                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                      | Whether to stream events for the fine-tune job. If set to true,<br/>events will be sent as data-only<br/>[server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)<br/>as they become available. The stream will terminate with a<br/>`data: [DONE]` message when the job is finished (succeeded, cancelled,<br/>or failed).<br/><br/>If set to false, only events generated so far will be returned.<br/> |                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `config`                                                                                                                                                                                                                                                                                                                                                                                                                                                | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                      | Available config options for making requests.                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                         |


### Response

**Promise<[operations.ListFineTuneEventsResponse](../../sdk/models/operations/listfinetuneeventsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~listFineTunes~~

List your organization's fine-tuning jobs


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
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

**Promise<[operations.ListFineTunesResponse](../../sdk/models/operations/listfinetunesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## ~~retrieveFineTune~~

Gets info about the fine-tune job.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFineTuneRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fineTuneId: string = "ft-AF1WoRqd3aJAHsqc9NY7iL8F";

  const res = await sdk.fineTunes.retrieveFineTune(fineTuneId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fineTuneId`                                                 | *string*                                                     | :heavy_check_mark:                                           | The ID of the fine-tune job<br/>                             | ft-AF1WoRqd3aJAHsqc9NY7iL8F                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.RetrieveFineTuneResponse](../../sdk/models/operations/retrievefinetuneresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
