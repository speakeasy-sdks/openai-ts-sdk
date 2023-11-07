/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The format to audio in. Supported formats are `mp3`, `opus`, `aac`, and `flac`.
 */
export enum CreateSpeechRequestResponseFormat {
    Mp3 = "mp3",
    Opus = "opus",
    Aac = "aac",
    Flac = "flac",
}

/**
 * The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`.
 */
export enum Voice {
    Alloy = "alloy",
    Echo = "echo",
    Fable = "fable",
    Onyx = "onyx",
    Nova = "nova",
    Shimmer = "shimmer",
}

export class CreateSpeechRequest extends SpeakeasyBase {
    /**
     * The text to generate audio for. The maximum length is 4096 characters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "input" })
    input: string;

    /**
     * One of the available [TTS models](/docs/models/tts): `tts-1` or `tts-1-hd`
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model: any;

    /**
     * The format to audio in. Supported formats are `mp3`, `opus`, `aac`, and `flac`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "response_format" })
    responseFormat?: CreateSpeechRequestResponseFormat;

    /**
     * The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "speed" })
    speed?: number;

    /**
     * The voice to use when generating the audio. Supported voices are `alloy`, `echo`, `fable`, `onyx`, `nova`, and `shimmer`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "voice" })
    voice: Voice;
}