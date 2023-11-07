# AssistantFileObject

A list of [Files](/docs/api-reference/files) attached to an `assistant`.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `assistantId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | The assistant ID that the file is attached to.                           |
| `createdAt`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | The Unix timestamp (in seconds) for when the assistant file was created. |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The identifier, which can be referenced in API endpoints.                |
| `object`                                                                 | [shared.ObjectT](../../models/shared/objectt.md)                         | :heavy_check_mark:                                                       | The object type, which is always `assistant.file`.                       |