import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ListModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object: string;
}
