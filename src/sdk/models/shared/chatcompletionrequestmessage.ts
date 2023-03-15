import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum ChatCompletionRequestMessageRoleEnum {
  System = "system",
  User = "user",
  Assistant = "assistant",
}

export class ChatCompletionRequestMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role: ChatCompletionRequestMessageRoleEnum;
}
