<!-- Start SDK Example Usage -->
```typescript
import { Openai, withSecurity} from "@speakeasy-api/openai";
import { CancelFineTuneRequest, CancelFineTuneResponse } from "@speakeasy-api/openai/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new Openai();
    
const req: CancelFineTuneRequest = {
  pathParams: {
    fineTuneId: "unde",
  },
};

sdk.openAI.cancelFineTune(req).then((res: CancelFineTuneResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->