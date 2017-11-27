package controllers;

import com.google.inject.Inject;
import play.mvc.*;
import play.libs.ws.DefaultBodyReadables;
import play.libs.ws.DefaultBodyWritables;

import java.io.File;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class PayPalController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(views.html.checkout.render());
    }


    public Result checkout() {
        return ok(new java.io.File("/public/checkout.html"));
    }

    public Result process() {
        return ok(views.html.checkout.render());
    }

    public Result sayHello() {
        JsonNode json = request().body().asJson();
        if (json == null) {
            return badRequest("Expecting Json data");
        } else {
            String name = json.findPath("name").textValue();
            if (name == null) {
                return badRequest("Missing parameter [name]");
            } else {
                return ok("Hello " + name);
            }
        }
    }

}
