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
import { CancelFineTuneRequest, CancelFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: CancelFineTuneRequest = {
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
};

sdk.openAI.cancelFineTune(req).then((res: CancelFineTuneResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { CreateAnswerRequest, CreateAnswerResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateAnswerRequest = {
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
};

sdk.openAI.createAnswer(req).then((res: CreateAnswerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createChatCompletion

Creates a completion for the chat message

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateChatCompletionRequest, CreateChatCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { ChatCompletionRequestMessageRoleEnum, ChatCompletionResponseMessageRoleEnum } from "@speakeasy-api/openai/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateChatCompletionRequest = {
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
};

sdk.openAI.createChatCompletion(req).then((res: CreateChatCompletionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { CreateClassificationRequest, CreateClassificationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateClassificationRequest = {
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
};

sdk.openAI.createClassification(req).then((res: CreateClassificationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createCompletion

Creates a completion for the provided prompt and parameters

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateCompletionRequest, CreateCompletionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateCompletionRequest = {
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
};

sdk.openAI.createCompletion(req).then((res: CreateCompletionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createEdit

Creates a new edit for the provided input, instruction, and parameters.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEditRequest, CreateEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateEditRequest = {
  input: "What day of the wek is it?",
  instruction: "Fix the spelling mistakes.",
  model: "enim",
  n: 1,
  temperature: 1,
  topP: 1,
};

sdk.openAI.createEdit(req).then((res: CreateEditResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createEmbedding

Creates an embedding vector representing the input text.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateEmbeddingRequest, CreateEmbeddingResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateEmbeddingRequest = {
  input: "This is a test.",
  model: "quo",
  user: "sequi",
};

sdk.openAI.createEmbedding(req).then((res: CreateEmbeddingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createFile

Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateFileRequest, CreateFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateFileRequest = {
  file: {
    content: "tenetur".encode(),
    file: "ipsam",
  },
  purpose: "id",
};

sdk.openAI.createFile(req).then((res: CreateFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { CreateFineTuneRequest, CreateFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateFineTuneRequest = {
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
};

sdk.openAI.createFineTune(req).then((res: CreateFineTuneResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createImage

Creates an image given a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageRequest, CreateImageResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateImageRequestResponseFormatEnum, CreateImageRequestSizeEnum } from "@speakeasy-api/openai/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateImageRequest = {
  n: 1,
  prompt: "A cute baby sea otter",
  responseFormat: CreateImageRequestResponseFormatEnum.Url,
  size: CreateImageRequestSizeEnum.OneThousandAndTwentyFourx1024,
  user: "nihil",
};

sdk.openAI.createImage(req).then((res: CreateImageResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createImageEdit

Creates an edited or extended image given an original image and a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageEditRequest, CreateImageEditResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateImageEditRequest = {
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
};

sdk.openAI.createImageEdit(req).then((res: CreateImageEditResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createImageVariation

Creates a variation of a given image.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageVariationRequest, CreateImageVariationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateImageVariationRequest = {
  image: {
    content: "reprehenderit".encode(),
    image: "ut",
  },
  n: "maiores",
  responseFormat: "dicta",
  size: "corporis",
  user: "dolore",
};

sdk.openAI.createImageVariation(req).then((res: CreateImageVariationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createModeration

Classifies if text violates OpenAI's Content Policy

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateModerationRequest, CreateModerationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateModerationRequest = {
  input: "I want to kill them.",
  model: "text-moderation-stable",
};

sdk.openAI.createModeration(req).then((res: CreateModerationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { CreateSearchRequest, CreateSearchResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: CreateSearchRequest = {
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
};

sdk.openAI.createSearch(req).then((res: CreateSearchResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createTranscription

Transcribes audio into the input language.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranscriptionRequest, CreateTranscriptionResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateTranscriptionRequest = {
  file: {
    content: "repudiandae".encode(),
    file: "quae",
  },
  language: "ipsum",
  model: "quidem",
  prompt: "molestias",
  responseFormat: "excepturi",
  temperature: 8651.03,
};

sdk.openAI.createTranscription(req).then((res: CreateTranscriptionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createTranslation

Translates audio into into English.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranslationRequest, CreateTranslationResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: shared.CreateTranslationRequest = {
  file: {
    content: "modi".encode(),
    file: "praesentium",
  },
  model: "rem",
  prompt: "voluptates",
  responseFormat: "quasi",
  temperature: 9211.58,
};

sdk.openAI.createTranslation(req).then((res: CreateTranslationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteFile

Delete a file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteFileRequest, DeleteFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: DeleteFileRequest = {
  fileId: "sint",
};

sdk.openAI.deleteFile(req).then((res: DeleteFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteModel

Delete a fine-tuned model. You must have the Owner role in your organization.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteModelRequest, DeleteModelResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: DeleteModelRequest = {
  model: "curie:ft-acmeco-2021-03-03-21-44-20",
};

sdk.openAI.deleteModel(req).then((res: DeleteModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadFile

Returns the contents of the specified file

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DownloadFileRequest, DownloadFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: DownloadFileRequest = {
  fileId: "veritatis",
};

sdk.openAI.downloadFile(req).then((res: DownloadFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new Gpt();

sdk.openAI.listEngines().then((res: ListEnginesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new Gpt();

sdk.openAI.listFiles().then((res: ListFilesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listFineTuneEvents

Get fine-grained status updates for a fine-tune job.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListFineTuneEventsRequest, ListFineTuneEventsResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: ListFineTuneEventsRequest = {
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
  stream: false,
};

sdk.openAI.listFineTuneEvents(req).then((res: ListFineTuneEventsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new Gpt();

sdk.openAI.listFineTunes().then((res: ListFineTunesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new Gpt();

sdk.openAI.listModels().then((res: ListModelsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveEngine

Retrieves a model instance, providing basic information about it such as the owner and availability.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveEngineRequest, RetrieveEngineResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: RetrieveEngineRequest = {
  engineId: "davinci",
};

sdk.openAI.retrieveEngine(req).then((res: RetrieveEngineResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveFile

Returns information about a specific file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFileRequest, RetrieveFileResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: RetrieveFileRequest = {
  fileId: "itaque",
};

sdk.openAI.retrieveFile(req).then((res: RetrieveFileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { RetrieveFineTuneRequest, RetrieveFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: RetrieveFineTuneRequest = {
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
};

sdk.openAI.retrieveFineTune(req).then((res: RetrieveFineTuneResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## retrieveModel

Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveModelRequest, RetrieveModelResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: RetrieveModelRequest = {
  model: "text-davinci-001",
};

sdk.openAI.retrieveModel(req).then((res: RetrieveModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
