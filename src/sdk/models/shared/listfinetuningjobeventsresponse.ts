/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FineTuningJobEvent } from "./finetuningjobevent";
import { Expose, Type } from "class-transformer";

export enum ListFineTuningJobEventsResponseObject {
    List = "list",
}

export class ListFineTuningJobEventsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: FineTuningJobEvent })
    @Expose({ name: "data" })
    @Type(() => FineTuningJobEvent)
    data: FineTuningJobEvent[];

    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object: ListFineTuningJobEventsResponseObject;
}
