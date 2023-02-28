import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "input" })
  input?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instruction" })
  instruction: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: any;

  @SpeakeasyMetadata()
  @Expose({ name: "n" })
  n?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "temperature" })
  temperature?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "top_p" })
  topP?: number;
}