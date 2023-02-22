import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DeleteModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=model" })
  model: string;
}

export class DeleteModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteModelPathParams;
}

export class DeleteModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteModelResponse?: shared.DeleteModelResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}