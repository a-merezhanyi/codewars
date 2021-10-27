public class God {
    public static Human[] create() {
        Human Adam = new Man();
        Human Eve = new Woman();
        return new Human[] { Adam, Eve };
    }
}

class Human {
    public Human() {
    }
}

class Man extends Human {
    public Man() {
    }
}

class Woman extends Man {
    public Woman() {
    }
}
