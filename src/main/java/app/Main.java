package app;

import app.Coin.Coin;
import app.Item.Item;
import app.Util.IndexController;
import app.Util.Path;
import app.VendingMachine.VendingMachine;
import spark.template.handlebars.HandlebarsTemplateEngine;

import static spark.Spark.*;

public class Main {

    public static VendingMachine vendingMachine;
    public static Item item;
    public static Coin coin;

    public static void main(String[] args) {

        port(4567);
        staticFiles.location("/public");
        staticFiles.expireTime(600L);
        staticFileLocation("/public");

        get(Path.Web.ITEMS,          VendingMachine.getItems);

        get(Path.Web.HOME, (req, res) -> IndexController.serveHomePage(req, res), new HandlebarsTemplateEngine());

//        get(, (rq, rs) -> new ModelAndView(map, "hello.hbs"), (ResponseTransformer) new Handlebars());

    };

//        get("/hello", (req, res) -> "Hello, World");
//
//        get("/data", (req, res) -> "Hello Api my old friend");





}


