import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class RetrieveModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=model" })
  model: string;
}

export class RetrieveModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveModelPathParams;
}

export class RetrieveModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  model?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}