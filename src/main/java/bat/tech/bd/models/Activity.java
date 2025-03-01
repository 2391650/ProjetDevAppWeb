package bat.tech.bd.models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idactivity;
    private Date date;



      @ManyToOne
    Categorie categorie;
      @ManyToOne
    Eleve eleve;





}
