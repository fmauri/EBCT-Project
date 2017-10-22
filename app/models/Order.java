package models;

import io.ebean.Finder;
import io.ebean.Model;
import play.data.validation.Constraints;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="OrderTable")
public class Order extends Model {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Constraints.Required
    public Date date;

    @Constraints.Required
    public String address;

    @Constraints.Required
    @ManyToOne(optional = false)
    public User user;

    @OneToMany(mappedBy = "order")
    public List<OrderUnit> orderUnits = new ArrayList<OrderUnit>();

    public static final Finder<Long, Order> find = new Finder<>(Order.class);

}
