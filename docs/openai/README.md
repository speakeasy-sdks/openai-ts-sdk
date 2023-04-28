# openAI

## Overview

The OpenAI REST API

### Available Operations

* [cancelFineTune](#cancelfinetune) - Immediately cancel a fine-tune job.

* [createAnswer](#createanswer) - Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).

* [createChatCompletion](#createchatcompletion) - Creates a completion for the chat message
* [createClassification](#createclassification) - Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.

* [createCompletion](#createcompletion) - Creates a completion for the provided prompt and parameters
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
* [createSearch](#createsearch) - The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.

* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into into English.
* [deleteFile](#deletefile) - Delete a file.
* [deleteModel](#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization.
* [downloadFile](#downloadfile) - Returns the contents of the specified file
* [listEngines](#listengines) - Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
* [listFiles](#listfiles) - Returns a list of files that belong to the user's organization.
* [listFineTuneEvents](#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.

* [listFineTunes](#listfinetunes) - List your organization's fine-tuning jobs

* [listModels](#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [retrieveEngine](#retrieveengine) - Retrieves a model instance, providing basic information about it such as the owner and availability.
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

## createAnswer

Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).


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

## createChatCompletion

Creates a completion for the chat message

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateChatCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { ChatCompletionRequestMessageRoleEnum, ChatCompletionResponseMessageRoleEnum } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createChatCompletion({
  frequencyPenalty: 9571.56,
  logitBias: {
    "odit": "at",
    "at": "maiores",
    "molestiae": "quod",
    "quod": "esse",
  },
  maxTokens: 520478,
  messages: [
    {
      content: "dolorum",
      name: "Antoinette Nikolaus",
      role: ChatCompletionRequestMessageRoleEnum.User,
    },
    {
      content: "hic",
      name: "Everett Breitenberg",
      role: ChatCompletionRequestMessageRoleEnum.System,
    },
    {
      content: "qui",
      name: "Jonathon Klocko",
      role: ChatCompletionRequestMessageRoleEnum.System,
    },
    {
      content: "perferendis",
      name: "Faye Cormier",
      role: ChatCompletionRequestMessageRoleEnum.User,
    },
  ],
  model: "laboriosam",
  n: 1,
  presencePenalty: 9437.49,
  stop: [
    "in",
    "corporis",
    "iste",
  ],
  stream: false,
  temperature: 1,
  topP: 1,
  user: "iure",
}).then((res: CreateChatCompletionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createClassification

Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateClassificationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createClassification({
  examples: [
    [
      "architecto",
      "ipsa",
      "reiciendis",
    ],
    [
      "mollitia",
      "laborum",
      "dolores",
    ],
    [
      "corporis",
    ],
    [
      "nobis",
    ],
  ],
  expand: "enim",
  file: "omnis",
  labels: [
    "minima",
    "excepturi",
  ],
  logitBias: "accusantium",
  logprobs: "iure",
  maxExamples: 634274,
  model: "doloribus",
  query: "The plot is not very attractive.",
  returnMetadata: "sapiente",
  returnPrompt: "architecto",
  searchModel: "mollitia",
  temperature: 2088.76,
  user: "culpa",
}).then((res: CreateClassificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createCompletion

Creates a completion for the provided prompt and parameters

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createCompletion({
  bestOf: 161309,
  echo: false,
  frequencyPenalty: 9953,
  logitBias: {
    "occaecati": "numquam",
    "commodi": "quam",
    "molestiae": "velit",
  },
  logprobs: 623510,
  maxTokens: 16,
  model: "quia",
  n: 1,
  presencePenalty: 3380.07,
  prompt: "This is a test.",
  stop: [
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

## createEdit

Creates a new edit for the provided input, instruction, and parameters.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createEdit({
  input: "What day of the wek is it?",
  instruction: "Fix the spelling mistakes.",
  model: "enim",
  n: 1,
  temperature: 1,
  topP: 1,
}).then((res: CreateEditResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createEmbedding

Creates an embedding vector representing the input text.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEmbeddingResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createEmbedding({
  input: "This is a test.",
  model: "quo",
  user: "sequi",
}).then((res: CreateEmbeddingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createFile

Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createFile({
  file: {
    content: "tenetur".encode(),
    file: "ipsam",
  },
  purpose: "id",
}).then((res: CreateFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  batchSize: 820994,
  classificationBetas: [
    971.01,
  ],
  classificationNClasses: 622846,
  classificationPositiveClass: "temporibus",
  computeClassificationMetrics: false,
  learningRateMultiplier: 6736.6,
  model: "quasi",
  nEpochs: 971945,
  promptLossWeight: 9764.6,
  suffix: "vero",
  trainingFile: "file-ajSREls59WBbvgSzJSVWxMCB",
  validationFile: "file-XjSREls59WBbvgSzJSVWxMCa",
}).then((res: CreateFineTuneResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createImage

Creates an image given a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateImageRequestResponseFormatEnum, CreateImageRequestSizeEnum } from "@speakeasy-api/openai/dist/sdk/models/shared";

const sdk = new Gpt();

sdk.openAI.createImage({
  n: 1,
  prompt: "A cute baby sea otter",
  responseFormat: CreateImageRequestResponseFormatEnum.Url,
  size: CreateImageRequestSizeEnum.OneThousandAndTwentyFourx1024,
  user: "nihil",
}).then((res: CreateImageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createImageEdit

Creates an edited or extended image given an original image and a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createImageEdit({
  image: {
    content: "praesentium".encode(),
    image: "voluptatibus",
  },
  mask: {
    content: "ipsa".encode(),
    mask: "omnis",
  },
  n: "voluptate",
  prompt: "A cute baby sea otter wearing a beret",
  responseFormat: "cum",
  size: "perferendis",
  user: "doloremque",
}).then((res: CreateImageEditResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createImageVariation

Creates a variation of a given image.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageVariationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createImageVariation({
  image: {
    content: "reprehenderit".encode(),
    image: "ut",
  },
  n: "maiores",
  responseFormat: "dicta",
  size: "corporis",
  user: "dolore",
}).then((res: CreateImageVariationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createModeration

Classifies if text violates OpenAI's Content Policy

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateModerationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createModeration({
  input: "I want to kill them.",
  model: "text-moderation-stable",
}).then((res: CreateModerationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createSearch

The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateSearchResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createSearch({
  createSearchRequest: {
    documents: [
      "harum",
    ],
    file: "enim",
    maxRerank: 880476,
    query: "the president",
    returnMetadata: false,
    user: "commodi",
  },
  engineId: "davinci",
}).then((res: CreateSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTranscription

Transcribes audio into the input language.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranscriptionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createTranscription({
  file: {
    content: "repudiandae".encode(),
    file: "quae",
  },
  language: "ipsum",
  model: "quidem",
  prompt: "molestias",
  responseFormat: "excepturi",
  temperature: 8651.03,
}).then((res: CreateTranscriptionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## createTranslation

Translates audio into into English.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranslationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.createTranslation({
  file: {
    content: "modi".encode(),
    file: "praesentium",
  },
  model: "rem",
  prompt: "voluptates",
  responseFormat: "quasi",
  temperature: 9211.58,
}).then((res: CreateTranslationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteFile

Delete a file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.deleteFile({
  fileId: "sint",
}).then((res: DeleteFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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

## downloadFile

Returns the contents of the specified file

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DownloadFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.downloadFile({
  fileId: "veritatis",
}).then((res: DownloadFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listEngines

Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.

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

## retrieveEngine

Retrieves a model instance, providing basic information about it such as the owner and availability.

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

## retrieveFile

Returns information about a specific file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";

const sdk = new Gpt();

sdk.openAI.retrieveFile({
  fileId: "itaque",
}).then((res: RetrieveFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
