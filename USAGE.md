<!-- Start SDK Example Usage -->
```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelFineTuneRequest, CancelFineTuneResponse } from "@speakeasy-api/openai/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new Gpt();

const req: CancelFineTuneRequest = {
  fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
};

sdk.openAI.cancelFineTune(req).then((res: CancelFineTuneResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->