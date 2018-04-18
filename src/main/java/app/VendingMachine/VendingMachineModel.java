package app.VendingMachine;

import app.Coin.Coin;
import app.Item.Item;
import com.google.common.collect.ImmutableList;
import spark.Request;

import java.util.ArrayList;

public class VendingMachineModel {

    private static ImmutableList<Item> items = ImmutableList.of(
            new Item("Chocolate", 0.65, 12),
            new Item("Crisps", 1.00, 8),
            new Item("Juice", 1.50, 5)
    );
    private static Iterable<Item> itemsList;
    private static ArrayList<Coin> insertedCoins;


    public VendingMachineModel() {
        this.itemsList = new ArrayList<Item>();
        this.insertedCoins = new ArrayList<Coin>();
    }


    public static Iterable<Item> getAllItems() {
        return items;
    }

    public static String requestHandler (Request request) {
        System.out.println("hit");
   String name = request.queryParams("name");
   System.out.println(name);
    return name;

    }

    public static Iterable<Item> addOneItem(String item, String quantity) {


        for (Item item1 : items) {
            if (item == item1.getName()) {
                Integer intValue = Integer.valueOf(quantity);
                item1.setQuanitityInMachine(intValue);
            }
        }
        return itemsList;
    }

    public static String test () {
        System.out.println("potatoe");
        return "onion";
    }

    public static void customerCanInsertCoins(ArrayList<Coin> inputedCoins) {
        insertedCoins = inputedCoins;
    }

    public static Double valueOfInputedCoins() {
        Double total = 0.0;
        for (Coin coin : insertedCoins) {
            total += coin.getValue();
        }
        return total;
    }

    public static Boolean canCustomerAffordItem(Item item) {
        if (item.getPrice() == valueOfInputedCoins()) {
            return true;
        } else return false;
    }

    public static void sellItem(Item item) {

    }

}




//    private static ArrayList<Item> items;
//
//    public VendingMachineModel(){
//        this.items = new ArrayList<Item>();
//        items.add(new Item("Chocolate", 0.65, 12));
//        items.add(new Item("Crisps", 1.00, 8));
//        items.add(new Item("Juice",  1.50, 5));
//    }
//
//
//
//
//    public static ArrayList<Item> getAllItems(){
//        return items;
//    }