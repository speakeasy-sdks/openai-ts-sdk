# Assistant
(*assistant*)

### Available Operations

* [modifyAssistant](#modifyassistant) - Modifies an assistant.

## modifyAssistant

Modifies an assistant.

### Example Usage

```typescript
import { Gpt } from "@speakeasy-api/openai";
import { ModifyAssistantRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { ModifyAssistantRequest, ModifyAssistantRequestMetadata } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });
const modifyAssistantRequest: ModifyAssistantRequest = {
  fileIds: [
    "string",
  ],
  metadata: {},
  tools: [
    "string",
  ],
};
const assistantId: string = "string";

  const res = await sdk.assistant.modifyAssistant(modifyAssistantRequest, assistantId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                             | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `modifyAssistantRequest`                                                              | [shared.ModifyAssistantRequest](../../../sdk/models/shared/modifyassistantrequest.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `assistantId`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | The ID of the assistant to modify.                                                    |
| `config`                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                          | :heavy_minus_sign:                                                                    | Available config options for making requests.                                         |


### Response

**Promise<[operations.ModifyAssistantResponse](../../sdk/models/operations/modifyassistantresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
