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

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.chat.createChatCompletion({
    functionCall: "string",
    functions: [
      {
        name: "string",
        parameters: {
          "key": "string",
        },
      },
    ],
    logitBias: {
      "key": 770726,
    },
    messages: [
      "string",
    ],
    model: "gpt-3.5-turbo",
    n: 1,
    responseFormat: {
      type: CreateChatCompletionRequestType.JsonObject,
    },
    stop: "string",
    temperature: 1,
    toolChoice: "string",
    tools: [
      {
        function: {
          name: "string",
          parameters: {
            "key": "string",
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
})();
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
| errors.SDKError | 400-600         | */*             |
