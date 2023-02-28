import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ListEnginesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object: string;
}