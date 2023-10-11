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

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.embeddings.createEmbedding({
    input: "The quick brown fox jumped over the lazy dog",
    model: "text-embedding-ada-002",
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateEmbeddingRequest](../../models/shared/createembeddingrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateEmbeddingResponse](../../models/operations/createembeddingresponse.md)>**

