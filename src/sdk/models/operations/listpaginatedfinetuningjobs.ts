/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListPaginatedFineTuningJobsRequest extends SpeakeasyBase {
    /**
     * Identifier for the last job from the previous pagination request.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * Number of fine-tuning jobs to retrieve.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;
}

export class ListPaginatedFineTuningJobsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    listPaginatedFineTuningJobsResponse?: shared.ListPaginatedFineTuningJobsResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
