# CreateChatCompletionRequestType

Setting to `json_object` enables JSON mode. This guarantees that the message the model generates is valid JSON. 

Note that your system prompt must still instruct the model to produce JSON, and to help ensure you don't forget, the API will throw an error if the string `JSON` does not appear in your system message. Also note that the message content may be partial (i.e. cut off) if `finish_reason="length"`, which indicates the generation exceeded `max_tokens` or the conversation exceeded the max context length. 

Must be one of `text` or `json_object`.



## Values

| Name         | Value        |
| ------------ | ------------ |
| `Text`       | text         |
| `JsonObject` | json_object  |