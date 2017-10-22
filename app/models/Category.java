package models;

import io.ebean.Finder;
import io.ebean.Model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category extends Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String name;

    @OneToMany(mappedBy = "category")
    public List<Product> productList = new ArrayList<Product>();

    public static final Finder<Long, Category> find = new Finder<>(Category.class);
}
