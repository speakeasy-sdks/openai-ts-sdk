# FineTuning
(*fineTuning*)

## Overview

Manage fine-tuning jobs to tailor a model to your specific training data.

### Available Operations

* [cancelFineTuningJob](#cancelfinetuningjob) - Immediately cancel a fine-tune job.

* [createFineTuningJob](#createfinetuningjob) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

* [listFineTuningEvents](#listfinetuningevents) - Get status updates for a fine-tuning job.

* [listPaginatedFineTuningJobs](#listpaginatedfinetuningjobs) - List your organization's fine-tuning jobs

* [retrieveFineTuningJob](#retrievefinetuningjob) - Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)


## cancelFineTuningJob

Immediately cancel a fine-tune job.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelFineTuningJobRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fineTuningJobId: string = "ft-AF1WoRqd3aJAHsqc9NY7iL8F";

  const res = await sdk.fineTuning.cancelFineTuningJob(fineTuningJobId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fineTuningJobId`                                            | *string*                                                     | :heavy_check_mark:                                           | The ID of the fine-tuning job to cancel.<br/>                | ft-AF1WoRqd3aJAHsqc9NY7iL8F                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.CancelFineTuningJobResponse](../../models/operations/cancelfinetuningjobresponse.md)>**


## createFineTuningJob

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.fineTuning.createFineTuningJob({
    hyperparameters: {
      nEpochs: "string",
    },
    model: "gpt-3.5-turbo",
    trainingFile: "file-abc123",
    validationFile: "file-abc123",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.CreateFineTuningJobRequest](../../models/shared/createfinetuningjobrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateFineTuningJobResponse](../../models/operations/createfinetuningjobresponse.md)>**


## listFineTuningEvents

Get status updates for a fine-tuning job.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFineTuningEventsRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fineTuningJobId: string = "ft-AF1WoRqd3aJAHsqc9NY7iL8F";
const after: string = "string";
const limit: number = 896841;

  const res = await sdk.fineTuning.listFineTuningEvents(fineTuningJobId, after, limit);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `fineTuningJobId`                                                   | *string*                                                            | :heavy_check_mark:                                                  | The ID of the fine-tuning job to get events for.<br/>               | ft-AF1WoRqd3aJAHsqc9NY7iL8F                                         |
| `after`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | Identifier for the last event from the previous pagination request. |                                                                     |
| `limit`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | Number of events to retrieve.                                       |                                                                     |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |                                                                     |


### Response

**Promise<[operations.ListFineTuningEventsResponse](../../models/operations/listfinetuningeventsresponse.md)>**


## listPaginatedFineTuningJobs

List your organization's fine-tuning jobs


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListPaginatedFineTuningJobsRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const after: string = "string";
const limit: number = 385496;

  const res = await sdk.fineTuning.listPaginatedFineTuningJobs(after, limit);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                         | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `after`                                                           | *string*                                                          | :heavy_minus_sign:                                                | Identifier for the last job from the previous pagination request. |
| `limit`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Number of fine-tuning jobs to retrieve.                           |
| `config`                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)      | :heavy_minus_sign:                                                | Available config options for making requests.                     |


### Response

**Promise<[operations.ListPaginatedFineTuningJobsResponse](../../models/operations/listpaginatedfinetuningjobsresponse.md)>**


## retrieveFineTuningJob

Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFineTuningJobRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fineTuningJobId: string = "ft-AF1WoRqd3aJAHsqc9NY7iL8F";

  const res = await sdk.fineTuning.retrieveFineTuningJob(fineTuningJobId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fineTuningJobId`                                            | *string*                                                     | :heavy_check_mark:                                           | The ID of the fine-tuning job.<br/>                          | ft-AF1WoRqd3aJAHsqc9NY7iL8F                                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.RetrieveFineTuningJobResponse](../../models/operations/retrievefinetuningjobresponse.md)>**

