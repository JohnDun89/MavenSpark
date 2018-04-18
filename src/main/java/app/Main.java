package app;

import app.Coin.Coin;
import app.Item.Item;
import app.Util.Path;
import app.VendingMachine.VendingMachine;
import app.VendingMachine.VendingMachineModel;

import static app.Util.enableCORS.enableCORS;
import static spark.Spark.*;

public class Main {

    public static VendingMachine vendingMachine;
    public static Item item;
    public static Coin coin;


    public static void main(String[] args) {


        exception(Exception.class, (e, req, res) -> e.printStackTrace()); // print all exceptions
        staticFiles.location("/public");
        port(9999);

        port(4567);
        staticFiles.location("/public");
        staticFiles.expireTime(600L);
        staticFileLocation("/public");
        enableCORS("*","*","*");
        Item juice = new Item("Juice", 1.50, 5);




        get(Path.Web.ITEMS,          VendingMachine.getItems);
        put("/add/", (request, response) -> { VendingMachineModel.test(); return request.queryParams(":body"); System.out.println();});
    }
}


//        post(Path.Web.UPDATE, (request, response) -> VendingMachineModel.requestHandler(request));
