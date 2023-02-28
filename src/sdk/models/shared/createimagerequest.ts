import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

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
  @SpeakeasyMetadata()
  @Expose({ name: "n" })
  n?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "response_format" })
  responseFormat?: CreateImageRequestResponseFormatEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: CreateImageRequestSizeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: any;
}