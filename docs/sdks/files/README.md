# Files
(*files*)

## Overview

Files are used to upload documents that can be used with features like fine-tuning.

### Available Operations

* [createFile](#createfile) - Upload a file that can be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please [contact us](https://help.openai.com/) if you need to increase the storage limit.

* [deleteFile](#deletefile) - Delete a file.
* [downloadFile](#downloadfile) - Returns the contents of the specified file.
* [listFiles](#listfiles) - Returns a list of files that belong to the user's organization.
* [retrieveFile](#retrievefile) - Returns information about a specific file.

## createFile

Upload a file that can be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please [contact us](https://help.openai.com/) if you need to increase the storage limit.


### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.files.createFile({
    file: {
      content: "`'$Z`(L/RH" as bytes <<<>>>,
      file: "string",
    },
    purpose: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.CreateFileRequest](../../models/shared/createfilerequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateFileResponse](../../models/operations/createfileresponse.md)>**


## deleteFile

Delete a file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DeleteFileRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fileId: string = "string";

  const res = await sdk.files.deleteFile(fileId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fileId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the file to use for this request.                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteFileResponse](../../models/operations/deletefileresponse.md)>**


## downloadFile

Returns the contents of the specified file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { DownloadFileRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fileId: string = "string";

  const res = await sdk.files.downloadFile(fileId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fileId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the file to use for this request.                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DownloadFileResponse](../../models/operations/downloadfileresponse.md)>**


## listFiles

Returns a list of files that belong to the user's organization.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.files.listFiles();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListFilesResponse](../../models/operations/listfilesresponse.md)>**


## retrieveFile

Returns information about a specific file.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { RetrieveFileRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const fileId: string = "string";

  const res = await sdk.files.retrieveFile(fileId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fileId`                                                     | *string*                                                     | :heavy_check_mark:                                           | The ID of the file to use for this request.                  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RetrieveFileResponse](../../models/operations/retrievefileresponse.md)>**

