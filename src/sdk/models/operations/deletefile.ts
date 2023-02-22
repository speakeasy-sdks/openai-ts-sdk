import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class DeleteFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}

export class DeleteFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFilePathParams;
}

export class DeleteFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteFileResponse?: shared.DeleteFileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}