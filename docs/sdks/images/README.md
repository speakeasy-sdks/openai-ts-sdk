# Images
(*images*)

## Overview

Given a prompt and/or an input image, the model will generate a new image.

### Available Operations

* [createImage](#createimage) - Creates an image given a prompt.
* [createImageEdit](#createimageedit) - Creates an edited or extended image given an original image and a prompt.
* [createImageVariation](#createimagevariation) - Creates a variation of a given image.

## createImage

Creates an image given a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageRequestResponseFormat, CreateImageRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.images.createImage({
    n: 1,
    prompt: "A cute baby sea otter",
    responseFormat: CreateImageRequestResponseFormat.Url,
    size: CreateImageRequestSize.OneThousandAndTwentyFourx1024,
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateImageRequest](../../models/shared/createimagerequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreateImageResponse](../../models/operations/createimageresponse.md)>**


## createImageEdit

Creates an edited or extended image given an original image and a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageEditRequestResponseFormat, CreateImageEditRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.images.createImageEdit({
    image: {
      content: "0]/(|3W_T9" as bytes <<<>>>,
      image: "https://loremflickr.com/640/480",
    },
    mask: {
      content: "`^YjrpxopK" as bytes <<<>>>,
      mask: "Rap Dodge Incredible",
    },
    n: 1,
    prompt: "A cute baby sea otter wearing a beret",
    responseFormat: CreateImageEditRequestResponseFormat.Url,
    size: CreateImageEditRequestSize.OneThousandAndTwentyFourx1024,
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
| `request`                                                                      | [shared.CreateImageEditRequest](../../models/shared/createimageeditrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateImageEditResponse](../../models/operations/createimageeditresponse.md)>**


## createImageVariation

Creates a variation of a given image.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageVariationRequestResponseFormat, CreateImageVariationRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.images.createImageVariation({
    image: {
      content: "`YY7PCrWuK" as bytes <<<>>>,
      image: "https://loremflickr.com/640/480",
    },
    n: 1,
    responseFormat: CreateImageVariationRequestResponseFormat.Url,
    size: CreateImageVariationRequestSize.OneThousandAndTwentyFourx1024,
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.CreateImageVariationRequest](../../models/shared/createimagevariationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateImageVariationResponse](../../models/operations/createimagevariationresponse.md)>**

