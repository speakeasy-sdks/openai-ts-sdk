import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class RetrieveEnginePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=engine_id" })
  engineId: string;
}

export class RetrieveEngineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveEnginePathParams;
}

export class RetrieveEngineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  engine?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}