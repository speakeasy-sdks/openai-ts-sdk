# Assistants
(*.assistants*)

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

**Promise<[operations.CancelRunResponse](../../models/operations/cancelrunresponse.md)>**


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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateAssistantRequest](../../models/shared/createassistantrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateAssistantResponse](../../models/operations/createassistantresponse.md)>**


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
const assistantId: string = "file-AF1WoRqd3aJAHsqc9NY7iL8F";

  const res = await sdk.assistants.createAssistantFile(createAssistantFileRequest, assistantId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `createAssistantFileRequest`                                                           | [shared.CreateAssistantFileRequest](../../models/shared/createassistantfilerequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `assistantId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the assistant for which to create a File.<br/>                               | file-AF1WoRqd3aJAHsqc9NY7iL8F                                                          |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |                                                                                        |


### Response

**Promise<[operations.CreateAssistantFileResponse](../../models/operations/createassistantfileresponse.md)>**


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

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `createMessageRequest`                                                       | [shared.CreateMessageRequest](../../models/shared/createmessagerequest.md)   | :heavy_check_mark:                                                           | N/A                                                                          |
| `threadId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | The ID of the [thread](/docs/api-reference/threads) to create a message for. |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateMessageResponse](../../models/operations/createmessageresponse.md)>**


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

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `createRunRequest`                                                 | [shared.CreateRunRequest](../../models/shared/createrunrequest.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `threadId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The ID of the thread to run.                                       |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.CreateRunResponse](../../models/operations/createrunresponse.md)>**


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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateThreadRequest](../../models/shared/createthreadrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateThreadResponse](../../models/operations/createthreadresponse.md)>**


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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.CreateThreadAndRunRequest](../../models/shared/createthreadandrunrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateThreadAndRunResponse](../../models/operations/createthreadandrunresponse.md)>**


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

**Promise<[operations.DeleteAssistantResponse](../../models/operations/deleteassistantresponse.md)>**


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

**Promise<[operations.DeleteAssistantFileResponse](../../models/operations/deleteassistantfileresponse.md)>**


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

**Promise<[operations.DeleteThreadResponse](../../models/operations/deletethreadresponse.md)>**


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

**Promise<[operations.GetAssistantResponse](../../models/operations/getassistantresponse.md)>**


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

**Promise<[operations.GetAssistantFileResponse](../../models/operations/getassistantfileresponse.md)>**


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

**Promise<[operations.GetMessageResponse](../../models/operations/getmessageresponse.md)>**


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
const fileId: string = "file-AF1WoRqd3aJAHsqc9NY7iL8F";
const messageId: string = "msg_AF1WoRqd3aJAHsqc9NY7iL8F";
const threadId: string = "thread_AF1WoRqd3aJAHsqc9NY7iL8F";

  const res = await sdk.assistants.getMessageFile(fileId, messageId, threadId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fileId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the file being retrieved.                          | file-AF1WoRqd3aJAHsqc9NY7iL8F                                |
| `messageId`                                                  | *string*                                                     | :heavy_check_mark:                                           | The ID of the message the file belongs to.                   | msg_AF1WoRqd3aJAHsqc9NY7iL8F                                 |
| `threadId`                                                   | *string*                                                     | :heavy_check_mark:                                           | The ID of the thread to which the message and File belong.   | thread_AF1WoRqd3aJAHsqc9NY7iL8F                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |                                                              |


### Response

**Promise<[operations.GetMessageFileResponse](../../models/operations/getmessagefileresponse.md)>**


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

**Promise<[operations.GetRunResponse](../../models/operations/getrunresponse.md)>**


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

**Promise<[operations.GetRunStepResponse](../../models/operations/getrunstepresponse.md)>**


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

**Promise<[operations.GetThreadResponse](../../models/operations/getthreadresponse.md)>**


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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListAssistantFilesRequest](../../models/operations/listassistantfilesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListAssistantFilesResponse](../../models/operations/listassistantfilesresponse.md)>**


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
| `order`                                                                                                                                                                                                                                                                                | [operations.QueryParamOrder](../../models/operations/queryparamorder.md)                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.<br/>                                                                                                                                                               |
| `config`                                                                                                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                                                                                                          |


### Response

**Promise<[operations.ListAssistantsResponse](../../models/operations/listassistantsresponse.md)>**


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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListMessageFilesRequest](../../models/operations/listmessagefilesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListMessageFilesResponse](../../models/operations/listmessagefilesresponse.md)>**


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

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListMessagesRequest](../../models/operations/listmessagesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListMessagesResponse](../../models/operations/listmessagesresponse.md)>**


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

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListRunStepsRequest](../../models/operations/listrunstepsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListRunStepsResponse](../../models/operations/listrunstepsresponse.md)>**


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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.ListRunsRequest](../../models/operations/listrunsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ListRunsResponse](../../models/operations/listrunsresponse.md)>**


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

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `modifyMessageRequest`                                                     | [shared.ModifyMessageRequest](../../models/shared/modifymessagerequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `messageId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the message to modify.                                           |
| `threadId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the thread to which this message belongs.                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ModifyMessageResponse](../../models/operations/modifymessageresponse.md)>**


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

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `modifyRunRequest`                                                 | [shared.ModifyRunRequest](../../models/shared/modifyrunrequest.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `runId`                                                            | *string*                                                           | :heavy_check_mark:                                                 | The ID of the run to modify.                                       |
| `threadId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The ID of the [thread](/docs/api-reference/threads) that was run.  |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.ModifyRunResponse](../../models/operations/modifyrunresponse.md)>**


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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `modifyThreadRequest`                                                    | [shared.ModifyThreadRequest](../../models/shared/modifythreadrequest.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `threadId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | The ID of the thread to modify. Only the `metadata` can be modified.     |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ModifyThreadResponse](../../models/operations/modifythreadresponse.md)>**


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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `submitToolOutputsRunRequest`                                                            | [shared.SubmitToolOutputsRunRequest](../../models/shared/submittooloutputsrunrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `runId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the run that requires the tool output submission.                              |
| `threadId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of the [thread](/docs/api-reference/threads) to which this run belongs.           |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SubmitToolOuputsToRunResponse](../../models/operations/submittoolouputstorunresponse.md)>**

