package bat.tech.bd.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Prof {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idprof;
    private String firstname;

    private String lastname;

}

