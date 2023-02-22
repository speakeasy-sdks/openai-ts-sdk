import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateEmbeddingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input: any;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: any;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: any;
}