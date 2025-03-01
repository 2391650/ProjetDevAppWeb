package bat.tech.bd.models;

import jakarta.persistence.*;

@Entity
public class Groupe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idgroup;
    private String nomGroupe;

    @ManyToOne
    Prof prof;

}
