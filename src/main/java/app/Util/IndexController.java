package app.Util;

import spark.ModelAndView;
import spark.Request;
import spark.Response;

public class IndexController {

    public IndexController() {


    }

    public static ModelAndView serveHomePage (Request re, Response res) {
        return new ModelAndView(null, Path.Template.INDEX);
    }
}
