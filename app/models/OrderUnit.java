package models;

import io.ebean.Finder;
import io.ebean.Model;
import play.data.validation.Constraints;

import javax.persistence.*;

@Entity
public class OrderUnit extends Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Constraints.Required
    public Integer quantity;

    @Constraints.Required
    @ManyToOne(optional = false)
    public Order order;

    @OneToMany(mappedBy = "orderunit")
    public Product product;

    public static final Finder<Long, OrderUnit> find = new Finder<>(OrderUnit.class);
}
