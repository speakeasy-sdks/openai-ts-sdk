import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class RetrieveFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}

export class RetrieveFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveFilePathParams;
}

export class RetrieveFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  openAIFile?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}