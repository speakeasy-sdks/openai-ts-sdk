# Assistants
(*assistants*)

## Overview

Build Assistants that can call models and use tools.

### Available Operations

* [cancelRun](#cancelrun) - Cancels a run that is `in_progress`.
* [createAssistant](#createassistant) - Create an assistant with a model and instructions.
* [createAssistantFile](#createassistantfile) - Create an assistant file by attaching a [File](/docs/api-reference/files) to an [assistant](/docs/api-reference/assistants).
* [createMessage](#createmessage) - Create a message.
* [createRun](#createrun) - Create a run.
* [createThread](#createthread) - Create a thread.
* [createThreadAndRun](#createthreadandrun) - Create a thread and run it in one request.
* [deleteAssistant](#deleteassistant) - Delete an assistant.
* [deleteAssistantFile](#deleteassistantfile) - Delete an assistant file.
* [deleteThread](#deletethread) - Delete a thread.
* [getAssistant](#getassistant) - Retrieves an assistant.
* [getAssistantFile](#getassistantfile) - Retrieves an AssistantFile.
* [getMessage](#getmessage) - Retrieve a message.
* [getMessageFile](#getmessagefile) - Retrieves a message file.
* [getRun](#getrun) - Retrieves a run.
* [getRunStep](#getrunstep) - Retrieves a run step.
* [getThread](#getthread) - Retrieves a thread.
* [listAssistantFiles](#listassistantfiles) - Returns a list of assistant files.
* [listAssistants](#listassistants) - Returns a list of assistants.
* [listMessageFiles](#listmessagefiles) - Returns a list of message files.
* [listMessages](#listmessages) - Returns a list of messages for a given thread.
* [listRunSteps](#listrunsteps) - Returns a list of run steps belonging to a run.
* [listRuns](#listruns) - Returns a list of runs belonging to a thread.
* [modifyAssistant](#modifyassistant) - Modifies an assistant.
* [modifyMessage](#modifymessage) - Modifies a message.
* [modifyRun](#modifyrun) - Modifies a run.
* [modifyThread](#modifythread) - Modifies a thread.
* [submitToolOuputsToRun](#submittoolouputstorun) - When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.


## cancelRun

Cancels a run that is `in_progress`.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const runId: string = "string";
const threadId: string = "string";

  const res = await sdk.assistants.cancelRun(runId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `runId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The ID of the run to cancel.                                 |
| `threadId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the thread to which this run belongs.              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CancelRunResponse](../../sdk/models/operations/cancelrunresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createAssistant

Create an assistant with a model and instructions.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.createAssistant({
    fileIds: [
      "string",
    ],
    metadata: {},
    model: "XTS",
    tools: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.CreateAssistantRequest](../../sdk/models/shared/createassistantrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateAssistantResponse](../../sdk/models/operations/createassistantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createAssistantFile

Create an assistant file by attaching a [File](/docs/api-reference/files) to an [assistant](/docs/api-reference/assistants).

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateAssistantFileRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateAssistantFileRequest } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const createAssistantFileRequest: CreateAssistantFileRequest = {
  fileId: "string",
};
const assistantId: string = "file-abc123";

  const res = await sdk.assistants.createAssistantFile(createAssistantFileRequest, assistantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                     | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createAssistantFileRequest`                                                                  | [shared.CreateAssistantFileRequest](../../../sdk/models/shared/createassistantfilerequest.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `assistantId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the assistant for which to create a File.<br/>                                      | file-abc123                                                                                   |
| `config`                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                  | :heavy_minus_sign:                                                                            | Available config options for making requests.                                                 |                                                                                               |


### Response

**Promise<[operations.CreateAssistantFileResponse](../../sdk/models/operations/createassistantfileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createMessage

Create a message.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateMessageRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateMessageRequest, CreateMessageRequestMetadata, CreateMessageRequestRole } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const createMessageRequest: CreateMessageRequest = {
  content: "string",
  fileIds: [
    "string",
  ],
  metadata: {},
  role: CreateMessageRequestRole.User,
};
const threadId: string = "string";

  const res = await sdk.assistants.createMessage(createMessageRequest, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `createMessageRequest`                                                            | [shared.CreateMessageRequest](../../../sdk/models/shared/createmessagerequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `threadId`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | The ID of the [thread](/docs/api-reference/threads) to create a message for.      |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.CreateMessageResponse](../../sdk/models/operations/createmessageresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createRun

Create a run.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { CreateRunRequest, CreateRunRequestMetadata } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const createRunRequest: CreateRunRequest = {
  assistantId: "string",
  metadata: {},
  tools: [
    "string",
  ],
};
const threadId: string = "string";

  const res = await sdk.assistants.createRun(createRunRequest, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `createRunRequest`                                                        | [shared.CreateRunRequest](../../../sdk/models/shared/createrunrequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `threadId`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the thread to run.                                              |
| `config`                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)              | :heavy_minus_sign:                                                        | Available config options for making requests.                             |


### Response

**Promise<[operations.CreateRunResponse](../../sdk/models/operations/createrunresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createThread

Create a thread.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateMessageRequestRole } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.createThread({
    messages: [
      {
        content: "string",
        fileIds: [
          "string",
        ],
        metadata: {},
        role: CreateMessageRequestRole.User,
      },
    ],
    metadata: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.CreateThreadRequest](../../sdk/models/shared/createthreadrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateThreadResponse](../../sdk/models/operations/createthreadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createThreadAndRun

Create a thread and run it in one request.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateMessageRequestRole } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.createThreadAndRun({
    assistantId: "string",
    metadata: {},
    thread: {
      messages: [
        {
          content: "string",
          fileIds: [
            "string",
          ],
          metadata: {},
          role: CreateMessageRequestRole.User,
        },
      ],
      metadata: {},
    },
    tools: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CreateThreadAndRunRequest](../../sdk/models/shared/createthreadandrunrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateThreadAndRunResponse](../../sdk/models/operations/createthreadandrunresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteAssistant

Delete an assistant.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteAssistantRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const assistantId: string = "string";

  const res = await sdk.assistants.deleteAssistant(assistantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assistantId`                                                | *string*                                                     | :heavy_check_mark:                                           | The ID of the assistant to delete.                           |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteAssistantResponse](../../sdk/models/operations/deleteassistantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteAssistantFile

Delete an assistant file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteAssistantFileRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const assistantId: string = "string";
const fileId: string = "string";

  const res = await sdk.assistants.deleteAssistantFile(assistantId, fileId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assistantId`                                                | *string*                                                     | :heavy_check_mark:                                           | The ID of the assistant that the file belongs to.            |
| `fileId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the file to delete.                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteAssistantFileResponse](../../sdk/models/operations/deleteassistantfileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## deleteThread

Delete a thread.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteThreadRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const threadId: string = "string";

  const res = await sdk.assistants.deleteThread(threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `threadId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the thread to delete.                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteThreadResponse](../../sdk/models/operations/deletethreadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAssistant

Retrieves an assistant.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { GetAssistantRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const assistantId: string = "string";

  const res = await sdk.assistants.getAssistant(assistantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assistantId`                                                | *string*                                                     | :heavy_check_mark:                                           | The ID of the assistant to retrieve.                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAssistantResponse](../../sdk/models/operations/getassistantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getAssistantFile

Retrieves an AssistantFile.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { GetAssistantFileRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const assistantId: string = "string";
const fileId: string = "string";

  const res = await sdk.assistants.getAssistantFile(assistantId, fileId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assistantId`                                                | *string*                                                     | :heavy_check_mark:                                           | The ID of the assistant who the file belongs to.             |
| `fileId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the file we're getting.                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAssistantFileResponse](../../sdk/models/operations/getassistantfileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getMessage

Retrieve a message.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { GetMessageRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const messageId: string = "string";
const threadId: string = "string";

  const res = await sdk.assistants.getMessage(messageId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `messageId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the message to retrieve.                                                 |
| `threadId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | The ID of the [thread](/docs/api-reference/threads) to which this message belongs. |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetMessageResponse](../../sdk/models/operations/getmessageresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getMessageFile

Retrieves a message file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { GetMessageFileRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fileId: string = "file-abc123";
const messageId: string = "msg_abc123";
const threadId: string = "thread_abc123";

  const res = await sdk.assistants.getMessageFile(fileId, messageId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fileId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the file being retrieved.                          | file-abc123                                                  |
| `messageId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The ID of the message the file belongs to.                   | msg_abc123                                                   |
| `threadId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the thread to which the message and File belong.   | thread_abc123                                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetMessageFileResponse](../../sdk/models/operations/getmessagefileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getRun

Retrieves a run.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { GetRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const runId: string = "string";
const threadId: string = "string";

  const res = await sdk.assistants.getRun(runId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                         | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `runId`                                                           | *string*                                                          | :heavy_check_mark:                                                | The ID of the run to retrieve.                                    |
| `threadId`                                                        | *string*                                                          | :heavy_check_mark:                                                | The ID of the [thread](/docs/api-reference/threads) that was run. |
| `config`                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)      | :heavy_minus_sign:                                                | Available config options for making requests.                     |


### Response

**Promise<[operations.GetRunResponse](../../sdk/models/operations/getrunresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getRunStep

Retrieves a run step.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { GetRunStepRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const runId: string = "string";
const stepId: string = "string";
const threadId: string = "string";

  const res = await sdk.assistants.getRunStep(runId, stepId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `runId`                                                      | *string*                                                     | :heavy_check_mark:                                           | The ID of the run to which the run step belongs.             |
| `stepId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the run step to retrieve.                          |
| `threadId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the thread to which the run and run step belongs.  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetRunStepResponse](../../sdk/models/operations/getrunstepresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getThread

Retrieves a thread.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { GetThreadRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const threadId: string = "string";

  const res = await sdk.assistants.getThread(threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `threadId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the thread to retrieve.                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetThreadResponse](../../sdk/models/operations/getthreadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listAssistantFiles

Returns a list of assistant files.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { Order } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.listAssistantFiles({
    assistantId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListAssistantFilesRequest](../../sdk/models/operations/listassistantfilesrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAssistantFilesResponse](../../sdk/models/operations/listassistantfilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listAssistants

Returns a list of assistants.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListAssistantsRequest, QueryParamOrder } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const after: string = "string";
const before: string = "string";
const limit: number = 948776;
const order: QueryParamOrder = QueryParamOrder.Asc;

  const res = await sdk.assistants.listAssistants(after, before, limit, order);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.<br/>   |
| `before`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.<br/> |
| `limit`                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.<br/>                                                                                                                                                                        |
| `order`                                                                                                                                                                                                                                                                                | [operations.QueryParamOrder](../../../sdk/models/operations/queryparamorder.md)                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.<br/>                                                                                                                                                               |
| `config`                                                                                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                                                                                          |


### Response

**Promise<[operations.ListAssistantsResponse](../../sdk/models/operations/listassistantsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listMessageFiles

Returns a list of message files.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListMessageFilesQueryParamOrder } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.listMessageFiles({
    messageId: "string",
    threadId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListMessageFilesRequest](../../sdk/models/operations/listmessagefilesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListMessageFilesResponse](../../sdk/models/operations/listmessagefilesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listMessages

Returns a list of messages for a given thread.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListMessagesQueryParamOrder } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.listMessages({
    threadId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListMessagesRequest](../../sdk/models/operations/listmessagesrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListMessagesResponse](../../sdk/models/operations/listmessagesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listRunSteps

Returns a list of run steps belonging to a run.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListRunStepsQueryParamOrder } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.listRunSteps({
    runId: "string",
    threadId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListRunStepsRequest](../../sdk/models/operations/listrunstepsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListRunStepsResponse](../../sdk/models/operations/listrunstepsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listRuns

Returns a list of runs belonging to a thread.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ListRunsQueryParamOrder } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.assistants.listRuns({
    threadId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.ListRunsRequest](../../sdk/models/operations/listrunsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ListRunsResponse](../../sdk/models/operations/listrunsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## modifyAssistant

Modifies an assistant.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ModifyAssistantRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { ModifyAssistantRequest, ModifyAssistantRequestMetadata } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const modifyAssistantRequest: ModifyAssistantRequest = {
  fileIds: [
    "string",
  ],
  metadata: {},
  tools: [
    "string",
  ],
};
const assistantId: string = "string";

  const res = await sdk.assistants.modifyAssistant(modifyAssistantRequest, assistantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                             | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `modifyAssistantRequest`                                                              | [shared.ModifyAssistantRequest](../../../sdk/models/shared/modifyassistantrequest.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `assistantId`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | The ID of the assistant to modify.                                                    |
| `config`                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                          | :heavy_minus_sign:                                                                    | Available config options for making requests.                                         |


### Response

**Promise<[operations.ModifyAssistantResponse](../../sdk/models/operations/modifyassistantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## modifyMessage

Modifies a message.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ModifyMessageRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { ModifyMessageRequest, ModifyMessageRequestMetadata } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const modifyMessageRequest: ModifyMessageRequest = {
  metadata: {},
};
const messageId: string = "string";
const threadId: string = "string";

  const res = await sdk.assistants.modifyMessage(modifyMessageRequest, messageId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `modifyMessageRequest`                                                            | [shared.ModifyMessageRequest](../../../sdk/models/shared/modifymessagerequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |
| `messageId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | The ID of the message to modify.                                                  |
| `threadId`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | The ID of the thread to which this message belongs.                               |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.ModifyMessageResponse](../../sdk/models/operations/modifymessageresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## modifyRun

Modifies a run.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ModifyRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { ModifyRunRequest, ModifyRunRequestMetadata } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const modifyRunRequest: ModifyRunRequest = {
  metadata: {},
};
const runId: string = "string";
const threadId: string = "string";

  const res = await sdk.assistants.modifyRun(modifyRunRequest, runId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `modifyRunRequest`                                                        | [shared.ModifyRunRequest](../../../sdk/models/shared/modifyrunrequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `runId`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the run to modify.                                              |
| `threadId`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the [thread](/docs/api-reference/threads) that was run.         |
| `config`                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)              | :heavy_minus_sign:                                                        | Available config options for making requests.                             |


### Response

**Promise<[operations.ModifyRunResponse](../../sdk/models/operations/modifyrunresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## modifyThread

Modifies a thread.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ModifyThreadRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { ModifyThreadRequest, ModifyThreadRequestMetadata } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const modifyThreadRequest: ModifyThreadRequest = {
  metadata: {},
};
const threadId: string = "string";

  const res = await sdk.assistants.modifyThread(modifyThreadRequest, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                       | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `modifyThreadRequest`                                                           | [shared.ModifyThreadRequest](../../../sdk/models/shared/modifythreadrequest.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `threadId`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | The ID of the thread to modify. Only the `metadata` can be modified.            |
| `config`                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                    | :heavy_minus_sign:                                                              | Available config options for making requests.                                   |


### Response

**Promise<[operations.ModifyThreadResponse](../../sdk/models/operations/modifythreadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## submitToolOuputsToRun

When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { SubmitToolOuputsToRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { SubmitToolOutputsRunRequest, ToolOutputs } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const submitToolOutputsRunRequest: SubmitToolOutputsRunRequest = {
  toolOutputs: [
    {},
  ],
};
const runId: string = "string";
const threadId: string = "string";

  const res = await sdk.assistants.submitToolOuputsToRun(submitToolOutputsRunRequest, runId, threadId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                       | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `submitToolOutputsRunRequest`                                                                   | [shared.SubmitToolOutputsRunRequest](../../../sdk/models/shared/submittooloutputsrunrequest.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `runId`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | The ID of the run that requires the tool output submission.                                     |
| `threadId`                                                                                      | *string*                                                                                        | :heavy_check_mark:                                                                              | The ID of the [thread](/docs/api-reference/threads) to which this run belongs.                  |
| `config`                                                                                        | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                    | :heavy_minus_sign:                                                                              | Available config options for making requests.                                                   |


### Response

**Promise<[operations.SubmitToolOuputsToRunResponse](../../sdk/models/operations/submittoolouputstorunresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
