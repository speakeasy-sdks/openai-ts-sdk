import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class CreateImageVariationRequestImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=image" })
  image: string;
}

export class CreateImageVariationRequest extends SpeakeasyBase {
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