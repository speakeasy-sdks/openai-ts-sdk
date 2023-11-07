/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAssistantRequest extends SpeakeasyBase {
    /**
     * The ID of the assistant to retrieve.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assistant_id" })
    assistantId: string;
}

export class GetAssistantResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    assistantObject?: shared.AssistantObject;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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