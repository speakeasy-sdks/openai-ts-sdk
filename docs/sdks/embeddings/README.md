# Embeddings
(*embeddings*)

## Overview

Get a vector representation of a given input that can be easily consumed by machine learning models and algorithms.

### Available Operations

* [createEmbedding](#createembedding) - Creates an embedding vector representing the input text.

## createEmbedding

Creates an embedding vector representing the input text.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { EncodingFormat } from "@speakeasy-api/openai/dist/sdk/models/shared";

async function run() {
  const sdk = new Gpt({
    apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.embeddings.createEmbedding({
    encodingFormat: EncodingFormat.Float,
    input: "The quick brown fox jumped over the lazy dog",
    model: "text-embedding-3-small",
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.CreateEmbeddingRequest](../../sdk/models/shared/createembeddingrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateEmbeddingResponse](../../sdk/models/operations/createembeddingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
