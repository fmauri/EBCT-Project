@Security.Authenticated(ActionAuthenticator.class)
public static Result awesomeAction(){
        return ok("Very awesome content!");
        }