import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ListFineTunesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFineTunesResponse?: shared.ListFineTunesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}