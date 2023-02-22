import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class DeleteFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: string;
}