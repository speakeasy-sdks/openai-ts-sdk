import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateImageEditRequestImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=image" })
  image: string;
}

export class CreateImageEditRequestMask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=mask" })
  mask: string;
}

export class CreateImageEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  image: CreateImageEditRequestImage;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  mask?: CreateImageEditRequestMask;

  @SpeakeasyMetadata({ data: "multipart_form, name=n" })
  n?: any;

  @SpeakeasyMetadata({ data: "multipart_form, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=response_format" })
  responseFormat?: any;

  @SpeakeasyMetadata({ data: "multipart_form, name=size" })
  size?: any;

  @SpeakeasyMetadata({ data: "multipart_form, name=user" })
  user?: any;
}