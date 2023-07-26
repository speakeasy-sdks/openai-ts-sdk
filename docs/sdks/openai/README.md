# openAI

## Overview

The OpenAI REST API

### Available Operations

* [cancelFineTune](#cancelfinetune) - Immediately cancel a fine-tune job.

* [createChatCompletion](#createchatcompletion) - Creates a model response for the given chat conversation.
* [createCompletion](#createcompletion) - Creates a completion for the provided prompt and parameters.
* [~~createEdit~~](#createedit) - Creates a new edit for the provided input, instruction, and parameters. :warning: **Deprecated**
* [createEmbedding](#createembedding) - Creates an embedding vector representing the input text.
* [createFile](#createfile) - Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.

* [createFineTune](#createfinetune) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* [createImage](#createimage) - Creates an image given a prompt.
* [createImageEdit](#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](#createimagevariation) - Creates a variation of a given image.
* [createModeration](#createmoderation) - Classifies if text violates OpenAI's Content Policy
* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into English.
* [deleteFile](#deletefile) - Delete a file.
* [deleteModel](#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization.
* [downloadFile](#downloadfile) - Returns the contents of the specified file
* [listFiles](#listfiles) - Returns a list of files that belong to the user's organization.
* [listFineTuneEvents](#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.

* [listFineTunes](#listfinetunes) - List your organization's fine-tuning jobs

* [listModels](#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [retrieveFile](#retrievefile) - Returns information about a specific file.
* [retrieveFineTune](#retrievefinetune) - Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* [retrieveModel](#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

## cancelFineTune

Immediately cancel a fine-tune job.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

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

const sdk = new Gpt();

sdk.openAI.createChatCompletion({
  frequencyPenalty: 5488.14,
  functionCall: {
    name: "Ellis Mitchell",
  },
  functions: [
    {
      description: "vel",
      name: "Doug Hoppe",
      parameters: {
        "ipsa": "delectus",
        "tempora": "suscipit",
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
    },
    {
      description: "iusto",
      name: "Charlie Walsh II",
      parameters: {
        "deserunt": "perferendis",
      },
    },
    {
      description: "ipsam",
      name: "Timmy Satterfield",
      parameters: {
        "maiores": "molestiae",
        "quod": "quod",
        "esse": "totam",
        "porro": "dolorum",
      },
    },
    {
      description: "dicta",
      name: "Luke McCullough",
      parameters: {
        "optio": "totam",
        "beatae": "commodi",
        "molestiae": "modi",
        "qui": "impedit",
      },
    },
  ],
  logitBias: {
    "esse": 216550,
    "excepturi": 135218,
    "perferendis": 324141,
  },
  maxTokens: 617636,
  messages: [
    {
      content: "iste",
      functionCall: {
        arguments: "dolor",
        name: "Lester Welch",
      },
      name: "Stacy Moore",
      role: ChatCompletionRequestMessageRole.Assistant,
    },
  ],
  model: "gpt-3.5-turbo",
  n: 1,
  presencePenalty: 602.25,
  stop: [
    "mollitia",
    "laborum",
    "dolores",
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

const sdk = new Gpt();

sdk.openAI.createCompletion({
  bestOf: 210382,
  echo: false,
  frequencyPenalty: 3581.52,
  logitBias: {
    "nobis": 315428,
  },
  logprobs: 607831,
  maxTokens: 16,
  model: "minima",
  n: 1,
  presencePenalty: 5701.97,
  prompt: "This is a test.",
  stop: "
",
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

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateEditRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createEdit({
  input: "What day of the wek is it?",
  instruction: "Fix the spelling mistakes.",
  model: CreateEditRequestModel2.TextDavinciEdit001,
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

const sdk = new Gpt();

sdk.openAI.createEmbedding({
  input: [
    [
      652790,
    ],
    [
      635059,
    ],
    [
      995300,
    ],
    [
      581850,
      253291,
      414369,
    ],
  ],
  model: "text-embedding-ada-002",
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

Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createFile({
  file: {
    content: "molestiae".encode(),
    file: "velit",
  },
  purpose: "error",
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


## createFineTune

Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateFineTuneRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createFineTune({
  batchSize: 158969,
  classificationBetas: [
    1103.75,
    6747.52,
  ],
  classificationNClasses: 656330,
  classificationPositiveClass: "enim",
  computeClassificationMetrics: false,
  learningRateMultiplier: 1381.83,
  model: CreateFineTuneRequestModel2.Curie,
  nEpochs: 196582,
  promptLossWeight: 9495.72,
  suffix: "ipsam",
  trainingFile: "file-ajSREls59WBbvgSzJSVWxMCB",
  validationFile: "file-XjSREls59WBbvgSzJSVWxMCa",
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


## createImage

Creates an image given a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateImageRequestResponseFormat, CreateImageRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

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

const sdk = new Gpt();

sdk.openAI.createImageEdit({
  image: {
    content: "id".encode(),
    image: "possimus",
  },
  mask: {
    content: "aut".encode(),
    mask: "quasi",
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

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.CreateImageEditRequest2](../../models/shared/createimageeditrequest2.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateImageEditResponse](../../models/operations/createimageeditresponse.md)>**


## createImageVariation

Creates a variation of a given image.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageVariationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateImageVariationRequestResponseFormat, CreateImageVariationRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createImageVariation({
  image: {
    content: "error".encode(),
    image: "temporibus",
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.CreateImageVariationRequest2](../../models/shared/createimagevariationrequest2.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateImageVariationResponse](../../models/operations/createimagevariationresponse.md)>**


## createModeration

Classifies if text violates OpenAI's Content Policy

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateModerationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateModerationRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

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

const sdk = new Gpt();

sdk.openAI.createTranscription({
  file: {
    content: "voluptatibus".encode(),
    file: "vero",
  },
  language: "nihil",
  model: CreateTranscriptionRequestModel2.Whisper1,
  prompt: "voluptatibus",
  responseFormat: CreateTranscriptionRequestResponseFormat.Json,
  temperature: 6048.46,
}).then((res: CreateTranscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CreateTranscriptionRequest1](../../models/shared/createtranscriptionrequest1.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateTranscriptionResponse](../../models/operations/createtranscriptionresponse.md)>**


## createTranslation

Translates audio into English.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranslationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateTranslationRequestModel2 } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createTranslation({
  file: {
    content: "voluptate".encode(),
    file: "cum",
  },
  model: "whisper-1",
  prompt: "doloremque",
  responseFormat: "reprehenderit",
  temperature: 2828.07,
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

const sdk = new Gpt();

sdk.openAI.deleteFile({
  fileId: "maiores",
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

Delete a fine-tuned model. You must have the Owner role in your organization.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteModelResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.deleteModel({
  model: "curie:ft-acmeco-2021-03-03-21-44-20",
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

Returns the contents of the specified file

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DownloadFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.downloadFile({
  fileId: "dicta",
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

const sdk = new Gpt();

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


## listFineTuneEvents

Get fine-grained status updates for a fine-tune job.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFineTuneEventsResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

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


## listFineTunes

List your organization's fine-tuning jobs


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFineTunesResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

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


## listModels

Lists the currently available models, and provides basic information about each one such as the owner and availability.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListModelsResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

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


## retrieveFile

Returns information about a specific file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.retrieveFile({
  fileId: "corporis",
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


## retrieveFineTune

Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

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


## retrieveModel

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveModelResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.retrieveModel({
  model: "text-davinci-001",
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

