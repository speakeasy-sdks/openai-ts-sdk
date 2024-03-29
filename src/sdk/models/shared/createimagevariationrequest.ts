/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class CreateImageVariationRequestImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=image" })
  image: string;
}

export class CreateImageVariationRequest extends SpeakeasyBase {
  /**
   * The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
   */
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  image: CreateImageVariationRequestImage;

  @SpeakeasyMetadata({ data: "multipart_form, name=n" })
  n?: any;

  @SpeakeasyMetadata({ data: "multipart_form, name=response_format" })
  responseFormat?: any;

  @SpeakeasyMetadata({ data: "multipart_form, name=size" })
  size?: any;

  @SpeakeasyMetadata({ data: "multipart_form, name=user" })
  user?: any;
}
