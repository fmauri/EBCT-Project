import play.libs.ws.ahc.*;
import play.shaded.ahc.org.asynchttpclient.Response;
import play.libs.ws.DefaultBodyReadables;
import play.libs.ws.DefaultBodyWritables;

public class MyClient implements DefaultBodyWritables, DefaultBodyReadables {
    public CompletionStage<String> doStuff() {
        return client.url("http://example.com").post(body("hello world")).thenApply(response ->
                response.body(string())
        );
    }
}