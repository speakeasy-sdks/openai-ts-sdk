import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=instruction" })
  instruction: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: any;

  @SpeakeasyMetadata({ data: "json, name=n" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=top_p" })
  topP?: number;
}