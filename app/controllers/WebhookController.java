
import javax.inject.Inject;

import play.mvc.*;
import play.libs.ws.*;

import java.util.concurrent.CompletionStage;

public class WebhookController implements WSBodyReadables, WSBodyWritables extends Controller {
    private final WSClient ws;

    @Inject
    public WebhookController(WSClient ws) {
        this.ws = ws;
    }


    public void call() {
        WSRequest request = ws.url("https://requestb.in/1i2dyvi1").setContentType("application/json").post(jsonString);
    }

}