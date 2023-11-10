/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Image } from "./image";
import { Expose, Type } from "class-transformer";

export class ImagesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created" })
    created: number;

    @SpeakeasyMetadata({ elemType: Image })
    @Expose({ name: "data" })
    @Type(() => Image)
    data: Image[];
}
