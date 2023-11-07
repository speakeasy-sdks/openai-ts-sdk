/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetRunStepRequest extends SpeakeasyBase {
    /**
     * The ID of the run to which the run step belongs.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
    runId: string;

    /**
     * The ID of the run step to retrieve.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=step_id" })
    stepId: string;

    /**
     * The ID of the thread to which the run and run step belongs.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thread_id" })
    threadId: string;
}

export class GetRunStepResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    runStepObject?: shared.RunStepObject;

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
