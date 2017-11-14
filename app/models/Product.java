package models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    public String name;

    public String image;
    public String extra;

    @Constraints.Required
    public Float price;

    @JsonBackReference
    @ManyToOne
    public Category category;

    public static final Finder<Long, Product> find = new Finder<>(Product.class);
}
