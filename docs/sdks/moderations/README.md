# Moderations
(*moderations*)

## Overview

Given a input text, outputs if the model classifies it as violating OpenAI's content policy.

### Available Operations

* [createModeration](#createmoderation) - Classifies if text violates OpenAI's Content Policy

## createModeration

Classifies if text violates OpenAI's Content Policy

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.moderations.createModeration({
    input: "string",
    model: "text-moderation-stable",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.CreateModerationRequest](../../models/shared/createmoderationrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateModerationResponse](../../models/operations/createmoderationresponse.md)>**

