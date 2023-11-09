/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class FunctionObject extends SpeakeasyBase {
    /**
     * A description of what the function does, used by the model to choose when and how to call the function.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The parameters the functions accepts, described as a JSON Schema object. See the [guide](/docs/guides/gpt/function-calling) for examples, and the [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation about the format.
     *
     * @remarks
     *
     * To describe a function that accepts no parameters, provide the value `{"type": "object", "properties": {}}`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parameters" })
    parameters: Record<string, any>;
}
