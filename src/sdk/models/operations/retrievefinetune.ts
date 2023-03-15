import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class RetrieveFineTunePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=fine_tune_id",
  })
  fineTuneId: string;
}

export class RetrieveFineTuneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveFineTunePathParams;
}

export class RetrieveFineTuneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fineTune?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
