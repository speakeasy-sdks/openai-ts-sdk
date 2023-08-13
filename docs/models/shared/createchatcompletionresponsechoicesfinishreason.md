# CreateChatCompletionResponseChoicesFinishReason

The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
`length` if the maximum number of tokens specified in the request was reached, or `function_call` if the model called a function.



## Values

| Name           | Value          |
| -------------- | -------------- |
| `Stop`         | stop           |
| `Length`       | length         |
| `FunctionCall` | function_call  |