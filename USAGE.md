<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

(async () => {
    const sdk = new Gpt({
        apiKeyAuth: "",
    });
    const runId: string = "string";
    const threadId: string = "string";

    const res = await sdk.assistants.cancelRun(runId, threadId);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage [usage] -->