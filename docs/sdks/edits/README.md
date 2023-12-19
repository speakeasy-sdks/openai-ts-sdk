# Edits
(*edits*)

## Overview

Given a prompt and an instruction, the model will return an edited version of the prompt.

### Available Operations

* [~~createEdit~~](#createedit) - Creates a new edit for the provided input, instruction, and parameters. :warning: **Deprecated**

## ~~createEdit~~

Creates a new edit for the provided input, instruction, and parameters.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

async function run() {
  const sdk = new Gpt({
    apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.edits.createEdit({
    input: "What day of the wek is it?",
    instruction: "Fix the spelling mistakes.",
    model: "text-davinci-edit-001",
    n: 1,
    temperature: 1,
    topP: 1,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.CreateEditRequest](../../sdk/models/shared/createeditrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateEditResponse](../../sdk/models/operations/createeditresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
