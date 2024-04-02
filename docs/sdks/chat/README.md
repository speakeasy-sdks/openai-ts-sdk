# Chat
(*chat*)

## Overview

Given a list of messages comprising a conversation, the model will return a response.

### Available Operations

* [createChatCompletion](#createchatcompletion) - Creates a model response for the given chat conversation.

## createChatCompletion

Creates a model response for the given chat conversation.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ChatCompletionToolType, CreateChatCompletionRequestType } from "@speakeasy-api/openai/dist/sdk/models/shared";

async function run() {
  const sdk = new Gpt({
    apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.chat.createChatCompletion({
    functionCall: "<value>",
    functions: [
      {
        name: "<value>",
        parameters: {
          "key": "<value>",
        },
      },
    ],
    logitBias: {
      "key": 770726,
    },
    messages: [
      "<value>",
    ],
    model: "gpt-3.5-turbo",
    n: 1,
    responseFormat: {
      type: CreateChatCompletionRequestType.JsonObject,
    },
    stop: "<value>",
    temperature: 1,
    toolChoice: "<value>",
    tools: [
      {
        function: {
          name: "<value>",
          parameters: {
            "key": "<value>",
          },
        },
        type: ChatCompletionToolType.Function,
      },
    ],
    topP: 1,
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.CreateChatCompletionRequest](../../sdk/models/shared/createchatcompletionrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateChatCompletionResponse](../../sdk/models/operations/createchatcompletionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
