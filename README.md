# OpenAPI Node SDK

![OpenAI_Logo_Black](https://user-images.githubusercontent.com/6267663/220744241-48f469af-40b6-4d7f-ab48-8426b30189f0.svg#gh-light-mode-only)
![OpenAI_Logo_White](https://user-images.githubusercontent.com/6267663/220744513-66c99d0e-ed91-4577-982f-e7128d35ce95.svg#gh-dark-mode-only)

<div align="center">
   <p><strong>This is an unofficial SDK for the OpenAI API.</strong> The OpenAI API can be applied to virtually any task that involves understanding or generating natural language or code. We offer a spectrum of models with different levels of power suitable for different tasks, as well as the ability to fine-tune your own custom models. These models can be used for everything from content generation to semantic search and classification.</p>
   <a href="https://github.com/speakeasy-sdks/openai-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/openai-ts-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
   <a href="https://platform.openai.com/docs/introduction"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=2ca47c&style=for-the-badge" /></a>
</div> 

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-api/openai
```

### Yarn

```bash
yarn add @speakeasy-api/openai
```
<!-- End SDK Installation -->

## Authentication

The OpenAI API uses API keys for authentication. Visit your API Keys page to retrieve the API key you'll use in your requests.

**Remember that your API key is a secret!** Do not share it with others or expose it in any client-side code (browsers, apps). Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.

All API requests should include your API key in an Authorization HTTP header as follows:

```bash
Authorization: Bearer YOUR_API_KEY
```

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CancelFineTuneRequest,
  CancelFineTuneResponse 
} from "@speakeasy-api/openai/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Openai } from "@speakeasy-api/openai";


const sdk = new Openai();
    
const req: CancelFineTuneRequest = {
  pathParams: {
    fineTuneId: "unde",
  },
};

sdk.openAI.cancelFineTune(req).then((res: CancelFineTuneResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### openAI

* `cancelFineTune` - Immediately cancel a fine-tune job.

* `createAnswer` - Answers the specified question using the provided documents and examples.

The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions).

* `createClassification` - Classifies the specified `query` using provided examples.

The endpoint first [searches](/docs/api-reference/searches) over the labeled examples
to select the ones most relevant for the particular query. Then, the relevant examples
are combined with the query to construct a prompt to produce the final label via the
[completions](/docs/api-reference/completions) endpoint.

Labeled examples can be provided via an uploaded `file`, or explicitly listed in the
request using the `examples` parameter for quick tests and small scale use cases.

* `createCompletion` - Creates a completion for the provided prompt and parameters
* `createEdit` - Creates a new edit for the provided input, instruction, and parameters
* `createEmbedding` - Creates an embedding vector representing the input text.
* `createFile` - Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit.

* `createFineTune` - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* `createImage` - Creates an image given a prompt.
* `createImageEdit` - Creates an edited or extended image given an original image and a prompt.
* `createImageVariation` - Creates a variation of a given image.
* `createModeration` - Classifies if text violates OpenAI's Content Policy
* `createSearch` - The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.

To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.

The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query.

* `deleteFile` - Delete a file.
* `deleteModel` - Delete a fine-tuned model. You must have the Owner role in your organization.
* `downloadFile` - Returns the contents of the specified file
* `listEngines` - Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
* `listFiles` - Returns a list of files that belong to the user's organization.
* `listFineTuneEvents` - Get fine-grained status updates for a fine-tune job.

* `listFineTunes` - List your organization's fine-tuning jobs

* `listModels` - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* `retrieveEngine` - Retrieves a model instance, providing basic information about it such as the owner and availability.
* `retrieveFile` - Returns information about a specific file.
* `retrieveFineTune` - Gets info about the fine-tune job.

[Learn more about Fine-tuning](/docs/guides/fine-tuning)

* `retrieveModel` - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
