# CreateChatCompletionResponseChoicesFinishReason

The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
`length` if the maximum number of tokens specified in the request was reached,
`content_filter` if content was omitted due to a flag from our content filters,
or `function_call` if the model called a function.



## Values

| Name            | Value           |
| --------------- | --------------- |
| `Stop`          | stop            |
| `Length`        | length          |
| `FunctionCall`  | function_call   |
| `ContentFilter` | content_filter  |