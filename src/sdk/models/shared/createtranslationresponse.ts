import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateTranslationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text: string;
}
