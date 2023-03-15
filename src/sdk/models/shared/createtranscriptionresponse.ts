import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateTranscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text: string;
}
