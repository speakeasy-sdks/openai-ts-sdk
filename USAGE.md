<!-- Start SDK Example Usage -->


```typescript
import { Gpt } from "@speakeasy-api/openai";

(async() => {
  const sdk = new Gpt({
    security: {
      apiKeyAuth: "",
    },
  });

  const res = await sdk.openAI.cancelFineTune({
    fineTuneId: "ft-AF1WoRqd3aJAHsqc9NY7iL8F",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->