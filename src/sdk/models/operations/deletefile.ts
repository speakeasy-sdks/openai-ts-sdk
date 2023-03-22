/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class DeleteFileRequest extends SpeakeasyBase {
  /**
   * The ID of the file to use for this request
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=file_id",
  })
  fileId: string;
}

export class DeleteFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  deleteFileResponse?: shared.DeleteFileResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
