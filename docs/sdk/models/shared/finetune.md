# ~~FineTune~~

The `FineTune` object represents a legacy fine-tune job that has been created through the API.


> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                                                      | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The Unix timestamp (in seconds) for when the fine-tuning job was created.                                                                        |
| `events`                                                                                                                                         | [shared.FineTuneEvent](../../../sdk/models/shared/finetuneevent.md)[]                                                                            | :heavy_minus_sign:                                                                                                                               | The list of events that have been observed in the lifecycle of the FineTune job.                                                                 |
| `fineTunedModel`                                                                                                                                 | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The name of the fine-tuned model that is being created.                                                                                          |
| `hyperparams`                                                                                                                                    | [shared.Hyperparams](../../../sdk/models/shared/hyperparams.md)                                                                                  | :heavy_check_mark:                                                                                                                               | The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/legacy-fine-tuning/hyperparameters) for more details. |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The object identifier, which can be referenced in the API endpoints.                                                                             |
| `model`                                                                                                                                          | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The base model that is being fine-tuned.                                                                                                         |
| `object`                                                                                                                                         | [shared.FineTuneObject](../../../sdk/models/shared/finetuneobject.md)                                                                            | :heavy_check_mark:                                                                                                                               | The object type, which is always "fine-tune".                                                                                                    |
| `organizationId`                                                                                                                                 | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The organization that owns the fine-tuning job.                                                                                                  |
| `resultFiles`                                                                                                                                    | [shared.OpenAIFile](../../../sdk/models/shared/openaifile.md)[]                                                                                  | :heavy_check_mark:                                                                                                                               | The compiled results files for the fine-tuning job.                                                                                              |
| `status`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The current status of the fine-tuning job, which can be either `created`, `running`, `succeeded`, `failed`, or `cancelled`.                      |
| `trainingFiles`                                                                                                                                  | [shared.OpenAIFile](../../../sdk/models/shared/openaifile.md)[]                                                                                  | :heavy_check_mark:                                                                                                                               | The list of files used for training.                                                                                                             |
| `updatedAt`                                                                                                                                      | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The Unix timestamp (in seconds) for when the fine-tuning job was last updated.                                                                   |
| `validationFiles`                                                                                                                                | [shared.OpenAIFile](../../../sdk/models/shared/openaifile.md)[]                                                                                  | :heavy_check_mark:                                                                                                                               | The list of files used for validation.                                                                                                           |