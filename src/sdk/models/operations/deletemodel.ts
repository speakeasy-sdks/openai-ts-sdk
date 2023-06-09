/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteModelRequest extends SpeakeasyBase {
    /**
     * The model to delete
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=model" })
    model: string;
}

export class DeleteModelResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    deleteModelResponse?: shared.DeleteModelResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
