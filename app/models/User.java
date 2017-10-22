package models;

import io.ebean.Finder;
import io.ebean.Model;
import play.data.validation.Constraints;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends Model {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Constraints.Required
    public String name;

    @Constraints.Required
    public String email;

    @OneToMany(mappedBy = "user")
    public List<Order> orders = new ArrayList<Order>();

    public static final Finder<Long, User> find = new Finder<>(User.class);

}