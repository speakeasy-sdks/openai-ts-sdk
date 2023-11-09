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
import { CreateImageRequestResponseFormat, CreateImageRequestSize, Quality, Style } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.images.createImage({
    model: "dall-e-3",
    n: 1,
    prompt: "A cute baby sea otter",
    quality: Quality.Standard,
    responseFormat: CreateImageRequestResponseFormat.Url,
    size: CreateImageRequestSize.OneThousandAndTwentyFourx1024,
    style: Style.Vivid,
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.CreateImageRequest](../../sdk/models/shared/createimagerequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateImageResponse](../../sdk/models/operations/createimageresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createImageEdit

Creates an edited or extended image given an original image and a prompt.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageEditRequestResponseFormat, Size } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.images.createImageEdit({
    image: {
      content: new TextEncoder().encode("0x3e31F4cec5"),
      fileName: "facilitator_gosh_hatchback.mpe",
    },
    mask: {
      content: new TextEncoder().encode("0xFC5456e4eC"),
      fileName: "electric_cambridgeshire.jpeg",
    },
    model: "dall-e-2",
    n: 1,
    prompt: "A cute baby sea otter wearing a beret",
    responseFormat: CreateImageEditRequestResponseFormat.Url,
    size: Size.OneThousandAndTwentyFourx1024,
    user: "user-1234",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.CreateImageEditRequest](../../sdk/models/shared/createimageeditrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateImageEditResponse](../../sdk/models/operations/createimageeditresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## createImageVariation

Creates a variation of a given image.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateImageVariationRequestResponseFormat, CreateImageVariationRequestSize } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.images.createImageVariation({
    image: {
      content: new TextEncoder().encode("0xfdd5b8DcDa"),
      fileName: "fantastic.gif",
    },
    model: "dall-e-2",
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.CreateImageVariationRequest](../../sdk/models/shared/createimagevariationrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateImageVariationResponse](../../sdk/models/operations/createimagevariationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
