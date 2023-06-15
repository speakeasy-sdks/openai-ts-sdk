# CreateImageEditRequest


## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             | Example                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `image`                                                                                                                                                                                                 | [CreateImageEditRequestImage](../../models/shared/createimageeditrequestimage.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                      | The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.                                          |                                                                                                                                                                                                         |
| `mask`                                                                                                                                                                                                  | [CreateImageEditRequestMask](../../models/shared/createimageeditrequestmask.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                      | An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as `image`. |                                                                                                                                                                                                         |
| `n`                                                                                                                                                                                                     | *any*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |
| `prompt`                                                                                                                                                                                                | *string*                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                      | A text description of the desired image(s). The maximum length is 1000 characters.                                                                                                                      | A cute baby sea otter wearing a beret                                                                                                                                                                   |
| `responseFormat`                                                                                                                                                                                        | *any*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |
| `size`                                                                                                                                                                                                  | *any*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |
| `user`                                                                                                                                                                                                  | *any*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                      | N/A                                                                                                                                                                                                     |                                                                                                                                                                                                         |