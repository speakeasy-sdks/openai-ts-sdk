import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateFileRequestFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}

export class CreateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: CreateFileRequestFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=purpose" })
  purpose: string;
}