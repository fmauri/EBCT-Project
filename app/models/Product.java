package models;

import io.ebean.Finder;
import io.ebean.Model;
import play.data.validation.Constraints;

import javax.persistence.*;

@Entity
public class Product extends Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Constraints.Required
    String name;

    String image;
    String extra;

    @Constraints.Required
    Float price;

    @ManyToOne
    public Category category;

    public static final Finder<Long, Product> find = new Finder<>(Product.class);
}
