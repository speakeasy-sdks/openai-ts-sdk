import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListFineTuneEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fine_tune_id" })
  fineTuneId: string;
}

export class ListFineTuneEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stream" })
  stream?: boolean;
}

export class ListFineTuneEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListFineTuneEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListFineTuneEventsQueryParams;
}

export class ListFineTuneEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFineTuneEventsResponse?: shared.ListFineTuneEventsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}