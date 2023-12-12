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

async function run() {
  const sdk = new Gpt({
    apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.moderations.createModeration({
    input: "string",
    model: "text-moderation-stable",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.CreateModerationRequest](../../sdk/models/shared/createmoderationrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateModerationResponse](../../sdk/models/operations/createmoderationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
