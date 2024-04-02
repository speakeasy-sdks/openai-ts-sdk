/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

/**
 * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
 *
 * @remarks
 *
 */
export enum Order {
    Asc = "asc",
    Desc = "desc",
}

export class ListAssistantFilesRequest extends SpeakeasyBase {
    /**
     * A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
    after?: string;

    /**
     * The ID of the assistant the file belongs to.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assistant_id" })
    assistantId: string;

    /**
     * A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
    before?: string;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
    order?: Order;
}

export class ListAssistantFilesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    listAssistantFilesResponse?: shared.ListAssistantFilesResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
