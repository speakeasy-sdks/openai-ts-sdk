import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateModerationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input: any;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}