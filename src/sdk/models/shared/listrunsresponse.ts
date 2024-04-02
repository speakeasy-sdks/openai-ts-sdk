/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RunObject } from "./runobject";
import { Expose, Type } from "class-transformer";

export class ListRunsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: RunObject })
    @Expose({ name: "data" })
    @Type(() => RunObject)
    data: RunObject[];

    @SpeakeasyMetadata()
    @Expose({ name: "first_id" })
    firstId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "has_more" })
    hasMore: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "last_id" })
    lastId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: string;
}
