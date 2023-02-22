import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class CreateCompletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateCompletionRequest;
}

export class CreateCompletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCompletionResponse?: shared.CreateCompletionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}