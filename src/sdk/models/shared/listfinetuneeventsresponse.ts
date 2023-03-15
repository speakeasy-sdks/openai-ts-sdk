import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ListFineTuneEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data: any[];

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  object: string;
}
