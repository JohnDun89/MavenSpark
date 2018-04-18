package app.Item;

public class Item {

;
    private String name;
    private Double price;
    private Integer quanitityInMachine;

    public Item(String name, Double price, Integer quanitityInMachine) {
        this.name = name;
        this.price = price;
        this.quanitityInMachine = quanitityInMachine;
    }

    public Double getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setQuanitityInMachine(Integer qunatity) {
        this.quanitityInMachine += qunatity;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}
