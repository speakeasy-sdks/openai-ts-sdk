# OpenAI
(*openAI*)

## Overview

The OpenAI REST API

### Available Operations

* [~~cancelFineTune~~](#cancelfinetune) - Immediately cancel a fine-tune job.
 :warning: **Deprecated**
* [cancelFineTuningJob](#cancelfinetuningjob) - Immediately cancel a fine-tune job.

* [createChatCompletion](#createchatcompletion) - Creates a model response for the given chat conversation.
* [createCompletion](#createcompletion) - Creates a completion for the provided prompt and parameters.
* [~~createEdit~~](#createedit) - Creates a new edit for the provided input, instruction, and parameters. :warning: **Deprecated**
* [createEmbedding](#createembedding) - Creates an embedding vector representing the input text.
* [createFile](#createfile) - Upload a file that can be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please [contact us](https://help.openai.com/) if you need to increase the storage limit.

* [~~createFineTune~~](#createfinetune) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
 :warning: **Deprecated**
* [createFineTuningJob](#createfinetuningjob) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

* [createImage](#createimage) - Creates an image given a prompt.
* [createImageEdit](#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](#createimagevariation) - Creates a variation of a given image.
* [createModeration](#createmoderation) - Classifies if text violates OpenAI's Content Policy
* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into English.
* [deleteFile](#deletefile) - Delete a file.
* [deleteModel](#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
* [downloadFile](#downloadfile) - Returns the contents of the specified file.
* [listFiles](#listfiles) - Returns a list of files that belong to the user's organization.
* [~~listFineTuneEvents~~](#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.
 :warning: **Deprecated**
* [~~listFineTunes~~](#listfinetunes) - List your organization's fine-tuning jobs
 :warning: **Deprecated**
* [listFineTuningEvents](#listfinetuningevents) - Get status updates for a fine-tuning job.

* [listModels](#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [listPaginatedFineTuningJobs](#listpaginatedfinetuningjobs) - List your organization's fine-tuning jobs

* [retrieveFile](#retrievefile) - Returns information about a specific file.
* [~~retrieveFineTune~~](#retrievefinetune) - Gets info about the fine-tune job.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
 :warning: **Deprecated**
* [retrieveFineTuningJob](#retrievefinetuningjob) - Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

* [retrieveModel](#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

## ~~cancelFineTune~~

Immediately cancel a fine-tune job.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.cancelFineTune({
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
}).then((res: CancelFineTuneResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CancelFineTuneRequest](../../models/operations/cancelfinetunerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CancelFineTuneResponse](../../models/operations/cancelfinetuneresponse.md)>**


## cancelFineTuningJob

Immediately cancel a fine-tune job.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelFineTuningJobResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.cancelFineTuningJob({
  fineTuningJobId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
}).then((res: CancelFineTuningJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CancelFineTuningJobRequest](../../models/operations/cancelfinetuningjobrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CancelFineTuningJobResponse](../../models/operations/cancelfinetuningjobresponse.md)>**


## createChatCompletion

Creates a model response for the given chat conversation.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateChatCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import {
  ChatCompletionRequestMessageRole,
  CreateChatCompletionRequestFunctionCall1,
  CreateChatCompletionRequestModel2,
} from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createChatCompletion({
  frequencyPenalty: 7707.26,
  functionCall: {
    name: "Diesel Money",
  },
  functions: [
    {
      description: "Progressive radical model",
      name: "Account International incidunt",
      parameters: {
        "eum": "Meadows",
      },
    },
  ],
  logitBias: {
    "eos": 206153,
  },
  maxTokens: 29019,
  messages: [
    {
      content: "Northeast frictionless Park",
      functionCall: {
        arguments: "Future Southeast",
        name: "Southeast",
      },
      name: "Faso",
      role: ChatCompletionRequestMessageRole.User,
    },
  ],
  model: "gpt-3.5-turbo",
  n: 1,
  presencePenalty: 9408.67,
  stop: [
    "tangible",
  ],
  stream: false,
  temperature: 1,
  topP: 1,
  user: "user-1234",
}).then((res: CreateChatCompletionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CreateChatCompletionRequest](../../models/shared/createchatcompletionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateChatCompletionResponse](../../models/operations/createchatcompletionresponse.md)>**


## createCompletion

Creates a completion for the provided prompt and parameters.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateCompletionRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createCompletion({
  bestOf: 160667,
  echo: false,
  frequencyPenalty: 141.61,
  logitBias: {
    "velit": 254881,
  },
  logprobs: 877910,
  maxTokens: 16,
  model: CreateCompletionRequestModel2.TextCurie001,
  n: 1,
  presencePenalty: 7232.16,
  prompt: "This is a test.",
  stop: [
    "[\"\n\"]",
  ],
  stream: false,
  suffix: "test.",
  temperature: 1,
  topP: 1,
  user: "user-1234",
}).then((res: CreateCompletionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.CreateCompletionRequest](../../models/shared/createcompletionrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateCompletionResponse](../../models/operations/createcompletionresponse.md)>**


## ~~createEdit~~

Creates a new edit for the provided input, instruction, and parameters.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateEditRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createEdit({
  input: "What day of the wek is it?",
  instruction: "Fix the spelling mistakes.",
  model: "text-davinci-edit-001",
  n: 1,
  temperature: 1,
  topP: 1,
}).then((res: CreateEditResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.CreateEditRequest](../../models/shared/createeditrequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateEditResponse](../../models/operations/createeditresponse.md)>**


## createEmbedding

Creates an embedding vector representing the input text.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEmbeddingResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateEmbeddingRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createEmbedding({
  input: [
    [
      115613,
    ],
  ],
  model: CreateEmbeddingRequestModel2.TextEmbeddingAda002,
  user: "user-1234",
}).then((res: CreateEmbeddingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateEmbeddingRequest](../../models/shared/createembeddingrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateEmbeddingResponse](../../models/operations/createembeddingresponse.md)>**


## createFile

Upload a file that can be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please [contact us](https://help.openai.com/) if you need to increase the storage limit.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createFile({
  file: {
    content: "`'$Z`(L/RH" as bytes <<<>>>,
    file: "Rap National",
  },
  purpose: "Female synergistic Maine",
}).then((res: CreateFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.CreateFileRequest](../../models/shared/createfilerequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateFileResponse](../../models/operations/createfileresponse.md)>**


## ~~createFineTune~~

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateFineTuneRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createFineTune({
  batchSize: 763928,
  classificationBetas: [
    3993.02,
  ],
  classificationNClasses: 172686,
  classificationPositiveClass: "male Buckinghamshire",
  computeClassificationMetrics: false,
  learningRateMultiplier: 4447.26,
  model: CreateFineTuneRequestModel2.Curie,
  nEpochs: 441380,
  promptLossWeight: 37.22,
  suffix: "Reggae Gorgeous synthesizing",
  trainingFile: "file-abc123",
  validationFile: "file-abc123",
}).then((res: CreateFineTuneResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.CreateFineTuneRequest](../../models/shared/createfinetunerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateFineTuneResponse](../../models/operations/createfinetuneresponse.md)>**


## createFineTuningJob

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateFineTuningJobResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import {
  CreateFineTuningJobRequestHyperparametersNEpochs1,
  CreateFineTuningJobRequestModel2,
} from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createFineTuningJob({
  hyperparameters: {
    nEpochs: CreateFineTuningJobRequestHyperparametersNEpochs1.Auto,
  },
  model: "gpt-3.5-turbo",
  suffix: "Thallium",
  trainingFile: "file-abc123",
  validationFile: "file-abc123",
}).then((res: CreateFineTuningJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.CreateFineTuningJobRequest](../../models/shared/createfinetuningjobrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateFineTuningJobResponse](../../models/operations/createfinetuningjobresponse.md)>**


## createImage

Creates an image given a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateImageRequestResponseFormat, CreateImageRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createImage({
  n: 1,
  prompt: "A cute baby sea otter",
  responseFormat: CreateImageRequestResponseFormat.Url,
  size: CreateImageRequestSize.OneThousandAndTwentyFourx1024,
  user: "user-1234",
}).then((res: CreateImageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateImageRequest](../../models/shared/createimagerequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateImageResponse](../../models/operations/createimageresponse.md)>**


## createImageEdit

Creates an edited or extended image given an original image and a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateImageEditRequestResponseFormat, CreateImageEditRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createImageEdit({
  image: {
    content: "0]/(|3W_T9" as bytes <<<>>>,
    image: "https://loremflickr.com/640/480",
  },
  mask: {
    content: "`^YjrpxopK" as bytes <<<>>>,
    mask: "Rap Dodge Incredible",
  },
  n: 1,
  prompt: "A cute baby sea otter wearing a beret",
  responseFormat: CreateImageEditRequestResponseFormat.Url,
  size: CreateImageEditRequestSize.OneThousandAndTwentyFourx1024,
  user: "user-1234",
}).then((res: CreateImageEditResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateImageEditRequest](../../models/shared/createimageeditrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateImageEditResponse](../../models/operations/createimageeditresponse.md)>**


## createImageVariation

Creates a variation of a given image.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageVariationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateImageVariationRequestResponseFormat, CreateImageVariationRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createImageVariation({
  image: {
    content: "`YY7PCrWuK" as bytes <<<>>>,
    image: "https://loremflickr.com/640/480",
  },
  n: 1,
  responseFormat: CreateImageVariationRequestResponseFormat.Url,
  size: CreateImageVariationRequestSize.OneThousandAndTwentyFourx1024,
  user: "user-1234",
}).then((res: CreateImageVariationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CreateImageVariationRequest](../../models/shared/createimagevariationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateImageVariationResponse](../../models/operations/createimagevariationresponse.md)>**


## createModeration

Classifies if text violates OpenAI's Content Policy

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateModerationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateModerationRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createModeration({
  input: [
    "I want to kill them.",
  ],
  model: CreateModerationRequestModel2.TextModerationStable,
}).then((res: CreateModerationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.CreateModerationRequest](../../models/shared/createmoderationrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateModerationResponse](../../models/operations/createmoderationresponse.md)>**


## createTranscription

Transcribes audio into the input language.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranscriptionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateTranscriptionRequestModel2, CreateTranscriptionRequestResponseFormat } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createTranscription({
  file: {
    content: "\#BbTW'zX9" as bytes <<<>>>,
    file: "Buckinghamshire",
  },
  language: "teal Titanium",
  model: "whisper-1",
  prompt: "Mendelevium Kansas behind",
  responseFormat: CreateTranscriptionRequestResponseFormat.Json,
  temperature: 3694.44,
}).then((res: CreateTranscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.CreateTranscriptionRequest](../../models/shared/createtranscriptionrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateTranscriptionResponse](../../models/operations/createtranscriptionresponse.md)>**


## createTranslation

Translates audio into English.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranslationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateTranslationRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.createTranslation({
  file: {
    content: "M57UL;W3rx" as bytes <<<>>>,
    file: "Reggae Toys silver",
  },
  model: CreateTranslationRequestModel2.Whisper1,
  prompt: "Soft East Frozen",
  responseFormat: "Analyst aboard relocate",
  temperature: 6003.73,
}).then((res: CreateTranslationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.CreateTranslationRequest](../../models/shared/createtranslationrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateTranslationResponse](../../models/operations/createtranslationresponse.md)>**


## deleteFile

Delete a file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.deleteFile({
  fileId: "yellow kiddingly white",
}).then((res: DeleteFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteFileRequest](../../models/operations/deletefilerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteFileResponse](../../models/operations/deletefileresponse.md)>**


## deleteModel

Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteModelResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.deleteModel({
  model: "ft:gpt-3.5-turbo:acemeco:suffix:abc123",
}).then((res: DeleteModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.DeleteModelRequest](../../models/operations/deletemodelrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.DeleteModelResponse](../../models/operations/deletemodelresponse.md)>**


## downloadFile

Returns the contents of the specified file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DownloadFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.downloadFile({
  fileId: "Maserati Bronze Audi",
}).then((res: DownloadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.DownloadFileRequest](../../models/operations/downloadfilerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.DownloadFileResponse](../../models/operations/downloadfileresponse.md)>**


## listFiles

Returns a list of files that belong to the user's organization.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFilesResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.listFiles().then((res: ListFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListFilesResponse](../../models/operations/listfilesresponse.md)>**


## ~~listFineTuneEvents~~

Get fine-grained status updates for a fine-tune job.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFineTuneEventsResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.listFineTuneEvents({
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
  stream: false,
}).then((res: ListFineTuneEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { ListFineTunesResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.listFineTunes().then((res: ListFineTunesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListFineTunesResponse](../../models/operations/listfinetunesresponse.md)>**


## listFineTuningEvents

Get status updates for a fine-tuning job.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFineTuningEventsResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.listFineTuningEvents({
  after: "phew silver Consultant",
  fineTuningJobId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
  limit: 104325,
}).then((res: ListFineTuningEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListFineTuningEventsRequest](../../models/operations/listfinetuningeventsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListFineTuningEventsResponse](../../models/operations/listfinetuningeventsresponse.md)>**


## listModels

Lists the currently available models, and provides basic information about each one such as the owner and availability.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListModelsResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.listModels().then((res: ListModelsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListModelsResponse](../../models/operations/listmodelsresponse.md)>**


## listPaginatedFineTuningJobs

List your organization's fine-tuning jobs


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListPaginatedFineTuningJobsResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.listPaginatedFineTuningJobs({
  after: "GB voluptate",
  limit: 374490,
}).then((res: ListPaginatedFineTuningJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.ListPaginatedFineTuningJobsRequest](../../models/operations/listpaginatedfinetuningjobsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ListPaginatedFineTuningJobsResponse](../../models/operations/listpaginatedfinetuningjobsresponse.md)>**


## retrieveFile

Returns information about a specific file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.retrieveFile({
  fileId: "online Facilitator enfold",
}).then((res: RetrieveFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.RetrieveFileRequest](../../models/operations/retrievefilerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.RetrieveFileResponse](../../models/operations/retrievefileresponse.md)>**


## ~~retrieveFineTune~~

Gets info about the fine-tune job.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.retrieveFineTune({
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
}).then((res: RetrieveFineTuneResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RetrieveFineTuneRequest](../../models/operations/retrievefinetunerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RetrieveFineTuneResponse](../../models/operations/retrievefinetuneresponse.md)>**


## retrieveFineTuningJob

Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFineTuningJobResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.retrieveFineTuningJob({
  fineTuningJobId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
}).then((res: RetrieveFineTuningJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RetrieveFineTuningJobRequest](../../models/operations/retrievefinetuningjobrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RetrieveFineTuningJobResponse](../../models/operations/retrievefinetuningjobresponse.md)>**


## retrieveModel

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveModelResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt({
  security: {
    apiKeyAuth: "",
  },
});

sdk.openAI.retrieveModel({
  model: "gpt-3.5-turbo",
}).then((res: RetrieveModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.RetrieveModelRequest](../../models/operations/retrievemodelrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RetrieveModelResponse](../../models/operations/retrievemodelresponse.md)>**

