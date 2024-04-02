<!-- Start SDK Example Usage [usage] -->
```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CancelRunRequest } from "@speakeasy-api/openai/dist/sdk/models/operations";

async function run() {
    const sdk = new Gpt({
        apiKeyAuth: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const runId: string = "<value>";
    const threadId: string = "<value>";

    const res = await sdk.assistants.cancelRun(runId, threadId);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->