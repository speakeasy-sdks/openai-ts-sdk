# OpenAPI Node SDK

![OpenAI_Logo_Black](https://user-images.githubusercontent.com/6267663/220744241-48f469af-40b6-4d7f-ab48-8426b30189f0.svg#gh-light-mode-only)
![OpenAI_Logo_White](https://user-images.githubusercontent.com/6267663/220744513-66c99d0e-ed91-4577-982f-e7128d35ce95.svg#gh-dark-mode-only)

<div align="center">
   <p><strong>This is an unofficial SDK for the OpenAI API.</strong> The OpenAI API can be applied to virtually any task that involves understanding or generating natural language or code. We offer a spectrum of models with different levels of power suitable for different tasks, as well as the ability to fine-tune your own custom models. These models can be used for everything from content generation to semantic search and classification.</p>
   <a href="https://github.com/speakeasy-sdks/openai-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/openai-ts-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
   <a href="https://platform.openai.com/docs/introduction"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=2ca47c&style=for-the-badge" /></a>
</div> 

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @speakeasy-api/openai
```

### Yarn

```bash
yarn add @speakeasy-api/openai
```
<!-- End SDK Installation [installation] -->

## Authentication

The OpenAI API uses API keys for authentication. Visit your API Keys page to retrieve the API key you'll use in your requests.

**Remember that your API key is a secret!** Do not share it with others or expose it in any client-side code (browsers, apps). Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.

All API requests should include your API key in an Authorization HTTP header as follows:

```bash
Authorization: Bearer YOUR_API_KEY
```

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

async function run() {
    const sdk = new Gpt({
        apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const runId: string = "string";
    const threadId: string = "string";

    const res = await sdk.assistants.cancelRun(runId, threadId);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [assistants](docs/sdks/assistants/README.md)

* [cancelRun](docs/sdks/assistants/README.md#cancelrun) - Cancels a run that is `in_progress`.
* [createAssistant](docs/sdks/assistants/README.md#createassistant) - Create an assistant with a model and instructions.
* [createAssistantFile](docs/sdks/assistants/README.md#createassistantfile) - Create an assistant file by attaching a [File](/docs/api-reference/files) to an [assistant](/docs/api-reference/assistants).
* [createMessage](docs/sdks/assistants/README.md#createmessage) - Create a message.
* [createRun](docs/sdks/assistants/README.md#createrun) - Create a run.
* [createThread](docs/sdks/assistants/README.md#createthread) - Create a thread.
* [createThreadAndRun](docs/sdks/assistants/README.md#createthreadandrun) - Create a thread and run it in one request.
* [deleteAssistant](docs/sdks/assistants/README.md#deleteassistant) - Delete an assistant.
* [deleteAssistantFile](docs/sdks/assistants/README.md#deleteassistantfile) - Delete an assistant file.
* [deleteThread](docs/sdks/assistants/README.md#deletethread) - Delete a thread.
* [getAssistant](docs/sdks/assistants/README.md#getassistant) - Retrieves an assistant.
* [getAssistantFile](docs/sdks/assistants/README.md#getassistantfile) - Retrieves an AssistantFile.
* [getMessage](docs/sdks/assistants/README.md#getmessage) - Retrieve a message.
* [getMessageFile](docs/sdks/assistants/README.md#getmessagefile) - Retrieves a message file.
* [getRun](docs/sdks/assistants/README.md#getrun) - Retrieves a run.
* [getRunStep](docs/sdks/assistants/README.md#getrunstep) - Retrieves a run step.
* [getThread](docs/sdks/assistants/README.md#getthread) - Retrieves a thread.
* [listAssistantFiles](docs/sdks/assistants/README.md#listassistantfiles) - Returns a list of assistant files.
* [listAssistants](docs/sdks/assistants/README.md#listassistants) - Returns a list of assistants.
* [listMessageFiles](docs/sdks/assistants/README.md#listmessagefiles) - Returns a list of message files.
* [listMessages](docs/sdks/assistants/README.md#listmessages) - Returns a list of messages for a given thread.
* [listRunSteps](docs/sdks/assistants/README.md#listrunsteps) - Returns a list of run steps belonging to a run.
* [listRuns](docs/sdks/assistants/README.md#listruns) - Returns a list of runs belonging to a thread.
* [modifyAssistant](docs/sdks/assistants/README.md#modifyassistant) - Modifies an assistant.
* [modifyMessage](docs/sdks/assistants/README.md#modifymessage) - Modifies a message.
* [modifyRun](docs/sdks/assistants/README.md#modifyrun) - Modifies a run.
* [modifyThread](docs/sdks/assistants/README.md#modifythread) - Modifies a thread.
* [submitToolOuputsToRun](docs/sdks/assistants/README.md#submittoolouputstorun) - When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.


### [audio](docs/sdks/audio/README.md)

* [createSpeech](docs/sdks/audio/README.md#createspeech) - Generates audio from the input text.
* [createTranscription](docs/sdks/audio/README.md#createtranscription) - Transcribes audio into the input language.
* [createTranslation](docs/sdks/audio/README.md#createtranslation) - Translates audio into English.

### [chat](docs/sdks/chat/README.md)

* [createChatCompletion](docs/sdks/chat/README.md#createchatcompletion) - Creates a model response for the given chat conversation.

### [completions](docs/sdks/completions/README.md)

* [createCompletion](docs/sdks/completions/README.md#createcompletion) - Creates a completion for the provided prompt and parameters.

### [edits](docs/sdks/edits/README.md)

* [~~createEdit~~](docs/sdks/edits/README.md#createedit) - Creates a new edit for the provided input, instruction, and parameters. :warning: **Deprecated**

### [embeddings](docs/sdks/embeddings/README.md)

* [createEmbedding](docs/sdks/embeddings/README.md#createembedding) - Creates an embedding vector representing the input text.

### [files](docs/sdks/files/README.md)

* [createFile](docs/sdks/files/README.md#createfile) - Upload a file that can be used across various endpoints. The size of all the files uploaded by one organization can be up to 100 GB.

The size of individual files can be a maximum of 512 MB or 2 million tokens for Assistants. See the [Assistants Tools guide](/docs/assistants/tools) to learn more about the types of files supported. The Fine-tuning API only supports `.jsonl` files.

Please [contact us](https://help.openai.com/) if you need to increase these storage limits.

* [deleteFile](docs/sdks/files/README.md#deletefile) - Delete a file.
* [downloadFile](docs/sdks/files/README.md#downloadfile) - Returns the contents of the specified file.
* [listFiles](docs/sdks/files/README.md#listfiles) - Returns a list of files that belong to the user's organization.
* [retrieveFile](docs/sdks/files/README.md#retrievefile) - Returns information about a specific file.

### [fineTunes](docs/sdks/finetunes/README.md)

* [~~cancelFineTune~~](docs/sdks/finetunes/README.md#cancelfinetune) - Immediately cancel a fine-tune job.
 :warning: **Deprecated**
* [~~createFineTune~~](docs/sdks/finetunes/README.md#createfinetune) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
 :warning: **Deprecated**
* [~~listFineTuneEvents~~](docs/sdks/finetunes/README.md#listfinetuneevents) - Get fine-grained status updates for a fine-tune job.
 :warning: **Deprecated**
* [~~listFineTunes~~](docs/sdks/finetunes/README.md#listfinetunes) - List your organization's fine-tuning jobs
 :warning: **Deprecated**
* [~~retrieveFineTune~~](docs/sdks/finetunes/README.md#retrievefinetune) - Gets info about the fine-tune job.

[Learn more about fine-tuning](/docs/guides/legacy-fine-tuning)
 :warning: **Deprecated**

### [fineTuning](docs/sdks/finetuning/README.md)

* [cancelFineTuningJob](docs/sdks/finetuning/README.md#cancelfinetuningjob) - Immediately cancel a fine-tune job.

* [createFineTuningJob](docs/sdks/finetuning/README.md#createfinetuningjob) - Creates a job that fine-tunes a specified model from a given dataset.

Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.

[Learn more about fine-tuning](/docs/guides/fine-tuning)

* [listFineTuningEvents](docs/sdks/finetuning/README.md#listfinetuningevents) - Get status updates for a fine-tuning job.

* [listPaginatedFineTuningJobs](docs/sdks/finetuning/README.md#listpaginatedfinetuningjobs) - List your organization's fine-tuning jobs

* [retrieveFineTuningJob](docs/sdks/finetuning/README.md#retrievefinetuningjob) - Get info about a fine-tuning job.

[Learn more about fine-tuning](/docs/guides/fine-tuning)


### [images](docs/sdks/images/README.md)

* [createImage](docs/sdks/images/README.md#createimage) - Creates an image given a prompt.
* [createImageEdit](docs/sdks/images/README.md#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](docs/sdks/images/README.md#createimagevariation) - Creates a variation of a given image.

### [models](docs/sdks/models/README.md)

* [deleteModel](docs/sdks/models/README.md#deletemodel) - Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
* [listModels](docs/sdks/models/README.md#listmodels) - Lists the currently available models, and provides basic information about each one such as the owner and availability.
* [retrieveModel](docs/sdks/models/README.md#retrievemodel) - Retrieves a model instance, providing basic information about the model such as the owner and permissioning.

### [moderations](docs/sdks/moderations/README.md)

* [createModeration](docs/sdks/moderations/README.md#createmoderation) - Classifies if text violates OpenAI's Content Policy
<!-- End Available Resources and Operations [operations] -->





<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

async function run() {
    const sdk = new Gpt({
        apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const runId: string = "string";
    const threadId: string = "string";

    let res;
    try {
        res = await sdk.assistants.cancelRun(runId, threadId);
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.openai.com/v1` | None |

#### Example

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

async function run() {
    const sdk = new Gpt({
        serverIdx: 0,
        apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const runId: string = "string";
    const threadId: string = "string";

    const res = await sdk.assistants.cancelRun(runId, threadId);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

async function run() {
    const sdk = new Gpt({
        serverURL: "https://api.openai.com/v1",
        apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const runId: string = "string";
    const threadId: string = "string";

    const res = await sdk.assistants.cancelRun(runId, threadId);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @speakeasy-api/openai } from "Gpt";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Gpt({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `apiKeyAuth` | http         | HTTP Bearer  |

To authenticate with the API the `apiKeyAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

async function run() {
    const sdk = new Gpt({
        apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const runId: string = "string";
    const threadId: string = "string";

    const res = await sdk.assistants.cancelRun(runId, threadId);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
