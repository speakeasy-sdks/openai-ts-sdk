# Results


## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `categories`                                                                      | [shared.Categories](../../models/shared/categories.md)                            | :heavy_check_mark:                                                                | A list of the categories, and whether they are flagged or not.                    |
| `categoryScores`                                                                  | [shared.CategoryScores](../../models/shared/categoryscores.md)                    | :heavy_check_mark:                                                                | A list of the categories along with their scores as predicted by model.           |
| `flagged`                                                                         | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether the content violates [OpenAI's usage policies](/policies/usage-policies). |