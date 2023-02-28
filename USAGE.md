<!-- Start SDK Example Usage -->
```typescript
import {
  CancelFineTuneRequest,
  CancelFineTuneResponse 
} from "@speakeasy-api/openai/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Openai } from "@speakeasy-api/openai";


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