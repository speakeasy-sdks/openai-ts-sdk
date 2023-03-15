import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class DownloadFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=file_id",
  })
  fileId: string;
}

export class DownloadFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadFilePathParams;
}

export class DownloadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  downloadFile200ApplicationJSONString?: string;
}
