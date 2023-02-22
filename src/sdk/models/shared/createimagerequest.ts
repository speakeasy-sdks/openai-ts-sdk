import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum CreateImageRequestResponseFormatEnum {
    Url = "url",
    B64Json = "b64_json"
}
export enum CreateImageRequestSizeEnum {
    TwoHundredAndFiftySixx256 = "256x256",
    FiveHundredAndTwelvex512 = "512x512",
    OneThousandAndTwentyFourx1024 = "1024x1024"
}

export class CreateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "json, name=response_format" })
  responseFormat?: CreateImageRequestResponseFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: CreateImageRequestSizeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: any;
}