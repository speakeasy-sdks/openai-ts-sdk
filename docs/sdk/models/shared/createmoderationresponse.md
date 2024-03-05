# CreateModerationResponse

Represents if a given text input is potentially harmful.


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | The unique identifier for the moderation request.         |
| `model`                                                   | *string*                                                  | :heavy_check_mark:                                        | The model used to generate the moderation results.        |
| `results`                                                 | [shared.Results](../../../sdk/models/shared/results.md)[] | :heavy_check_mark:                                        | A list of moderation objects.                             |