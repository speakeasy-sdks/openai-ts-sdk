/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class CreateTranscriptionRequestFile extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=file" })
    file: string;
}

/**
 * ID of the model to use. Only `whisper-1` is currently available.
 *
 * @remarks
 *
 */
export enum CreateTranscriptionRequestModel2 {
    Whisper1 = "whisper-1",
}

/**
 * The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
 *
 * @remarks
 *
 */
export enum CreateTranscriptionRequestResponseFormat {
    Json = "json",
    Text = "text",
    Srt = "srt",
    VerboseJson = "verbose_json",
    Vtt = "vtt",
}

export class CreateTranscriptionRequest1 extends SpeakeasyBase {
    /**
     * The audio file object (not file name) to transcribe, in one of these formats: mp3, mp4, mpeg, mpga, m4a, wav, or webm.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file: CreateTranscriptionRequestFile;

    /**
     * The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=language" })
    language?: string;

    /**
     * ID of the model to use. Only `whisper-1` is currently available.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=model;json=true" })
    model: any;

    /**
     * An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=prompt" })
    prompt?: string;

    /**
     * The format of the transcript output, in one of these options: json, text, srt, verbose_json, or vtt.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=response_format" })
    responseFormat?: CreateTranscriptionRequestResponseFormat;

    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=temperature" })
    temperature?: number;
}
