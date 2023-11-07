/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The quality of the image that will be generated. `hd` creates images with finer details and greater consistency across the image. This param is only supported for `dall-e-3`.
 */
export enum Quality {
    Standard = "standard",
    Hd = "hd",
}

/**
 * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
 */
export enum CreateImageRequestResponseFormat {
    Url = "url",
    B64Json = "b64_json",
}

/**
 * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models.
 */
export enum CreateImageRequestSize {
    TwoHundredAndFiftySixx256 = "256x256",
    FiveHundredAndTwelvex512 = "512x512",
    OneThousandAndTwentyFourx1024 = "1024x1024",
    OneThousandSevenHundredAndNinetyTwox1024 = "1792x1024",
    OneThousandAndTwentyFourx1792 = "1024x1792",
}

/**
 * The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`.
 */
export enum Style {
    Vivid = "vivid",
    Natural = "natural",
}

export class CreateImageRequest extends SpeakeasyBase {
    /**
     * The model to use for image generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: any;

    /**
     * The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "n" })
    n?: number;

    /**
     * A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt: string;

    /**
     * The quality of the image that will be generated. `hd` creates images with finer details and greater consistency across the image. This param is only supported for `dall-e-3`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "quality" })
    quality?: Quality;

    /**
     * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_format" })
    responseFormat?: CreateImageRequestResponseFormat;

    /**
     * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "size" })
    size?: CreateImageRequestSize;

    /**
     * The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "style" })
    style?: Style;

    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    user?: string;
}
