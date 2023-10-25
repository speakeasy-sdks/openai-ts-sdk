# Completions
(*completions*)

## Overview

Given a prompt, the model will return one or more predicted completions, and can also return the probabilities of alternative tokens at each position.

### Available Operations

* [createCompletion](#createcompletion) - Creates a completion for the provided prompt and parameters.

## createCompletion

Creates a completion for the provided prompt and parameters.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.completions.createCompletion({
    logitBias: {
      "key": 160667,
    },
    maxTokens: 16,
    model: "string",
    n: 1,
    prompt: "string",
    stop: "string",
    suffix: "test.",
    temperature: 1,
    topP: 1,
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.CreateCompletionRequest](../../models/shared/createcompletionrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateCompletionResponse](../../models/operations/createcompletionresponse.md)>**

