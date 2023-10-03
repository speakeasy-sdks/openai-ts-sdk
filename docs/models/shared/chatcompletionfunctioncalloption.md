# ChatCompletionFunctionCallOption

Controls how the model calls functions. "none" means the model will not call a function and instead generates a message. "auto" means the model can pick between generating a message or calling a function.  Specifying a particular function via `{"name": "my_function"}` forces the model to call that function. "none" is the default when no functions are present. "auto" is the default if functions are present.



## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `name`                            | *string*                          | :heavy_check_mark:                | The name of the function to call. |