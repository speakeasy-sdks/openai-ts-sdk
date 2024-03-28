# RunCompletionUsage

Usage statistics related to the run. This value will be `null` if the run is not in a terminal state (i.e. `in_progress`, `queued`, etc.).


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `completionTokens`                                           | *number*                                                     | :heavy_check_mark:                                           | Number of completion tokens used over the course of the run. |
| `promptTokens`                                               | *number*                                                     | :heavy_check_mark:                                           | Number of prompt tokens used over the course of the run.     |
| `totalTokens`                                                | *number*                                                     | :heavy_check_mark:                                           | Total number of tokens used (prompt + completion).           |