# openAI

## Overview

The OpenAI REST API

### Available Operations

* [cancelFineTune](#cancelfinetune) - Immediately cancel a fine-tune job.

* [~~createAnswer~~](#createanswer) - Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).
 :warning: **Deprecated**
* [createChatCompletion](#createchatcompletion) - Creates a model response for the given chat conversation.
* [~~createClassification~~](#createclassification) - Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.
 :warning: **Deprecated**
* [createCompletion](#createcompletion) - Creates a completion for the provided prompt and parameters.
* [createEdit](#createedit) - Creates a new edit for the provided input, instruction, and parameters.
* [createEmbedding](#createembedding) - Creates an embedding vector representing the input text.
* [createFile](#createfile) - Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.

* [createFineTune](#createfinetune) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* [createImage](#createimage) - Creates an image given a prompt.
* [createImageEdit](#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](#createimagevariation) - Creates a variation of a given image.
* [createModeration](#createmoderation) - Classifies if text violates OpenAI's Content Policy
* [~~createSearch~~](#createsearch) - The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.
 :warning: **Deprecated**
* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into into English.
* [deleteFile](#deletefile) - Delete a file.
* [deleteModel](#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization.
* [downloadFile](#downloadfile) - Returns the contents of the specified file
* [~~listEngines~~](#listengines) - Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability. :warning: **Deprecated**
* [listFiles](#listfiles) - Returns a list of files that belong to the user's organization.
* [listFineTuneEvents](#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.

* [listFineTunes](#listfinetunes) - List your organization's fine-tuning jobs

* [listModels](#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [~~retrieveEngine~~](#retrieveengine) - Retrieves a model instance, providing basic information about it such as the owner and availability. :warning: **Deprecated**
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


## ~~createAnswer~~

Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateAnswerResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createAnswer({
  documents: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  examples: [
    [
      "corrupti",
      "illum",
      "vel",
      "error",
    ],
    [
      "suscipit",
      "iure",
      "magnam",
    ],
    [
      "ipsa",
      "delectus",
      "tempora",
      "suscipit",
    ],
  ],
  examplesContext: "Ottawa, Canada's capital, is located in the east of southern Ontario, near the city of Montréal and the U.S. border.",
  expand: [
    "minus",
    "placeat",
  ],
  file: "voluptatum",
  logitBias: "iusto",
  logprobs: 568045,
  maxRerank: 392785,
  maxTokens: 925597,
  model: "temporibus",
  n: 71036,
  question: "What is the capital of Japan?",
  returnMetadata: "quis",
  returnPrompt: false,
  searchModel: "veritatis",
  stop: [
    "["\n"]",
  ],
  temperature: 3682.41,
  user: "repellendus",
}).then((res: CreateAnswerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateAnswerRequest](../../models/shared/createanswerrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateAnswerResponse](../../models/operations/createanswerresponse.md)>**


## createChatCompletion

Creates a model response for the given chat conversation.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateChatCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import {
  ChatCompletionRequestMessageRole,
  ChatCompletionResponseMessageRole,
  CreateChatCompletionRequestFunctionCall1,
  CreateChatCompletionResponseChoicesFinishReason,
} from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createChatCompletion({
  frequencyPenalty: 9571.56,
  functionCall: {
    name: "Teri Strosin",
  },
  functions: [
    {
      description: "quod",
      name: "Deanna Sauer MD",
      parameters: {
        "occaecati": "fugit",
        "deleniti": "hic",
        "optio": "totam",
      },
    },
    {
      description: "beatae",
      name: "Tanya Gleason",
      parameters: {
        "esse": "ipsum",
        "excepturi": "aspernatur",
        "perferendis": "ad",
      },
    },
    {
      description: "natus",
      name: "Sheryl Fadel",
      parameters: {
        "saepe": "fuga",
        "in": "corporis",
        "iste": "iure",
        "saepe": "quidem",
      },
    },
    {
      description: "architecto",
      name: "Lela Orn",
      parameters: {
        "dolorem": "corporis",
      },
    },
  ],
  logitBias: {},
  maxTokens: 128926,
  messages: [
    {
      content: "enim",
      functionCall: {
        arguments: "omnis",
        name: "Ms. Cathy Marks",
      },
      name: "Darrin Brakus",
      role: ChatCompletionRequestMessageRole.Assistant,
    },
    {
      content: "consequuntur",
      functionCall: {
        arguments: "repellat",
        name: "Tracy Fritsch",
      },
      name: "Shannon Mueller",
      role: ChatCompletionRequestMessageRole.System,
    },
    {
      content: "laborum",
      functionCall: {
        arguments: "animi",
        name: "Christina Satterfield",
      },
      name: "Mr. Alberta Schuster",
      role: ChatCompletionRequestMessageRole.Function,
    },
    {
      content: "laborum",
      functionCall: {
        arguments: "quasi",
        name: "Jan Thiel",
      },
      name: "Jose Moen",
      role: ChatCompletionRequestMessageRole.System,
    },
  ],
  model: "doloremque",
  n: 1,
  presencePenalty: 4417.11,
  stop: "maiores",
  stream: false,
  temperature: 1,
  topP: 1,
  user: "dicta",
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


## ~~createClassification~~

Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateClassificationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createClassification({
  examples: [
    [
      "iusto",
      "dicta",
    ],
    [
      "enim",
      "accusamus",
      "commodi",
    ],
  ],
  expand: "repudiandae",
  file: "quae",
  labels: [
    "quidem",
  ],
  logitBias: "molestias",
  logprobs: "excepturi",
  maxExamples: 865103,
  model: "modi",
  query: "The plot is not very attractive.",
  returnMetadata: "praesentium",
  returnPrompt: "rem",
  searchModel: "voluptates",
  temperature: 0,
  user: "quasi",
}).then((res: CreateClassificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CreateClassificationRequest](../../models/shared/createclassificationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateClassificationResponse](../../models/operations/createclassificationresponse.md)>**


## createCompletion

Creates a completion for the provided prompt and parameters.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateCompletionResponseChoicesFinishReason } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createCompletion({
  bestOf: 921158,
  echo: false,
  frequencyPenalty: 5759.47,
  logitBias: {},
  logprobs: 83112,
  maxTokens: 16,
  model: "itaque",
  n: 1,
  presencePenalty: 2777.18,
  prompt: [
    "This is a test.",
  ],
  stop: [
    "["\n"]",
    "["\n"]",
    "["\n"]",
    "["\n"]",
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


## createEdit

Creates a new edit for the provided input, instruction, and parameters.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateEditResponseChoicesFinishReason } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createEdit({
  input: "What day of the wek is it?",
  instruction: "Fix the spelling mistakes.",
  model: "explicabo",
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

const sdk = new Gpt();

sdk.openAI.createEmbedding({
  input: [
    841386,
    289406,
    264730,
  ],
  model: "qui",
  user: "aliquid",
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
    content: "cupiditate".encode(),
    file: "quos",
  },
  purpose: "perferendis",
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

const sdk = new Gpt();

sdk.openAI.createFineTune({
  batchSize: 164940,
  classificationBetas: [
    3698.08,
    46.95,
    1464.41,
    6778.17,
  ],
  classificationNClasses: 569618,
  classificationPositiveClass: "tempora",
  computeClassificationMetrics: false,
  learningRateMultiplier: 7037.37,
  model: "tempore",
  nEpochs: 288476,
  promptLossWeight: 9621.89,
  suffix: "eum",
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
  user: "non",
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

const sdk = new Gpt();

sdk.openAI.createImageEdit({
  image: {
    content: "eligendi".encode(),
    image: "sint",
  },
  mask: {
    content: "aliquid".encode(),
    mask: "provident",
  },
  n: "necessitatibus",
  prompt: "A cute baby sea otter wearing a beret",
  responseFormat: "sint",
  size: "officia",
  user: "dolor",
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

const sdk = new Gpt();

sdk.openAI.createImageVariation({
  image: {
    content: "debitis".encode(),
    image: "a",
  },
  n: "dolorum",
  responseFormat: "in",
  size: "in",
  user: "illum",
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

const sdk = new Gpt();

sdk.openAI.createModeration({
  input: [
    "I want to kill them.",
    "I want to kill them.",
    "I want to kill them.",
  ],
  model: "text-moderation-stable",
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


## ~~createSearch~~

The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateSearchResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createSearch({
  createSearchRequest: {
    documents: [
      "magnam",
    ],
    file: "cumque",
    maxRerank: 813798,
    query: "the president",
    returnMetadata: false,
    user: "ea",
  },
  engineId: "davinci",
}).then((res: CreateSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateSearchRequest](../../models/operations/createsearchrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateSearchResponse](../../models/operations/createsearchresponse.md)>**


## createTranscription

Transcribes audio into the input language.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranscriptionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createTranscription({
  file: {
    content: "aliquid".encode(),
    file: "laborum",
  },
  language: "accusamus",
  model: "non",
  prompt: "occaecati",
  responseFormat: "enim",
  temperature: 8817.36,
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

Translates audio into into English.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranslationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createTranslation({
  file: {
    content: "delectus".encode(),
    file: "quidem",
  },
  model: "provident",
  prompt: "nam",
  responseFormat: "id",
  temperature: 5013.24,
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
  fileId: "deleniti",
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
  fileId: "sapiente",
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


## ~~listEngines~~

Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListEnginesResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.listEngines().then((res: ListEnginesResponse) => {
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

**Promise<[operations.ListEnginesResponse](../../models/operations/listenginesresponse.md)>**


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


## ~~retrieveEngine~~

Retrieves a model instance, providing basic information about it such as the owner and availability.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveEngineResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.retrieveEngine({
  engineId: "davinci",
}).then((res: RetrieveEngineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.RetrieveEngineRequest](../../models/operations/retrieveenginerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.RetrieveEngineResponse](../../models/operations/retrieveengineresponse.md)>**


## retrieveFile

Returns information about a specific file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.retrieveFile({
  fileId: "amet",
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

