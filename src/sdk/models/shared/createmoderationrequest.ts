import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateModerationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "input" })
  input: any;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model?: string;
}