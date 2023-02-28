import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateEmbeddingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "input" })
  input: any;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model: any;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: any;
}