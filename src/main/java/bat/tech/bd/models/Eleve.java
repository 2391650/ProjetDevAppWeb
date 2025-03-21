package bat.tech.bd.models;

import jakarta.persistence.*;

import javax.swing.*;

@Entity
public class Eleve {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer ideleve;
    private String firstname;

    private String lastname;

    @OneToOne
    Groupe groupe;

}
