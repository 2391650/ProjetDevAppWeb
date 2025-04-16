package frognest.tech.backend.model;

import jakarta.persistence.*;

@Entity
public class Groupe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idgroup;
    private String nomGroupe;

    @ManyToOne
    Prof prof;


    public Long getIdgroup() {

        return idgroup;
    }

    public void setIdgroup(Long idgroup) {
        this.idgroup = idgroup;
    }

    public String getNomGroupe() {
        return nomGroupe;
    }

    public void setNomGroupe(String nomGroupe) {
        this.nomGroupe = nomGroupe;
    }

    public Prof getProf() {
        return prof;
    }

    public void setProf(Prof prof) {
        this.prof = prof;
    }
}
