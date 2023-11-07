# Categories

A list of the categories, and whether they are flagged or not.


## Fields

| Field                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `harassment`                                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content that expresses, incites, or promotes harassing language towards any target.                                                                                                                                                             |
| `harassmentThreatening`                                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Harassment content that also includes violence or serious harm towards any target.                                                                                                                                                              |
| `hate`                                                                                                                                                                                                                                          | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harrassment. |
| `hateThreatening`                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste.                                                |
| `selfHarm`                                                                                                                                                                                                                                      | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders.                                                                                                                                |
| `selfHarmInstructions`                                                                                                                                                                                                                          | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts.                                                                          |
| `selfHarmIntent`                                                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders.                                                                                            |
| `sexual`                                                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness).                                                                                 |
| `sexualMinors`                                                                                                                                                                                                                                  | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Sexual content that includes an individual who is under 18 years old.                                                                                                                                                                           |
| `violence`                                                                                                                                                                                                                                      | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content that depicts death, violence, or physical injury.                                                                                                                                                                                       |
| `violenceGraphic`                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                              | Content that depicts death, violence, or physical injury in graphic detail.                                                                                                                                                                     |