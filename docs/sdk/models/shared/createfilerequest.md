# CreateFileRequest


## Fields

| Field                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                                                                                                                                                                                                 | [shared.File](../../../sdk/models/shared/file.md)                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | The File object (not file name) to be uploaded.<br/>                                                                                                                                                                                                                                                                   |
| `purpose`                                                                                                                                                                                                                                                                                                              | [shared.Purpose](../../../sdk/models/shared/purpose.md)                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                     | The intended purpose of the uploaded file.<br/><br/>Use "fine-tune" for [Fine-tuning](/docs/api-reference/fine-tuning) and "assistants" for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning.<br/> |