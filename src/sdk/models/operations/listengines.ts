import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListEnginesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listEnginesResponse?: shared.ListEnginesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}