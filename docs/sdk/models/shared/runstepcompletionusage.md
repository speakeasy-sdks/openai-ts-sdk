# RunStepCompletionUsage

Usage statistics related to the run step. This value will be `null` while the run step's status is `in_progress`.


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of completion tokens used over the course of the run step. |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of prompt tokens used over the course of the run step.     |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used (prompt + completion).                |