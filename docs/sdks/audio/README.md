# Audio
(*audio*)

## Overview

Learn how to turn audio into text or text into audio.

### Available Operations

* [createSpeech](#createspeech) - Generates audio from the input text.
* [createTranscription](#createtranscription) - Transcribes audio into the input language.
* [createTranslation](#createtranslation) - Translates audio into English.

## createSpeech

Generates audio from the input text.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateSpeechRequestResponseFormat, Voice } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.audio.createSpeech({
    input: "string",
    model: "string",
    voice: Voice.Shimmer,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.CreateSpeechRequest](../../sdk/models/shared/createspeechrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateSpeechResponse](../../sdk/models/operations/createspeechresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTranscription

Transcribes audio into the input language.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranscriptionRequestResponseFormat } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.audio.createTranscription({
    file: {
      content: new TextEncoder().encode("0xe08fcc1Fd5"),
      fileName: "buckinghamshire.gif",
    },
    model: "whisper-1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.CreateTranscriptionRequest](../../sdk/models/shared/createtranscriptionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateTranscriptionResponse](../../sdk/models/operations/createtranscriptionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createTranslation

Translates audio into English.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.audio.createTranslation({
    file: {
      content: new TextEncoder().encode("0xa45ca6c4DE"),
      fileName: "reggae_toys_silver.gif",
    },
    model: "whisper-1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.CreateTranslationRequest](../../sdk/models/shared/createtranslationrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateTranslationResponse](../../sdk/models/operations/createtranslationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
