package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.google.common.primitives.Ints;
import play.data.FormFactory;
import play.mvc.Controller;
import play.mvc.Result;
import scala.util.parsing.json.JSON;
import services.MailerService;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class OrderController extends Controller {
    private final FormFactory formFactory;

    @Inject
    MailerService mailerService;

    @Inject
    public OrderController(final FormFactory formFactory){
        this.formFactory = formFactory;
    }

    public Result getUserOrders(Long userId){
        return ok("not implemented");
    }

    public Result addOrder(){
        JsonNode json = request().body().asJson();
        if (json == null) {
            return badRequest("Expecting Json data");
        } else {
            String email = json.findPath("email").textValue();
            JsonNode array;// = {};
            array = json.findPath("imgs");
            List<Integer> intList = new ArrayList<Integer>();

            for(final JsonNode imgId: array){
                intList.add(imgId.asInt());
            }

            mailerService.sendEmail(email, Ints.toArray(intList));

            if (email == null) {
                return badRequest("Missing parameter [name]");
            } else {
                return ok("Hello " + email + ", imgs: " + Arrays.toString(intList.toArray()));
            }
        }
    }
}

