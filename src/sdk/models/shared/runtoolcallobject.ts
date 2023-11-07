/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * The function definition.
 */
export class RunToolCallObjectFunction extends SpeakeasyBase {
    /**
     * The arguments that the model expects you to pass to the function.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "arguments" })
    arguments: string;

    /**
     * The name of the function.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * The type of tool call the output is required for. For now, this is always `function`.
 */
export enum RunToolCallObjectType {
    Function = "function",
}

/**
 * Tool call objects
 */
export class RunToolCallObject extends SpeakeasyBase {
    /**
     * The function definition.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "function" })
    @Type(() => RunToolCallObjectFunction)
    function: RunToolCallObjectFunction;

    /**
     * The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The type of tool call the output is required for. For now, this is always `function`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: RunToolCallObjectType;
}