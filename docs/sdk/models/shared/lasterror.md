# LastError

The last error associated with this run. Will be `null` if there are no errors.


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `code`                                                             | [shared.Code](../../../sdk/models/shared/code.md)                  | :heavy_check_mark:                                                 | One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`. |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | A human-readable description of the error.                         |