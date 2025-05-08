package frognest.tech.backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Groupe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idgroup;
    private String nomGroupe;


    // Solution TEMPORAIRE proposée par ChatGPT, méthode peu recommandée, supression en cascade
    // Méthode choisie TEMPORAIREMENT parce que j'était trop fatigué pour chercher une autre solution (méthode de service)
    @OneToMany(mappedBy = "groupe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Eleve> eleves;

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
