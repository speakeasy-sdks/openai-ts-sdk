# ChatCompletionMessageToolCall


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `function`                                                     | [shared.FunctionT](../../models/shared/functiont.md)           | :heavy_check_mark:                                             | The function that the model called.                            |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | The ID of the tool call.                                       |
| `type`                                                         | [shared.TypeT](../../models/shared/typet.md)                   | :heavy_check_mark:                                             | The type of the tool. Currently, only `function` is supported. |