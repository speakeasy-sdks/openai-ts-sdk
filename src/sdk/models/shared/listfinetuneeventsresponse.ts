import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ListFineTuneEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: any[];

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}