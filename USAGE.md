<!-- Start SDK Example Usage -->
```typescript
import {
  CancelFineTuneRequest,
  CancelFineTuneResponse
} from "@speakeasy-api/openai/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Gpt } from "@speakeasy-api/openai";
const sdk = new Gpt();

const req: CancelFineTuneRequest = {
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
};

sdk.openAI.cancelFineTune(req).then((res: CancelFineTuneResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->