<!-- Start SDK Example Usage -->


```typescript
import { Gpt } from "@speakeasy-api/openai";
import { CreateTranscriptionRequestResponseFormat } from "@speakeasy-api/openai/dist/sdk/models/shared";

(async() => {
  const sdk = new Gpt({
    apiKeyAuth: "",
  });

  const res = await sdk.audio.createTranscription({
    file: {
      content: "\#BbTW'zX9" as bytes <<<>>>,
      file: "string",
    },
    model: "whisper-1",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->