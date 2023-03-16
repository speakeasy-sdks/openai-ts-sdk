import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class ListFineTuneEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=fine_tune_id",
  })
  fineTuneId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=stream",
  })
  stream?: boolean;
}

export class ListFineTuneEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFineTuneEventsResponse?: shared.ListFineTuneEventsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
