# CreateModerationResponse

Represents policy compliance report by OpenAI's content moderation model against a given input.


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `id`                                                                                        | *string*                                                                                    | :heavy_check_mark:                                                                          | The unique identifier for the moderation request.                                           |
| `model`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | The model used to generate the moderation results.                                          |
| `results`                                                                                   | [CreateModerationResponseResults](../../models/shared/createmoderationresponseresults.md)[] | :heavy_check_mark:                                                                          | A list of moderation objects.                                                               |