import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Type } from "class-transformer";


export class CreateTranscriptionRequestFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}

export class CreateTranscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: CreateTranscriptionRequestFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=model" })
  model: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=prompt" })
  prompt?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=response_format" })
  responseFormat?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=temperature" })
  temperature?: number;
}