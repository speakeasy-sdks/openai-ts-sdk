import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListFineTunesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFineTunesResponse?: shared.ListFineTunesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}